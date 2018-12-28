import board
import neopixel
import atexit

from flask import request
from flask_restful import Resource
from flask_restful.reqparse import RequestParser

strips = []
strip_id = 0

@atexit.register
def detach_pixels():
    for strip in strips:
        strip['strip'].deinit()    

class Strip(Resource):
    def __init__(self):
        pass

    # FIXME: Figure out how to marshal the strip list
    def get(self):
        return strips

    def post(self):
        init_request_parser = RequestParser(bundle_errors=True)
        init_request_parser.add_argument('pin', type=str, required=True)
        init_request_parser.add_argument('num_pixels', type=int, required=True)
        init_request_parser.add_argument('brightness', type=str, default='0.2')

        args = init_request_parser.parse_args()
        brightness = float(args['brightness'])

        try:
            pin = self.get_board_pin(args['pin'].upper())
        except ValueError:
            return 'Invalid Digital IO pin.', 401

        strip_id = len(strips)
        # Possible improvement: neopixel strip factory
        new_strip = {
            'id': strip_id,
            'strip': neopixel.NeoPixel(pin, args['num_pixels'], brightness=brightness)
        }

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
