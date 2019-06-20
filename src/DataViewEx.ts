export {};

declare global {
    interface DataView {
        readString(startPos: number, length: number): string;
    }
}

DataView.prototype.readString = function(startPos: number, length: number): string {
    return new TextDecoder("utf-8").decode(new Uint8Array(this.buffer, startPos, length));
}