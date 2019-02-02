import { Neopixel } from './neopixel';

export const NeopixelsMock: Neopixel[] = [
    {
        id: 0,
        type: 'strip',
        numPixels: '3',
        gpioPin: '15',
        pixels: [
            {
                neopixelId: 0,
                index: 0,
                color: [255, 255, 255]
            }
        ],
        animating: false
    }
]