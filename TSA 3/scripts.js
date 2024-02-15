let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.textContent = expression;
}

function clearDisplay() {
    expression = '';
    display.textContent = '0';
}

function removeLastCharacter() {
    expression = expression.slice(0, -1);
    display.textContent = expression || '0';
}

function calculate() {
    try {
        expression = eval(expression).toString();
        display.textContent = expression;
    } catch (error) {
        display.textContent = 'Error';
    }
}
