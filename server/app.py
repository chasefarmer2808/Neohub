from flask import Flask, render_template, redirect, url_for
from flask_cors import CORS
from flask_restful import Api
from flask_marshmallow import Marshmallow

from resources.strip import Strip

app = Flask(__name__)
api = Api(app)
ma = Marshmallow(app)

api.add_resource(Strip, '/api/strip')

cors = CORS(app, resources={r'/api/*': {'origins': '*'}})

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def redirect_home(path):
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')