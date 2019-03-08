import { Pixel } from './pixel';
import { Animation } from '../animation/animation';

export class Neopixel {
    id: string;
    type: string;
    numPixels: string;
    gpioPin: string;
    brightness: number;
    pixels: Pixel[];
    animations: Animation[];
    animating: boolean;
}