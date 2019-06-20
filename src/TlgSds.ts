export class TlgSds {
    protected file: ArrayBufer;
    protected view: DataView;

    constructor(file: ArrayBufer) {
        this.file = file;
        this.view = new DataView(file);
    }

    function parse() {
        // マジックバイトを確認
        
    }
}