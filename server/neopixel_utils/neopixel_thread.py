from rpi_ws281x import *
import threading
import time

BLACK = (0, 0, 0)
GREEN = (0, 255, 0)
LED_FREQ_HZ    = 800000  # LED signal frequency in hertz (usually 800khz)
LED_DMA        = 10      # DMA channel to use for generating signal (try 10)
LED_BRIGHTNESS = 255     # Set to 0 for darkest and 255 for brightest
LED_INVERT     = False   # True to invert the signal (when using NPN transistor level shift)
LED_CHANNEL    = 0       # set to '1' for GPIOs 13, 19, 41, 45 or 53

class NeopixelThread(threading.Thread):
    def __init__(self, _id, pin, num_pixels, brightness, pixels):
        threading.Thread.__init__(self)
        self.id = _id
        self.pin = pin
        self.num_pixels = num_pixels
        self.brightness = brightness
        self.neopixel = Adafruit_NeoPixel(self.num_pixels, self.pin, LED_FREQ_HZ, LED_DMA, LED_INVERT, self.brightness, LED_CHANNEL)
        self.pixels = pixels
        self.stop_flag = False
        self.update_flag = True

        self.neopixel.begin()
        self.blink(3, 0.15)


    def run(self):
        while not self.stop_flag:
            if self.update_flag:
                self.update()
                self.update_flag = False
        self.fill(BLACK)
    
    def update(self):
        for i in range(0, self.num_pixels):
            r, g, b = self.getRGB(i)
            self.neopixel.setPixelColor(i, Color(r, g, b))
        self.neopixel.show()

    def getRGB(self, index):
        r = self.pixels[index]['color'][0]
        g = self.pixels[index]['color'][1]
        b = self.pixels[index]['color'][2]

        return (r, g, b)
    
    def set_pixel(self, index, color):
        self.pixels[index] = color
    
    def fill(self, color):
        for i in range(0, self.num_pixels):
            r, g, b = color
            self.neopixel.setPixelColor(i, Color(r, g, b))
        self.neopixel.show()
    
    def blink(self, times, delay):
        for i in range(0, times):
            self.fill(GREEN)
            time.sleep(delay)
            self.fill(BLACK)
            time.sleep(delay)