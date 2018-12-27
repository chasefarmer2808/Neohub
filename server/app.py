import board
import neopixel
import atexit

from flask import Flask, render_template

app = Flask(__name__)
pixels = neopixel.NeoPixel(board.D18, 3, brightness=0.2, pixel_order=neopixel.GRB)

@atexit.register
def detach_pixels():
    pixels.deinit()

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    pixels[0] = (255, 0, 0)
    pixels.show()
    app.run(debug=True, host='0.0.0.0')