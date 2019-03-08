import pytest
from project.schemas.neopixel import Neopixel

@pytest.fixture(scope='module')
def new_neopixel():
    neopixel = Neopixel('strip', 18, 6, 0.2)
    return neopixel