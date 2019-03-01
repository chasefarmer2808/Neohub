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
        init_request_parser.add_argument('brightness', type=str, default='0.2')
        args = init_request_parser.parse_args()

        new_strip = Neopixel('strip',
                            args['pin'],
                            args['num_pixels'],
                            args['brightness'])
        
        neopixel_schema = NeopixelSchema()
        pixel_schema = PixelSchema()
        pixel_dict = pixel_schema.dump(new_strip.pixels).data
        print(pixel_dict)

        self.db.neopixel.insert_one(neopixel_schema.dump(new_strip).data)
                            
        neo_thread = NeopixelThread(
            args['pin'],
            args['num_pixels'],
            args['brightness'],
            pixel_dict)
        neo_thread.start()
        
        return 200

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

        for thread in threading.enumerate():
            if type(thread) is NeopixelThread:
                neo_thread = thread

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

        self.db.neopixel.delete_one(query)

        for thread in threading.enumerate():
            if type(thread) is NeopixelThread:
                thread.stop_flag = True
                thread.join(1)
        
        return 200