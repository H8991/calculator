function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    
    if (operator === "add") {
        return add(a, b);
    }
    else if (operator === "subtract") {
        return subtract(a, b);
    }
    else if (operator === "multiply") {
        return multiply(a, b);
    }
    else if (operator === "divide") {
        return divide(a, b);
    }
    else {
        console.log("There appears to have been an error.")
    }
}

let a = 0;
let b = 0;
let currentEntry = "";
let operator = null;

let firstNumSelected = false;
let secondNumSelected = false;

const numButtons = document.querySelectorAll(".num-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const displayText = document.querySelector("#display-text");

//Populate display
numButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (currentEntry === "0") {
            currentEntry = event.target.value;
        displayText.textContent = currentEntry;
        }
        else {
            currentEntry += event.target.value;
            displayText.textContent = currentEntry;    
        }
        
    })
})

