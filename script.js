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

let a = 0;
let b = 0;
let currentEntry = "";
let operator = null;

let firstNumSelected = false;
let secondNumSelected = false;

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

        if (firstNumSelected === false) {
            //Assign a variable
            a = Number(currentEntry);
            console.log(a);
            //FirstNumSelected - yes
            firstNumSelected = true;
            //Add operator symbol to screen
            currentEntry += event.target.value;
            displayText.textContent = currentEntry;
            //store operator variable
            operator = currentEntry[currentEntry.length-1];
            console.log(operator);            
            //remove operator sign from currentEntry
            currentEntry = "0";
        }
        if (firstNumSelected === true) {
            //assign b variable
            b = Number(currentEntry);
            console.log(b);
            secondNumSelected = true;    
            
        }   
    })
})

equalsBtn.addEventListener("click", (event) => {
    b = Number(currentEntry);
    
    if (firstNumSelected ===true && secondNumSelected===true) {
        result = operate(operator, a, b);
        console.log(result);
        displayText.textContent = result;
    }
    else {
        console.log("Something isn't right");
    }
})

clearBtn.addEventListener("click", (event) => {
    a = "0";
    b = "0";
    operator = null;
    firstNumSelected = false;
    secondNumSelected = false;
    displayText.textContent = "0";
    currentEntry = "0";
} )
