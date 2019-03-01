import threading
import atexit
from flask import Flask, render_template, redirect, url_for
from flask_cors import CORS
from flask_restful import Api
from flask_marshmallow import Marshmallow
from flask_pymongo import PyMongo

from resources.strip import Strip
from neopixel_utils.neopixel_thread import NeopixelThread

@atexit.register
def release_neopixels():
    for thread in threading.enumerate():
        if type(thread) is NeopixelThread:
            thread.stop_flag = True
            thread.join(1)

# from resources.animation import Animation

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/neohub'
mongo = PyMongo(app)
api = Api(app)
ma = Marshmallow(app)

api.add_resource(Strip, '/api/strip', resource_class_args=[mongo])
# api.add_resource(Animation, '/api/animation')

cors = CORS(app, resources={r'/api/*': {'origins': '*'}})

for doc in mongo.db.neopixel.find():
    NeopixelThread(
        doc['pin'],
        doc['num_pixels'],
        doc['brightness'],
        doc['pixels']
    ).start()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def redirect_home(path):
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')