import board
import neopixel
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
        self.type = type
        self.pin = pin
        self.num_pixels = num_pixels
        self.brightness = float(brightness)
        self.neopixel = neopixel.NeoPixel(self.get_gpio_pin(), self.num_pixels, brightness=self.brightness, auto_write=True)    

        try:
            self.pixels = kwargs['pixels']
        except KeyError:
            self.pixels = []

        try:
            self.animations = kwargs['animations']
        except KeyError:
            self.animations = []

    def init_pixels(self, color):
        for i in range(0, self.num_pixels):
            self.pixels.append(Pixel())

    def draw(self):
        for i in range(0, self.num_pixels):
            self.neopixel[i] = tuple(self.pixels[i]['color'])

    def get_gpio_pin(self):
        if self.pin == '18':
            return board.D18
        else:
            raise ValueError

    # def fill_blink(self, color, delay):
    #     self.neopixel.fill(color)
    #     time.sleep(delay)
    #     self.neopixel.fill(BLACK)
    #     time.sleep(delay)

class NeopixelSchema(Schema):
    # _id = fields.String()
    type = fields.String()
    pin = fields.String()
    num_pixels = fields.Integer()
    brightness = fields.Float()
    pixels = fields.Nested(PixelSchema, many=True)
    animations = fields.List(fields.String())

    @post_load
    def make_neopixel(self, data):
        return Neopixel(**data)
    