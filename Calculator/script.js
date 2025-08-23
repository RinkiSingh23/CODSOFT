const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');

let currentInput = '';
let resetNext = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value) {
            if (resetNext) {
                currentInput = '';
                resetNext = false;
            }
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

clearBtn.addEventListener('click', () => {
    currentInput = '';
    display.textContent = '0';
});

equalBtn.addEventListener('click', () => {
    try {
        if (currentInput) {
            let result = eval(currentInput);
            display.textContent = result;
            currentInput = result.toString();
            resetNext = true;
        }
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
});
