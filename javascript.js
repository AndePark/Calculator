
// variable number is an array of all numbered buttons 
// const number = Array.from(document.querySelectorAll('div.numbers > input'));
// // below will display array of button.num but NOT the individual values 
// console.log(number);

let x;
// let y=3;



// nodelist of all numbered buttons 
const buttons = Array.from(document.querySelectorAll('div.numbers > input'));

let b = [];

buttons.forEach((button) => {
  b.push(button.defaultValue);
});

console.log(b);





// console.log(buttons);


// we add an eventlistener for each of the buttons 
// buttons.forEach((button) => {
//   button.addEventListener('click', function(e) {
//     // x = e.target.value;
//   });
// });


// function values(v) {
//   x = buttons[v];
// }


// function values(e) {
//   x = e;
// }

console.log(x);


// buttons.forEach((button) => {
//   button.addEventListener('click', function(e) {
//     y = e.target.value;
//   });
//   });

//   let y;

  // function values(e) {
  //   if (x == null) {
  //     x = 
  //   }
  // }



// console.log(x);
// console.log(y);



// the following prints out the value of the button pressed 
// btn.addEventListener('click', function(e) {
//   console.log(e.target.value);
// });


// const two = document.querySelector('#two');

// console.log(number);

// let x = Number;

// function values() {
//   alert(number);
//   }

// console.log(one);

// const log = document.getElementById('answer');




// const equals = document.querySelector('#equals');
// const addition = document.querySelector('#add');

// const textBox = alert();

// textBox.addEventListener('')

// if i use an array for all operators 
// const ope = document.querySelectorAll('#op');
// console.log(ope);


// convert the nodelist to array 

// let number = {
//   one: 1,
//   two: 2,
// }

let operator = {
  addition: add
}

// equals.onclick = () => alert(operate(operator.addition, number.one, number.two));



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


