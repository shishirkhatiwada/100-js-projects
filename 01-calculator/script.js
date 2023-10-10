const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const additionBtn = document.getElementById('addition');
const equalBtn = document.getElementById('equal');
const decimalBtn = document.getElementById('decimal');
const numberBtns = document.querySelectorAll('.number');
const result = document.getElementById('result');

// Initialize the numbers

let resultEle = '';
let operation = '';
let previousOne = 0;

const appendNumber = (number) => {
    if (number === '.' && resultEle.includes('.')) {
        return;
    }
    resultEle += number;
    updateDisplay();
}

const updateDisplay = () => {
    if (operation) {
        result.innerText = `${previousOne} ${operation} ${resultEle}`;
    } else {
        result.innerText = resultEle;
    }
}

// Function to select operations

const selectOperator = (operationValue) => {
    if (resultEle === '') return;

    if (operation !== '' && previousOne !== '') {
        calculateResult();
    }

    operation = operationValue;
    previousOne = resultEle;
    resultEle = '';
    updateDisplay();
}

// Function to calculate and display the result

const calculateResult = () => {
    if (operation && previousOne && resultEle) {
        let resultValue;
        switch (operation) {
            case '+':
                resultValue = parseFloat(previousOne) + parseFloat(resultEle);
                break;
            case '-':
                resultValue = parseFloat(previousOne) - parseFloat(resultEle);
                break;
            case '*':
                resultValue = parseFloat(previousOne) * parseFloat(resultEle);
                break;
            case '/':
                if (parseFloat(resultEle) === 0) {
                    alert("Cannot divide by zero.");
                    clearAll();
                    return;
                }
                resultValue = parseFloat(previousOne) / parseFloat(resultEle);
                break;
        }
        resultEle = resultValue.toString();
        operation = '';
        previousOne = '';
        updateDisplay();
    }
}

// Event listeners for number buttons

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    });
});

// Event listeners for operation buttons

decimalBtn.addEventListener('click', () => appendNumber('.'));
additionBtn.addEventListener('click', () => selectOperator('+'));
subtractBtn.addEventListener('click', () => selectOperator('-'));
multiplyBtn.addEventListener('click', () => selectOperator('*'));
divideBtn.addEventListener('click', () => selectOperator('/'));

// Event listener for the equal button

equalBtn.addEventListener('click', () => {
    calculateResult();
});

// Function to clear all

const clearAll = () => {
    resultEle = '';
    operation = '';
    previousOne = 0;
    result.innerText = '0';
}

// Event listener for the clear button

clearBtn.addEventListener('click', clearAll);
