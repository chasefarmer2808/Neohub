import json
import time
from flask_restful import Resource
from flask_restful.reqparse import RequestParser

from resources.strip import strips
from schemas.animation import AnimationSchema

class Animation(Resource):
    def __init__(self):
        pass
    
    def get(self):
        anim_request_parser = RequestParser(bundle_errors=True)
        anim_request_parser.add_argument('id', type=int, required=True)
        anim_request_parser.add_argument('file', required=True)
        args = anim_request_parser.parse_args()

        neopixel = strips[args['id']]

        with open(args['file']) as f:
            animation = json.load(f)
        
        animSchema = AnimationSchema()
        res = animSchema.load(animation)

        i = 0
        while(True):
            frame = res[0]['frames'][i]
            colors = [tuple(c) for c in frame['colors']]
            neopixel.neopixel[:] = colors
            time.sleep(frame['duration'])
            i += 1
            i = i % 3

        return res