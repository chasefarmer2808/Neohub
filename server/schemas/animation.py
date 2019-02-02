from marshmallow import Schema, fields
from schemas.frame import FrameSchema

class AnimationSchema(Schema):
    neopixel_id = fields.Integer()
    frames = fields.Nested(FrameSchema, many=True)