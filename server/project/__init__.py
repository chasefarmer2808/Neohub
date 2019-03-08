import threading
import atexit
import os
from flask import Flask, render_template, redirect, url_for
from flask_cors import CORS
from flask_restful import Api
from flask_marshmallow import Marshmallow
from flask_pymongo import PyMongo

from project.resources.strip import Strip
from project.neopixel_utils.neopixel_thread import NeopixelThread

db_hostname = os.getenv('MONGO_HOST', 'localhost')

mongo = PyMongo()
api = Api()
ma = Marshmallow()

def create_app(config_filename=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_pyfile(config_filename)

    api.add_resource(Strip, '/api/strip', resource_class_args=[mongo])

    @app.route('/')
    def home():
        return render_template('index.html')

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def redirect_home(path):
        return redirect(url_for('home'))

    initialize_extentions(app)
    return app

def initialize_extentions(app):
    mongo = PyMongo(app)
    api = Api(app)
    ma = Marshmallow(app)
    cors = CORS(app, resources={r'/api/*': {'origins': '*'}})

    initialize_neopixel_threads(app, mongo)

def initialize_neopixel_threads(app, db):
    for doc in db.db[app.config['NEOPIXEL_COLLECTION']].find():
        NeopixelThread(
            str(doc['_id']),
            doc['pin'],
            doc['num_pixels'],
            doc['brightness'],
            doc['pixels']
        ).start()
