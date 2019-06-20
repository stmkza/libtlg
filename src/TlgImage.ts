export class TlgImage {
    protected image: ArrayBuffer;

    constructor(image: ArrayBuffer) {
        this.image = image;
    }

    toString(): string {
        return `Hello`;
    }
}