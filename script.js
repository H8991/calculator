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
    
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
    }
    else {
        console.log("There appears to have been an error.")
    }
}

let a = null;
let b = null;
let currentEntry = "";
let operator = null;

const allButtons = document.querySelectorAll("button");
const clickSound =document.querySelector("#clickSound");

const numButtons = document.querySelectorAll(".num-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const displayText = document.querySelector("#display-text");
const clearBtn = document.querySelector(".clear-btn");
const equalsBtn = document.querySelector(".equals-btn");

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

operatorButtons.forEach(button => {
    button.addEventListener("click", (event) => {

        if (a === null) {
            //Assign a variable
            a = Number(currentEntry);
            console.log(`var a = ${a}`);
            //Add operator symbol to screen
            currentEntry += event.target.value;
            //store operator variable
            operator = event.target.value;
            displayText.textContent = currentEntry;
            //remove operator sign from currentEntry
            currentEntry = "0";
        }
        else {
            //assign b variable
            b = Number(currentEntry);
            a = operate(operator, a, b);
            operator = event.target.value;
            displayText.textContent = a;
            currentEntry = "";
        }
    }
    )
})

equalsBtn.addEventListener("click", (event) => {
    b = Number(currentEntry);
    
    if (a !== null && b!== null) {
        result = operate(operator, a, b);
        displayText.textContent = result;
    }
    else {
        console.log("Something isn't right");
    }
})

clearBtn.addEventListener("click", (event) => {
    a = null;
    b = null;
    operator = null;
    displayText.textContent = "0";
    currentEntry = "0";
} )
//Add sound effect
allButtons.forEach(button => {
    button.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    })
})