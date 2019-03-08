import threading
from flask_restful import Resource, marshal_with
from flask_restful.reqparse import RequestParser
from bson.objectid import ObjectId
from pymongo import ReturnDocument

from project.schemas.neopixel import Neopixel, NeopixelSchema, GREEN, BLACK
from project.schemas.pixel import Pixel, PixelSchema
from project.neopixel_utils.neopixel_thread import NeopixelThread


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
        init_request_parser.add_argument('pin', type=int, required=True)
        init_request_parser.add_argument('num_pixels', type=int, required=True)
        init_request_parser.add_argument('brightness', type=int, default=0.2)
        args = init_request_parser.parse_args()

        if args['brightness'] == 0:
            return 'Invalid brightness', 500

        if args['brightness'] > 255:
            args['brightness'] = 255

        new_strip = Neopixel(
            'strip',
            args['pin'],
            args['num_pixels'],
            args['brightness'])
        
        neopixel_schema = NeopixelSchema()
        pixel_schema = PixelSchema(many=True)
        pixels = pixel_schema.dump(new_strip.pixels).data

        _id = self.db.neopixel.insert_one(neopixel_schema.dump(new_strip).data).inserted_id

        neo_thread = NeopixelThread(
            str(_id),
            args['pin'],
            args['num_pixels'],
            args['brightness'],
            pixels)

        try:
            neo_thread.start()
        except TypeError:
            query = {
                '_id': ObjectId(_id)
            }
            self.db.neopixel.delete_one(query)
            return 500
        
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

        if args['r'] > 255:
            args['r'] = 255

        if args['g'] > 255:
            args['g'] = 255

        if args['b'] > 255:
            args['b'] = 255
        
        neo_thread = None
        new_color = [args['r'], args['g'], args['b']]
        
        query = {
            '_id': ObjectId(args['_id'])
        }

        for thread in threading.enumerate():
            if type(thread) is NeopixelThread:
                if thread.id == args['_id']:
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

        if not neopixel:
            return 404
        
        self.db.neopixel.delete_one(query)

        for thread in threading.enumerate():
            if type(thread) is NeopixelThread:
                if thread.id == args['_id']:
                    thread.stop_flag = True
                    thread.join()
        
        return 200