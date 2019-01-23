export const BLACK: number[] = [0, 0, 0]

export class Pixel {
    neopixelId: number;
    index: number;
    color: number[];
    constructor(id: number, index: number, color: number[]) {
        this.neopixelId = id;
        this.index = index;
        this.color = color;
    }
}