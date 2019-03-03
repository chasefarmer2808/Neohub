import time
import json
from pathlib import Path

from marshmallow import Schema, fields, post_load
from schemas.pixel import Pixel, PixelSchema

RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
BLACK = (0, 0, 0)

class Neopixel(object):
    def __init__(self, type, pin, num_pixels, brightness, **kwargs):
        self.thread_id = 0
        self.type = type
        self.pin = pin
        self.num_pixels = num_pixels
        self.brightness = float(brightness)

        try:
            self.pixels = kwargs['pixels']
        except KeyError:
            self.pixels = []
            self.init_pixels()

        try:
            self.animations = kwargs['animations']
        except KeyError:
            self.animations = []

    def init_pixels(self):
        for i in range(0, self.num_pixels):
            self.pixels.append(Pixel())

class NeopixelSchema(Schema):
    thread_id = fields.Integer()
    type = fields.String()
    pin = fields.String()
    num_pixels = fields.Integer()
    brightness = fields.Float()
    pixels = fields.Nested(PixelSchema, many=True)
    animations = fields.List(fields.String())

    @post_load
    def make_neopixel(self, data):
        return Neopixel(**data)
    