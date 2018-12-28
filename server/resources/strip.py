import board
import atexit

from flask import request
from flask_restful import Resource, marshal_with
from flask_restful.reqparse import RequestParser

from schemas.neopixel import Neopixel, NeopixelSchema

strips = []
strip_id = 0

@atexit.register
def detach_pixels():
    for strip in strips:
        strip.neopixel.deinit()    

class Strip(Resource):
    def __init__(self):
        pass

    def get(self):
        neopixel_schema = NeopixelSchema(many=True)
        res = neopixel_schema.dump(strips)
        return res

    def post(self):
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

        return

    def put(self):
        set_pixel_parser = RequestParser(bundle_errors=True)
        set_pixel_parser.add_argument('id', type=int, required=True)
        set_pixel_parser.add_argument('index', type=int, required=True)
        set_pixel_parser.add_argument('r', type=int, required=True)
        set_pixel_parser.add_argument('g', type=int, required=True)
        set_pixel_parser.add_argument('b', type=int, required=True)
        args = set_pixel_parser.parse_args()
        
        strip = strips[args['id']]['strip']

        try:
            strip[args['index']] = (args['r'], args['g'], args['b'])
            strip.show()
        except IndexError:
            return 'Pixel index out of range.', 400

        return

    def get_board_pin(self, pin_str):
        if pin_str == 'D18':
            return board.D18
        else:
            raise ValueError
