import { parse } from "path";
import './DataViewEx';

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
