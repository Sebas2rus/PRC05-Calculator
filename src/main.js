import { addition, division, multiplication, substraction } from './operations.js';

let num1 = 0;
let num2 = 0;
let temp = 0;
let operationName = '';

export function calc() {

    switch (operationName) {
        case 'addition':
            num2 = document.getElementById('value').value.split('+')[1]
            const result = addition(num1, num2)
            document.getElementById('value').value = result;
            break;

        case 'substraction':
            num2 = document.getElementById('value').value.split('-')[1]

            const total = substraction(num1, num2)
            document.getElementById('value').value = total;
            break;

        case 'multiplication':
            num2 = document.getElementById('value').value.split('*')[1]
            const data = multiplication(num1, num2)
            document.getElementById('value').value = data;
            break;

        case 'division':
            num2 = document.getElementById('value').value.split('/')[1]
            const result1 = division(num1, num2)
            document.getElementById('value').value = result1;
            break;

        default:
            num1 = document.getElementById('value').value
            document.getElementById('value').value = num1;
            break;
    }

    document.getElementById('value').focus()
    clearData()
}

// Here comes the operations

document.getElementById('addition').addEventListener('click', () => {
    operationName = 'addition';
    num1 = document.getElementById('value').value

    document.getElementById('value').value += ' + ';
    document.getElementById('value').focus()

})


document.getElementById('substraction').addEventListener('click', () => {
    operationName = 'substraction';
    num1 = document.getElementById('value').value

    document.getElementById('value').value += ' - ';
    document.getElementById('value').focus()
})


document.getElementById('multiplication').addEventListener('click', () => {
    operationName = 'multiplication';
    num1 = document.getElementById('value').value

    document.getElementById('value').value += ' * ';
    document.getElementById('value').focus()

})

document.getElementById('division').addEventListener('click', () => {
    operationName = 'division';
    num1 = document.getElementById('value').value

    document.getElementById('value').value += ' / ';
    document.getElementById('value').focus()

})

const equal = document.getElementById('equal');
equal.addEventListener('click', calc)


// Here we can sum with buttons

export function setNumber(newValue) {
    let oldValue = document.getElementById('value').value
    newValue = String(newValue)
    oldValue += newValue;
    document.getElementById('value').value = oldValue
}

for (let index = 0; index <= 9; index++) {
    document.getElementById(index).addEventListener('click', () => setNumber(index))
}

// Here comes util actions

document.body.onload = () => {
    document.getElementById('value').focus()
}

export function clearData() {
    num1 = 0;
    num2 = 0;
    operationName = '';
    temp = 0;
}

export function clear() {
    num1 = 0;
    num2 = 0;
    operationName = '';
    temp = 0;
    document.getElementById('value').value = '';
    document.getElementById('value').focus();
}

document.getElementById('clear').addEventListener('click', clear)


document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
})

document.getElementById('form').addEventListener('keyup', (e) => {
    var codigo = e.key;

    switch (e.key) {
        case 'Enter':
            calc()
            break;
        case '+':
            operationName = 'addition';
            num1 = document.getElementById('value').value.split('+')[0]
            document.getElementById('value').value = `${num1} + `;
            document.getElementById('value').focus()
            break;
        case '-':
            operationName = 'substraction';
            num1 = document.getElementById('value').value.split('-')[0]
            document.getElementById('value').value = `${num1} - `;
            document.getElementById('value').focus()
            break;
        case '*':
            operationName = 'multiplication';
            num1 = document.getElementById('value').value.split('*')[0]
            document.getElementById('value').value = `${num1} * `;
            document.getElementById('value').focus()
            break;

        case '/':
            operationName = 'division';
            num1 = document.getElementById('value').value.split('/')[0]
            document.getElementById('value').value = `${num1} / `;
            document.getElementById('value').focus()
            break;

        default:
            break;
    }
})
