import { Neopixel } from './neopixel';

export const NeopixelsMock: Neopixel[] = [
    {
        type: 'strip',
        numPixels: '3',
        gpioPin: '15',
        pixels: [
            {
                neopixelId: 0,
                index: 0,
                color: [255, 255, 255]
            }
        ]
    }
]