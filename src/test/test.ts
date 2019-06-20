import { TlgImage } from '../index';

window.addEventListener('load', () => {
    const fileInput = <HTMLInputElement>document.getElementById('tlgFile');
    const output = document.getElementById('output');

    if (!fileInput || !output) {
        return;
    }

    fileInput.addEventListener('change', () => {
        if (!fileInput.value) return;
        if (!fileInput.files) return;

        const file = fileInput.files[0];
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
            if(!(fileReader.result instanceof ArrayBuffer)) return;

            const image = new TlgImage(fileReader.result);
            output.textContent = image.toString();
        });
        fileReader.readAsArrayBuffer(file);
    });
});