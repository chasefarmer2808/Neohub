import neopixel
import board
import threading
import time

BLACK = (0, 0, 0)
GREEN = (0, 255, 0)


class NeopixelThread(threading.Thread):
    def __init__(self, pin, num_pixels, brightness, pixels):
        threading.Thread.__init__(self)
        self.id = threading.get_ident()
        self.pin = pin
        self.num_pixels = num_pixels
        self.brightness = float(brightness)
        self.neopixel = neopixel.NeoPixel(self.get_gpio_pin(), self.num_pixels, brightness=self.brightness, auto_write=True)
        self.pixels = pixels
        self.stop_flag = False
        self.update_flag = True

    def run(self):
        # FIXME: Need this.  Cannot store instance in instance variable
        # with neopixel.NeoPixel(self.get_gpio_pin(), self.num_pixels, brightness=self.brightness, auto_write=True) as pixels:
        while not self.stop_flag:
            if self.update_flag:
                self.update()
                # self.draw(tuple(self.pixels[i]['color']))
                self.update_flag = False
    
    def get_gpio_pin(self):
        if self.pin == '18':
            return board.D18
        else:
            raise ValueError

    def update(self):
        for i in range(0, self.num_pixels):
            self.neopixel[i] = tuple(self.pixels[i]['color'])
    
    def set_pixel(self, index, color):
        self.pixels[index] = color
        # for i in range(0, self.num_pixels):
        #         pixels[i] = color
    
    def fill(self, color):
        for i in range(0, self.num_pixels):
            self.neopixel[i] = color
    
    def blink(self, times, delay):
        for i in range(0, times):
            self.fill(GREEN)
            time.sleep(delay)
            self.fill(BLACK)
            time.sleep(delay)