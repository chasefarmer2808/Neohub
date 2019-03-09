export const BLACK: number[] = [0, 0, 0]

export class Pixel {
    neopixelId: string;
    index: number;
    color: number[];
    constructor(color: number[]) {
        this.color = color;
    }
}