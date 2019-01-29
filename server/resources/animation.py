import json
import time
import threading
from flask_restful import Resource
from flask_restful.reqparse import RequestParser

from resources.strip import strips
from schemas.animation import AnimationSchema
from animations.animation_thread import AnimationThread


class Animation(Resource):
    def __init__(self):
        pass
    
    def post(self):
        anim_request_parser = RequestParser(bundle_errors=True)
        anim_request_parser.add_argument('id', type=int, required=True)
        anim_request_parser.add_argument('file', required=True)
        args = anim_request_parser.parse_args()

        neopixel = strips[args['id']]

        for thread in threading.enumerate():
            if type(thread) is AnimationThread:
                if thread.neopixel.id == neopixel.id:
                    thread.stop_flag = True
                    thread.join()
                    return 200
        
        with open(args['file']) as f:
            animation = json.load(f)
        
        anim_schema = AnimationSchema()
        res = anim_schema.load(animation)

        anim_thread = AnimationThread(neopixel, res[0]['frames'])
        anim_thread.start()

        return res
