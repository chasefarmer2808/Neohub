import { Neopixel } from './neopixel';

export const NeopixelsMock: Neopixel[] = [
    {
        _id: '0',
        type: 'strip',
        numPixels: '3',
        gpioPin: '15',
        brightness: 60,
        pixels: [
            {
                neopixelId: '0',
                index: 0,
                color: [255, 255, 255]
            }
        ],
        animations: [],
        animating: false
    }
]