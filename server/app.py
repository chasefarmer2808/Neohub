import threading
import atexit

from flask import render_template, redirect, url_for

from project import create_app
from project.neopixel_utils.neopixel_thread import NeopixelThread

@atexit.register
def release_neopixels():
    for thread in threading.enumerate():
        if type(thread) is NeopixelThread:
            thread.stop_flag = True
            thread.join(1)

app = create_app('dev.cfg')

app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')