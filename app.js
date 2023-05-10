const result = document.getElementById('result');
const numberOne = document.getElementById('num1');
const numberTwo = document.getElementById('num2');
let operation;

const btnAddition = document.getElementById('btnAddition');
btnAddition.addEventListener("click", Addition);

function Addition() {
  const num1 = parseFloat(numberOne.value);
  const num2 = parseFloat(numberTwo.value);
  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Error";
  } else {
    operation = num1 + num2;
    result.textContent = operation;
  }
}

const btnSubstract = document.getElementById('btnSubstract');
btnSubstract.addEventListener("click", Subtraction);

function Subtraction() {
  const num1 = parseFloat(numberOne.value);
  const num2 = parseFloat(numberTwo.value);
  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Error";
  } else {
    operation = num1 - num2;
    result.textContent = operation;
  }
}

const btnMultiply = document.getElementById('btnMultiply');
btnMultiply.addEventListener("click", Multiplication);

function Multiplication() {
  const num1 = parseFloat(numberOne.value);
  const num2 = parseFloat(numberTwo.value);
  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Error";
  } else {
    operation = num1 * num2;
    result.textContent = operation;
  }
}

const btnDivision = document.getElementById('btnDivision');
btnDivision.addEventListener("click", Division);

function Division() {
  const num1 = parseFloat(numberOne.value);
  const num2 = parseFloat(numberTwo.value);
  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Error";
  } else {
    operation = num1 / num2;
    result.textContent = operation;
  }
}

const btnReset = document.getElementById('btnReset');
btnReset.addEventListener("click", () => {
  if (result && numberOne && numberTwo) {
    result.innerText = 0;
    numberOne.value = '';
    numberTwo.value = '';
  }
});





