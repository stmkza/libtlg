export { };

declare global {
    interface DataView {
        readString(startPos: number, length: number): string;

        setSeekPointer(pos: number): void;
        skip(length: number): void;

        seekReadString(length: number): string;

        seekReadUint8(): number;
        seekReadUint16(): number;
        seekReadUint32(): number;
        seekReadInt8(): number;
        seekReadInt16(): number;
        seekReadInt32(): number;
    }
}

DataView.prototype.setSeekPointer = function(pos: number) {
    this.seekPointer = pos;
}

DataView.prototype.skip = function(length: number) {
    if (!this.seekPointer) this.seekPointer = 0;
    this.seekPointer += length;
}


DataView.prototype.readString = function (startPos: number, length: number): string {
    return new TextDecoder("utf-8").decode(new Uint8Array(this.buffer, startPos, length));
}


DataView.prototype.seekReadString = function (length: number): string {
    if (!this.seekPointer) this.seekPointer = 0;
    const value = new TextDecoder("utf-8").decode(new Uint8Array(this.buffer, this.seekPointer, length));
    this.seekPointer += length;
    return value;
}


DataView.prototype.seekReadUint8 = function (): number {
    if (!this.seekPointer) this.seekPointer = 0;
    const value = this.getUint8(this.seekPointer);
    this.seekPointer += 1;
    return value;
}

DataView.prototype.seekReadUint16 = function (): number {
    if (!this.seekPointer) this.seekPointer = 0;
    const value = this.getUint16(this.seekPointer, true);
    this.seekPointer += 2;
    return value;
}

DataView.prototype.seekReadUint32 = function (): number {
    if (!this.seekPointer) this.seekPointer = 0;
    const value = this.getUint32(this.seekPointer, true);
    this.seekPointer += 4;
    return value;
}

DataView.prototype.seekReadInt8 = function (): number {
    if (!this.seekPointer) this.seekPointer = 0;
    const value = this.getInt8(this.seekPointer);
    this.seekPointer += 1;
    return value;
}

DataView.prototype.seekReadInt16 = function (): number {
    if (!this.seekPointer) this.seekPointer = 0;
    const value = this.getInt16(this.seekPointer, true);
    this.seekPointer += 2;
    return value;
}

DataView.prototype.seekReadInt32 = function (): number {
    if (!this.seekPointer) this.seekPointer = 0;
    const value = this.getInt32(this.seekPointer, true);
    this.seekPointer += 4;
    return value;
}