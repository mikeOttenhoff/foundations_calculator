//variables
const display = document.querySelector(".calculator_display");
const btn = document.querySelectorAll(".button");
const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const btn3 = document.querySelector(".button3");
const btn4 = document.querySelector(".button4");
const btn5 = document.querySelector(".button5");
const btn6 = document.querySelector(".button6");
const btn7 = document.querySelector(".button7");
const btn8 = document.querySelector(".button8");
const btn9 = document.querySelector(".button9");
const btn0 = document.querySelector(".button0");
const btnDot = document.querySelector(".buttonDot");
const btnEqual = document.querySelector(".buttonEqual");
const btnAdd = document.querySelector(".add");
const btnSubtract = document.querySelector(".subtract");
const btnMultiply = document.querySelector(".multiply");
const btnDivide = document.querySelector(".divide");
const btnClear = document.querySelector(".clear");
const operatorRegex = /[+\-*/]/;

// context
btn1.textContent = 1;
btn2.textContent = 2;
btn3.textContent = 3;
btn4.textContent = 4;
btn5.textContent = 5;
btn6.textContent = 6;
btn7.textContent = 7;
btn8.textContent = 8;
btn9.textContent = 9;
btn0.textContent = 0;
btnDot.textContent = ".";
btnEqual.textContent = "=";
btnAdd.textContent = "+";
btnSubtract.textContent = "-";
btnMultiply.textContent = "*";
btnDivide.textContent = "/";

//calculations
const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const times = function (num1, num2) {
  return num1 * num2;
};

const divided = function (num1, num2) {
  return num1 / num2;
};

//Button Press
let typed = [];
let operatorArr = [];

const btnPress = function () {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      const value = this.textContent;

      if (this !== btnClear && this !== btnEqual) {
        if (value.match(operatorRegex)) {
          operatorArr.push(value);

          const expression = typed.join("");
          const tokens = expression.match(/(\d+\.?\d*|\.\d+|[+\-*/])/g);

          if (tokens && tokens.length >= 3) {
            const result = solveMath();

            if (result !== null) {
              typed = [result.toString(), value];
              display.textContent = typed.join("");
              operatorArr = [value];
              return;
            } else {
              return;
            }
          }
        } else {
          operatorArr = [];
        }

        typed.push(value);
        display.textContent = typed.join("");
      }
    });
  }
};

btnPress();

// The clear button clears out the typed array
const clearScreen = function () {
  btnClear.addEventListener("click", function (e) {
    e.preventDefault();
    typed.length = 0;
    display.textContent = "";
  });
};
clearScreen();

function solveMath() {
  const expression = typed.join("");
  const tokens = expression.match(/(\d+\.?\d*|\.\d+|[+\-*/])/g);

  if (!tokens || tokens.length < 3) return null;

  const number1 = tokens[0];
  const operator = tokens[1];
  const number2 = tokens[2];
  const firstNumber = parseFloat(number1);
  const secondNumber = parseFloat(number2);
  let result;

  if (operator === "+") {
    result = add(firstNumber, secondNumber);
  } else if (operator === "-") {
    result = subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    result = times(firstNumber, secondNumber);
  } else if (operator === "/") {
    result = divided(firstNumber, secondNumber);
  }

  if (isNaN(result)) {
    alert(
      "Use a number, an operator and a number and keep your numbers positive"
    );
    return null;
  }

  return parseFloat(result.toFixed(3));
}

//Button to operate the equal to button
btnEqual.addEventListener("click", function (e) {
  e.preventDefault();
  const result = solveMath();

  if (result !== null) {
    display.textContent = result;
    typed = [result.toString()];
  }
});
