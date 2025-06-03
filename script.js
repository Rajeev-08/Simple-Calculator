document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    let currentInput = '';
    let operatorUsed = false;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.dataset.value;
            if (value === 'C') {
                currentInput = '';
                display.textContent = '';
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                    display.textContent = currentInput;
                } catch (e) {
                    display.textContent = 'Error';
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
