//numButtons also includes . 
const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operation]');
const clearButton = document.querySelector('[data-clear]');
const equalButton = document.querySelector('[data-equal]');
const delButton = document.querySelector('[data-delete]');
const prevOperandTextElement = document.querySelector('[data-previous-operand]');
const currOperandTextElement = document.querySelector('[data-current-operand]');


class Calculator {
    constructor(prevOperandTextElement, currOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.currOperandTextElement = currOperandTextElement
        this.clear()
        // this.clear() will reset all inputs 
    }


    clear() {
        this.currOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    // EFFECT: we convert toString() as a safety measure so that both currOperand and number are NOT actually numbers 
    //         since we want to append numbers NOT add them together (prevents the compiler from performing the actual + operation)
    //         ... safety measure since both currOperand and number(parameter)are technically already strings  
    //         ex. 3 + 4 = 7 
    //         ex. '3' + '4' = '34' --> WE WANT THIS 
    //NOTE: we want to also incorporate situation where user inputs decimal which can only occur once... so if number === '.' but 
    //      currOperand already includes '.' then just return(means don't do anything in the function) 
    appendNumber(number) {
        if (number === '.' && this.currOperand.includes('.')) {
            return;
        }
        this.currOperand = this.currOperand.toString() + number.toString()
    }


    // updates the value inside output 
    updateDisplay() {
        this.currOperandTextElement.innerText = this.currOperand
        if (this.operation != null) {
            this.prevOperandTextElement.innerText =  this.prevOperand + `${this.operation}`
        } else {
            this.prevOperandTextElement.innerText = ''
        }
    }


    //EFFECTS: if user clicks an operation button, prevOperand becomes currOperand and currOperand is now empty 
    //         so that is can accept a new number... we can also add ability to compute an operation automatically 
    //         while simultaneously completing another one 
    //         ex. if you type in 54 + 50 and then click on the ÷ button, 
    //         the calculator should be able to compute 54 + 50, making it 104 before dividing it automatically

    //NOTE: we need a check so that if currOperand is empty and we press an operation button, nothing happens         
    chooseOperation(operation) {
        if (this.currOperand === '') {
            return;
        }
        if (this.prevOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.currOperand
        this.currOperand = ''
    }


    //EFFECTS: there are 2 situations where compute is called... one is the normal operation (ie. 3 + 4) and the other is the 
    //         automatic operation that occurs when prevOperand !==''... this automatic situation will mean we return back to 
    //         the chooseOperation function where variables are updated 
    compute() {
        let result
        const prev = parseFloat(this.prevOperand)
        const curr = parseFloat(this.currOperand)
        if (isNaN(prev) || isNaN(curr)) {
            return;
        }
        switch(this.operation) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '÷':
                result = prev / curr;
                break;
            default:
                return;
        }
        this.currOperand = result;
        this.operation = undefined;
        this.prevOperand = '';
    }


    delete() {
        this.currOperand = this.currOperand.toString().slice(0, -1);
    }
}



// NOTE: we cannot access calculator class before initialization... meaning calculator must come AFTER class Calculator 
// below is a calculator object that we construct... we can now use this object 
const calculator = new Calculator(prevOperandTextElement, currOperandTextElement) 


//NOTE: the snippet of code below must occur OUTSIDE the class Calculator 
// for each numbered button, we add an eventListener that adds a number to the calculator
// which is done by calling appendNumber with the innerText of the button 
// we also call the updateDisplay() so that the displayed values are constantly being 
// updated every time a button is clicked 
// EFFECTS: every time we click a number button, we call the calculator's appendNumber function with the button.innerText 
//          which changes currOperand string to the number and then updateDisplay is called which converted currOperandTextElement.innerText 
//          to be the same string as currOperand 
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        // button.innerText is the the string that is written in html... ie. 1 or 2 
        // you can see that innerText is this value by inspecting on browswer 
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


opButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

delButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})



