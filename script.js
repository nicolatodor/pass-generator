// // script.js

document.addEventListener('DOMContentLoaded', function () {
    const lengthInput = document.getElementById('volume');
    const passShow = document.querySelector('.pass_show h3');
    const includeUppercase = document.querySelector('.pass_choose input:nth-child(1)');
    const includeLowercase = document.querySelector('.pass_choose input:nth-child(2)');
    const includeNumbers = document.querySelector('.pass_choose input:nth-child(3)');
    const includeSymbol = document.querySelector('.pass_choose input:nth-child(4)');

    lengthInput.addEventListener('input', generatePassword);
    includeUppercase.addEventListener('change', generatePassword);
    includeLowercase.addEventListener('change', generatePassword);
    includeNumbers.addEventListener('change', generatePassword);
    includeSymbol.addEventListener('change', generatePassword);

    function generatePassword() {
        const length = lengthInput.value;
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+{}[]:;<>,.?~\\/-';

        let allChars = '';

        if (includeUppercase.checked) allChars += uppercaseChars;
        if (includeLowercase.checked) allChars += lowercaseChars;
        if (includeNumbers.checked) allChars += numberChars;
        if (includeSymbol.checked) allChars += symbolChars;

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            newPassword += allChars.charAt(randomIndex);
        }

        passShow.textContent = newPassword;
    }
});


copyButton.addEventListener('click', function () {
    copyToClipboard(passShow.textContent);
});

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

