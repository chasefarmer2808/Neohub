import pytest
from flask_pymongo import PyMongo

from project.schemas.neopixel import Neopixel
from project import create_app

app = None

@pytest.fixture(scope='module')
def new_neopixel():
    neopixel = Neopixel('strip', 18, 6, 60)
    return neopixel

@pytest.fixture(scope='module')
def test_client():
    global app
    app = create_app('test.cfg')

    testing_client = app.test_client()
    ctx = app.app_context()
    ctx.push()

    yield testing_client

    ctx.pop()

@pytest.fixture(scope='module')
def init_database():
    global app

    mongo = PyMongo(app)

    yield mongo

    mongo.db[app.config['NEOPIXEL_COLLECTION']].delete_many({})