from marshmallow import Schema, fields
from schemas.frame import FrameSchema

class AnimationSchema(Schema):
    frames = fields.Nested(FrameSchema, many=True)