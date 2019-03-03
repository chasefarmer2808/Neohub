import threading
from flask_restful import Resource, marshal_with
from flask_restful.reqparse import RequestParser
from bson.objectid import ObjectId
from pymongo import ReturnDocument

from schemas.neopixel import Neopixel, NeopixelSchema, GREEN, BLACK
from schemas.pixel import Pixel, PixelSchema
from neopixel_utils.neopixel_thread import NeopixelThread


class Strip(Resource):
    def __init__(self, db):
        self.db = db.db

    def get(self):
        neopixels = self.db.neopixel.find({})
        neopixel_schema = NeopixelSchema(many=True)
        res = neopixel_schema.dump(neopixels)
        return res

    def post(self):
        init_request_parser = RequestParser(bundle_errors=True)
        init_request_parser.add_argument('pin', type=str, required=True)
        init_request_parser.add_argument('num_pixels', type=int, required=True)
        init_request_parser.add_argument('brightness', type=float, default=0.2)
        args = init_request_parser.parse_args()

        if args['brightness'] == 0.0:
            return 500

        if args['brightness'] > 1.0:
            args['brightness'] = 1.0

        new_strip = Neopixel('strip',
                            args['pin'],
                            args['num_pixels'],
                            args['brightness'])
        
        neopixel_schema = NeopixelSchema()
        pixel_schema = PixelSchema(many=True)
        pixels = pixel_schema.dump(new_strip.pixels).data

        neo_thread = NeopixelThread(
            args['pin'],
            args['num_pixels'],
            args['brightness'],
            pixels)
        neo_thread.start()

        new_strip.thread_id = neo_thread.id

        _id = self.db.neopixel.insert_one(neopixel_schema.dump(new_strip).data).inserted_id
        
        neo_thread.blink(3, 0.15)
        
        return str(_id)

    def put(self):
        set_pixel_parser = RequestParser(bundle_errors=True)
        set_pixel_parser.add_argument('_id', required=True)
        set_pixel_parser.add_argument('index_start', type=int, required=True)
        set_pixel_parser.add_argument('index_end', type=int, required=True)
        set_pixel_parser.add_argument('r', type=int, required=True)
        set_pixel_parser.add_argument('g', type=int, required=True)
        set_pixel_parser.add_argument('b', type=int, required=True)
        args = set_pixel_parser.parse_args()

        new_color = [args['r'], args['g'], args['b']]
        
        query = {
            '_id': ObjectId(args['_id'])
        }

        neopixel = self.db.neopixel.find_one(query)

        if not neopixel:
            return 404

        for thread in threading.enumerate():
            if type(thread) is NeopixelThread:
                if thread.id == neopixel['thread_id']:
                    neo_thread = thread

        if not neo_thread:
            return 404

        for i in range(args['index_start'], args['index_end'] + 1):
            pixel = 'pixels.{}'.format(i)
            
            update = {
                '$set': {
                    pixel: {
                        'color': new_color
                    }
                }
            }
            
            neopixel = self.db.neopixel.find_one_and_update(query, update, return_document=ReturnDocument.AFTER)

            neo_thread.pixels = neopixel['pixels']
        
        neo_thread.update_flag = True

        return 200

    def delete(self):
        delete_strip_parser = RequestParser(bundle_errors=True)
        delete_strip_parser.add_argument('_id', required=True)
        args = delete_strip_parser.parse_args()

        query = {
            '_id': ObjectId(args['_id'])
        }

        neopixel = self.db.neopixel.find_one(query)
        
        self.db.neopixel.delete_one(query).raw_result
        print(neopixel)

        if not neopixel:
            return 404

        for thread in threading.enumerate():
            if type(thread) is NeopixelThread:
                if thread.id == neopixel['thread_id']:
                    thread.stop_flag = True
                    thread.join(1)
        
        return 200