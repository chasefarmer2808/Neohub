from project.schemas.neopixel import Neopixel

def test_new_neopixel():
    neopixel = Neopixel('strip', 18, 6, 0.2)

    assert neopixel.type == 'strip'
    assert neopixel.pin == 18
    assert neopixel.num_pixels == 6
    assert neopixel.brightness == 0.2
    assert neopixel.animations == []
    assert len(neopixel.pixels) == 6