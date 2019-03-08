from marshmallow import Schema, fields

class Pixel(object):
    def __init__(self):
        self.color = [0, 0, 0]

class PixelSchema(Schema):
    color = fields.List(fields.Integer())