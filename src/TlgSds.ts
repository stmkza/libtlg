import './DataViewEx';

export class TlgSds {
    protected file: ArrayBuffer;
    protected view: DataView;

    constructor(file: ArrayBuffer) {
        this.file = file;
        this.view = new DataView(file);

        this.parse();
    }

    parse() {
        // マジックバイトを確認
        const magicByte = this.view.readString(0, 11);
        if(magicByte !== 'TLG0.0\x00sds\x1a') {
            throw new Error('Invalid file format: Magic byte');
        }
    }
}