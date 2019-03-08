from project.schemas.neopixel import Neopixel

def test_new_neopixel(new_neopixel):
    assert new_neopixel.type == 'strip'
    assert new_neopixel.pin == 18
    assert new_neopixel.num_pixels == 6
    assert new_neopixel.brightness == 60
    assert new_neopixel.animations == []
    assert len(new_neopixel.pixels) == 6