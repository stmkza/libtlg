import './DataViewEx';
import {TlgImage} from './TlgImage';

export class TlgSds {
    protected file: ArrayBuffer;
    protected view: DataView;

    public magicByte?: string;
    public rawDataSize?: number;
    public rawImage?: TlgImage;
    // ToDo: メタチャンクを実装する

    constructor(file: ArrayBuffer) {
        this.file = file;
        this.view = new DataView(file);

        this.parse();
    }

    parse() {
        // マジックバイトを確認
        this.magicByte = this.view.seekReadString(11);
        if(this.magicByte !== 'TLG0.0\x00sds\x1a') {
            throw new Error('Invalid file format: Magic byte');
        }

        // データサイズを読み込み
        this.rawDataSize = this.view.seekReadUint32();

        // TLG Imageを読み込み
        this.rawImage = new TlgImage(this.view.buffer.slice(11 + 4, 11 + 4 + this.rawDataSize));
    }
}