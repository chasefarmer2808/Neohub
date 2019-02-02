import { Pixel } from './pixel';

export class Neopixel {
    id: number;
    type: string;
    numPixels: string;
    gpioPin: string;
    pixels: Pixel[];
    animating: boolean;
}