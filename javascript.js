let firstNumber = null;
let currentEntry = "";
let operator = null;

const display = document.querySelector(".window");

function updateDisplay() {
    if (operator === null) {
        display.textContent = currentEntry || "0";
    }
    else {
        display.textContent = `${firstNumber}${operator}${currentEntry}`;
    }
}

document.querySelectorAll("button.number").forEach(btn => {
    btn.addEventListener("click", () => {
        if (currentEntry === "0") {
            currentEntry = btn.textContent;
        }
        else {
            currentEntry += btn.textContent;
        }
        updateDisplay();
    })
})

document.querySelectorAll("button.operator").forEach(btn => {
    btn.addEventListener("click", () => {
        if (currentEntry === "") return;
        else {
            firstNumber = Number(currentEntry);
        }
        
        operator = btn.textContent;
        currentEntry = "";
        updateDisplay();
    })
})

document.querySelector("button.equal").addEventListener("click", () => {
   if (firstNumber !== null 
    && operator !== null 
    && currentEntry !== "") {
        const result = operate(firstNumber, operator, Number(currentEntry));
        display.textContent = result;
        firstNumber = result;
        operator = null;
        currentEntry = "";
    }
   })

document.querySelector("button.clear").addEventListener("click", () => {
    firstNumber = null;
    operator = null;
    currentEntry = "";
    updateDisplay();
})

function operate(firstNumber, operator, currentEntry) {
    const secondNumber = Number(currentEntry);
    let result;
    switch(operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result =  divide(firstNumber, secondNumber);
            break;
        default:
            alert("Wrong value, please use +, -, * or /")
    }
    return result;

}

function add(a, b) {return Number(a) + Number(b)};

function subtract(a, b) {return Number(a) - Number(b)};

function multiply(a, b) {return Number(a) * Number(b)};

function divide(a, b) {return Number(a) / Number(b)};
