import { TlgSds } from '../index';

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

            const image = new TlgSds(fileReader.result);
            output.textContent = JSON.stringify(image, null, 4);
        });
        fileReader.readAsArrayBuffer(file);
    });
});