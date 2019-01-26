from marshmallow import Schema, fields

class FrameSchema(Schema):
    colors = fields.List(fields.List(fields.Integer))
    duration = fields.Float()