const one = document.querySelector('#one'); 
const two = document.querySelector('#two');

const equals = document.querySelector('#equals');
const addition = document.querySelector('#add');

let number = {
  one: 1,
  two: 2,
}

let operator = {
  addition: add
}

equals.onclick = () => alert(operate(operator.addition, number.one, number.two));



function operate(op, x, y) {
    value = op(x, y);
    return value;
}

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x*y; 
}

function divide(x, y) {
  return x/y; 
}
