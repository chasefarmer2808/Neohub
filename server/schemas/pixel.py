from marshmallow import Schema, fields

class Pixel(object):
    def __init__(self, index, color):
        self.index = index
        self.color = color

class PixelSchema(Schema):
    index = fields.Integer()
    color = fields.List(fields.Integer())