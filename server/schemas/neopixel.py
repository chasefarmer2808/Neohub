import board
import neopixel
import time
import json
from pathlib import Path

from marshmallow import Schema, fields
from schemas.pixel import Pixel, PixelSchema

RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
BLACK = (0, 0, 0)

class Neopixel(object):
    def __init__(self, type, pin, num_pixels, brightness):
        self.type = type
        self.pin = pin
        self.num_pixels = num_pixels
        self.brightness = float(brightness)
        # self.neopixel = neopixel.NeoPixel(self.get_gpio_pin(), self.num_pixels, brightness=self.brightness, auto_write=True)
        self.pixels = []
        self.animations = []

        self.updateAllPixels(BLACK)

        # anim_dir = Path('server/animations')
        # anim_paths = list(anim_dir.glob('*.json'))

        # for anim_file in anim_paths:
        #     with open(str(anim_file)) as f:
        #         animation = json.load(f)

        #         if animation['neopixelId'] == self.id:
        #             self.animations.append(anim_file.stem)

    # def show_colors(self):
    #     for i in range(0, len(self.pixels)):
    #         self.neopixel[i] = self.pixels[i].color

    def updateAllPixels(self, color):
        for i in range(0, self.num_pixels):
            self.pixels[i].color = color

    def draw(self):
        with neopixel.NeoPixel(self.get_gpio_pin(), self.num_pixels, brightness=self.brightness, auto_write=True) as pixels:
            for i in range(0, self.num_pixels):
                pixels[i] = self.pixels[i].color

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
    _id = fields.String()
    type = fields.String()
    pin = fields.String()
    num_pixels = fields.Integer()
    brightness = fields.Float()
    pixels = fields.Nested(PixelSchema, many=True)
    animations = fields.List(fields.String())

    