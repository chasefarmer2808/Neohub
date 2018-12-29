import board
import atexit

from flask import request
from flask_restful import Resource, marshal_with
from flask_restful.reqparse import RequestParser

from schemas.neopixel import Neopixel, NeopixelSchema, GREEN

strips = []
strip_id = 0

class Strip(Resource):
    def __init__(self):
        pass

    def get(self):
        neopixel_schema = NeopixelSchema(many=True)
        res = neopixel_schema.dump(strips)
        return res

    def post(self):
        global strips
        init_request_parser = RequestParser(bundle_errors=True)
        init_request_parser.add_argument('pin', type=str, required=True)
        init_request_parser.add_argument('num_pixels', type=int, required=True)
        init_request_parser.add_argument('brightness', type=str, default='0.2')
        args = init_request_parser.parse_args()

        strip_id = len(strips)
        new_strip = Neopixel(strip_id, 
                            'strip',
                            args['pin'],
                            args['num_pixels'],
                            args['brightness'])

        strips.append(new_strip)
        strip_id += 1
        
        for i in range(0, 3):
            new_strip.fill_blink(GREEN, 0.15)

        return 200

    def put(self):
        set_pixel_parser = RequestParser(bundle_errors=True)
        set_pixel_parser.add_argument('id', type=int, required=True)
        set_pixel_parser.add_argument('index', type=int, required=True)
        set_pixel_parser.add_argument('r', type=int, required=True)
        set_pixel_parser.add_argument('g', type=int, required=True)
        set_pixel_parser.add_argument('b', type=int, required=True)
        args = set_pixel_parser.parse_args()

        new_color = (args['r'], args['g'], args['b'])
        
        neopixel = strips[args['id']]
        neopixel.pixels[args['index']].color = new_color # Index out of range error will happen here.
        neopixel.show_colors()

        return 200

    def delete(self):
        global strips

        delete_strip_parser = RequestParser(bundle_errors=True)
        delete_strip_parser.add_argument('id', type=int, required=True)
        args = delete_strip_parser.parse_args()

        strip_id = args['id']

        strips[strip_id].__del__()
        strips.remove(strips[strip_id])

        return 200