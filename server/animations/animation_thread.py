import time
import threading


class AnimationThread(threading.Thread):
  def __init__(self, neopixel, animation):
    threading.Thread.__init__(self)
    self.neopixel = neopixel
    self.animation = animation
    self.stop_flag = False

    # TODO: Validate animation.

  def run(self):
    i = 0

    while not self.stop_flag:
      frame = self.animation[i]
      colors = [tuple(c) for c in frame['colors']]

      self.neopixel.neopixel[:] = colors
      time.sleep(frame['duration'])

      i += 1
      i = i % len(self.animation)

  def stop(self):
    self.stop_flag = True
