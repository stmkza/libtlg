import { parse } from "path";
import './DataViewEx';

export type TlgVersion = 'TLG5.0' | 'TLG6.0';
export type TlgColorDepth = 1 | 3 | 4;

export class TlgImage {
    protected image: ArrayBuffer;
    protected view: DataView;

    public magicByte?: string;
    public tlgVersion?: TlgVersion;
    public colorDepth?: TlgColorDepth;

    constructor(image: ArrayBuffer) {
        this.image = image;
        this.view = new DataView(image);

        this.parse();
    }

    parse() {
        // マジックバイトを確認
        this.magicByte = this.view.seekReadString(11);
        if (this.magicByte === 'TLG5.0\x00raw\x1a') {
            this.tlgVersion = 'TLG5.0';
        } else if (this.magicByte === 'TLG6.0\x00raw\x1a') {
            this.tlgVersion = 'TLG6.0';
        } else {
            throw new Error('Unsupported format version.');
        }

        // 色深度を読む
        const colorDepth = this.view.seekReadUint8();
        if (!(colorDepth === 1 || colorDepth === 3 || colorDepth === 4)) {
            // ToDo: もっときれいな型のチェックにする
            throw new Error('Unsupported color depth.');
        }
    }
}
