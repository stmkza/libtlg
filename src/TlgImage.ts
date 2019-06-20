export class TlgImage {
    protected image: ArrayBuffer;
    protected view: DataView;

    constructor(image: ArrayBuffer) {
        this.image = image;
        this.view = new DataView(image);
    }

    toString(): string {
        return `Hello`;
    }
}
