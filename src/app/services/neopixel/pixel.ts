export class Pixel {
    neopixelId: number;
    index: number;
    color: string[];
    constructor(id: number, index: number, color: string[]) {
        this.neopixelId = id;
        this.index = index;
        this.color = color;
    }
}