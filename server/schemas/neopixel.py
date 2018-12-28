import board
import neopixel

from marshmallow import Schema, fields
from schemas.pixel import Pixel, PixelSchema

class Neopixel(object):
    def __init__(self, id, type, pin, num_pixels, brightness):
        self.id = id
        self.type = type
        self.pin = pin
        self.num_pixels = num_pixels
        self.brightness = float(brightness)
        self.neopixel = neopixel.NeoPixel(self.get_gpio_pin(), self.num_pixels, brightness=self.brightness)
        self.pixels = []

        for i in range(0, num_pixels):
            self.pixels.append(Pixel(i, (0, 0, 0)))

    def get_gpio_pin(self):
        if self.pin == '18':
            return board.D18
        else:
            raise ValueError

class NeopixelSchema(Schema):
    id = fields.Integer()
    type = fields.String()
    pin = fields.String()
    num_pixels = fields.Integer()
    brightness = fields.Float()
    pixels = fields.Nested(PixelSchema, many=True)

    def get_pin_str(self, gpio_pin):
        if gpio_pin == board.D18:
            return 'D18'
        else:
            raise ValueError

    