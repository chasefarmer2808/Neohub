import neopixel
import board
import threading


class NeopixelThread(threading.Thread):
    def __init__(self, pin, num_pixels, brightness, pixels):
        threading.Thread.__init__(self)
        self.pin = pin
        self.num_pixels = num_pixels
        self.brightness = float(brightness)
        self.pixels = pixels
        self.stop_flag = False
        # self.neopixel = neopixel.NeoPixel(self.get_gpio_pin(), self.num_pixels, brightness=self.brightness, auto_write=True)

    def run(self):
        # print(self.stop_flag)
        # while not self.stop_flag:
        #     self.draw()
        
        # self.neopixel = None
        with neopixel.NeoPixel(self.get_gpio_pin(), self.num_pixels, brightness=self.brightness, auto_write=True) as pixels:
            while not self.stop_flag:
                for i in range(0, self.num_pixels):
                    pixels[i] = tuple(self.pixels[i]['color'])
    
    def get_gpio_pin(self):
        if self.pin == '18':
            return board.D18
        else:
            raise ValueError
    
    # def draw(self):
    #     for i in range(0, self.num_pixels):
    #         self.neopixel[i] = tuple(self.pixels[i]['color'])