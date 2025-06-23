
const display = document.querySelector(".window");

let firstOperand = null;
let operator = null;
let currentEntry = "";

function updateDisplay() {
    if (operator === null) {
        display.textContent = currentEntry || "0";
    }
    else {
        display.textContent = `${firstOperand}${operator}${ccurrentEntry}`;
    }
}

document.querySelectorAll("button.number").forEach(btn => {
    btn.addEventListener("click", () => {
        if (currentEntry === "0") currentEntry = btn.textContent;
        else                      currentEntry += btn.textContent;
        updateDisplay();
    });
});

document.querySelector("button.decimal").addEventListener("click", () => {
    if (!display.textContent.includes(".")) {
        if (currentEntry === "") currentEntry = "0";
            currentEntry += ".";
            updateDisplay();
    }
});

document.querySelectorAll("button.operator").forEach(btn => {
    btn.addEventListener("click", () => {
        if (currentEntry === "") return;
        if (firstOperand !== null && operator !== null) {
            operate();
        } else {
            firstOperand = parseFloat(currentEntry);
        }
        operator = btn.textContent;
        currentEntry = "";
        updateDisplay();
    });
});

document.querySelector("button.clear").addEventListener("click", () => {
   firstOperand = null;
   operator = null;
   currentEntry = "";
   updateDisplay();
});

document.querySelector("button.equal").addEventListener("click", () => {
    if (operator === null || currentEntry === "") return;
    operate();
    operator = null;
    currentEntry = "";
});

function operate() {
    const secondOperand = parseFloat(currentEntry);
    let result;
    switch(operator) {
        case "+":
            result = add(firstOperand, secondOperand);
            break;
        case "-":
            result = subtract(firstOperand, secondOperand);
            break;
        case "*":
            result = multiply(firstOperand, secondOperand);
            break;
        case "÷":
            result = divide(firstOperand, secondOperand);
            break;
        default:
            alert("Wrong value, please use +, -, * or /")
    }
    display.textContent = result;
    firstOperand = result;
}

function add(a, b) {return a + b};

function subtract(a, b) {return a - b};

function multiply(a, b) {return a * b};

function divide(a, b) {return a / b};
