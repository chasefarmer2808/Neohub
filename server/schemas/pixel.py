from marshmallow import Schema, fields

class Pixel(object):
    def __init__(self, neopixelId, index, color):
        self.neopixelId = neopixelId
        self.index = index
        self.color = color

class PixelSchema(Schema):
    neopixelId = fields.Integer()
    index = fields.Integer()
    color = fields.List(fields.Integer())