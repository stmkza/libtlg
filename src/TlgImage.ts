import { parse } from "path";
import './DataViewEx';

export type TlgVersion = 'TLG5.0' | 'TLG6.0';

export class TlgImage {
    protected image: ArrayBuffer;
    protected view: DataView;

    constructor(image: ArrayBuffer) {
        this.image = image;
        this.view = new DataView(image);

        this.parse();
    }

    parse() {

    }
}
