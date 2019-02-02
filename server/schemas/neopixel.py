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
    def __init__(self, id, type, pin, num_pixels, brightness):
        self.id = id
        self.type = type
        self.pin = pin
        self.num_pixels = num_pixels
        self.brightness = float(brightness)
        self.neopixel = neopixel.NeoPixel(self.get_gpio_pin(), self.num_pixels, brightness=self.brightness, auto_write=True)
        self.pixels = []
        self.animations = []

        for i in range(0, num_pixels):
            self.pixels.append(Pixel(self.id, i, (0, 0, 0)))
            self.neopixel[i] = (0, 0, 0)

        anim_dir = Path('server/animations')
        anim_paths = list(anim_dir.glob('*.json'))

        for anim_file in anim_paths:
            with open(str(anim_file)) as f:
                animation = json.load(f)

                if animation['neopixelId'] == self.id:
                    self.animations.append(anim_file.stem)

    def get_gpio_pin(self):
        if self.pin == '18':
            return board.D18
        else:
            raise ValueError

    def show_colors(self):
        for i in range(0, len(self.pixels)):
            self.neopixel[i] = self.pixels[i].color

    def updateAllPixels(self, color):
        for i in range(0, self.num_pixels):
            self.pixels[i].color = color

    def fill_blink(self, color, delay):
        self.neopixel.fill(color)
        time.sleep(delay)
        self.neopixel.fill(BLACK)
        time.sleep(delay)

class NeopixelSchema(Schema):
    id = fields.Integer()
    type = fields.String()
    pin = fields.String()
    num_pixels = fields.Integer()
    brightness = fields.Float()
    pixels = fields.Nested(PixelSchema, many=True)
    animations = fields.List(fields.String())

    def get_pin_str(self, gpio_pin):
        if gpio_pin == board.D18:
            return 'D18'
        else:
            raise ValueError

    