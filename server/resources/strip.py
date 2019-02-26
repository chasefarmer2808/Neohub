import board
from flask_restful import Resource, marshal_with
from flask_restful.reqparse import RequestParser
from bson.objectid import ObjectId

from schemas.neopixel import Neopixel, NeopixelSchema, GREEN, BLACK

strips = []
strip_id = 0


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

        self.db.neopixel.insert_one(neopixel_schema.dump(new_strip).data)
                            
        # for i in range(0, 3):
        #     new_strip.fill_blink(GREEN, 0.15)

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
        
        # neopixel = strips[args['id']]

        for i in range(args['index_start'], args['index_end'] + 1):
            pixel = 'pixels.{}'.format(i)
            query = {
                '_id': ObjectId(args['_id'])
            }
            update = {
                '$set': {
                    pixel: {
                        'color': new_color
                    }
                }
            }
            print(update)
            self.db.neopixel.update_one(query, update)
            # neopixel.pixels[i].color = new_color # Index out of range error can happen here until index vals are checked.
            # neopixel.show_colors()

        return 200

    def delete(self):
        global strips

        delete_strip_parser = RequestParser(bundle_errors=True)
        delete_strip_parser.add_argument('id', type=int, required=True)
        args = delete_strip_parser.parse_args()

        strip_id = args['id']

        selected_neopixel = [pixel for pixel in strips if pixel.id == strip_id]

        if len(selected_neopixel):
            selected_neopixel[0].updateAllPixels(BLACK)
            selected_neopixel[0].neopixel.fill(BLACK)
            return 200
        
        return 404