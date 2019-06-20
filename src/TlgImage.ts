import { parse } from "path";
import './DataViewEx';

export type TlgVersion = 'TLG5.0' | 'TLG6.0';
export type TlgColorCount = 1 | 3 | 4;

export class TlgImage {
    protected image: ArrayBuffer;
    protected view: DataView;

    public magicByte?: string;
    public tlgVersion?: TlgVersion;
    public colorCount?: TlgColorCount;
    public width?: number;
    public height?: number;

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
            this.parseTlg5();
        } else if (this.magicByte === 'TLG6.0\x00raw\x1a') {
            this.tlgVersion = 'TLG6.0';
            this.parseTlg6();
        } else {
            throw new Error('Unsupported format version.');
        }
    }

    parseTlg5() {
        // 色数を読む
        const colorCount = this.view.seekReadUint8();
        if (!(colorCount === 3 || colorCount === 4)) {
            // ToDo: もっときれいな型のチェックにする
            throw new Error('Unsupported color count.');
        }
        this.colorCount = colorCount;

        // 画像の幅・高さを読む
        this.width = this.view.seekReadInt32();
        this.height = this.view.seekReadInt32();
    }

    parseTlg6() {
        // 色数を読む
        const colorCount = this.view.seekReadUint8();
        if (!(colorCount === 1 || colorCount === 3 || colorCount === 4)) {
            // ToDo: もっときれいな型のチェックにする
            throw new Error('Unsupported color count.');
        }
        this.colorCount = colorCount;

        this.view.skip(1);  // data flag
        this.view.skip(1);  // color type
        this.view.skip(1);  // external golomb table

        // 画像の幅・高さを読む
        this.width = this.view.seekReadInt32();
        this.height = this.view.seekReadInt32();
    }
}
