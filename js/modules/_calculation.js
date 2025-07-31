export const calculation = function () {
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

  //Button Press
  let typed = [];

  const btnPress = function () {
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function () {
        if (this !== btnClear && this !== btnEqual) {
          typed.push(this.textContent);
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

  const solveMath = function () {
    btnEqual.addEventListener("click", function (e) {
      e.preventDefault();
      display.textContent = "";
      const expression = typed.join("");

      const number1 = expression.split(/[+\-*/]/)[0];

      const number2 = expression.split(/[+\-*/]/)[1];
      const operatorIndex = expression.search(/[+\-*/]/);
      const operator = expression[operatorIndex];
      const firstNumber = parseFloat(number1);
      const secondNumber = parseFloat(number2);

      let result;

      if (operator === "+") {
        result = firstNumber + secondNumber;
      } else if (operator === "-") {
        result = firstNumber - secondNumber;
      } else if (operator === "*") {
        result = firstNumber * secondNumber;
      } else if (operator === "/") {
        result = firstNumber / secondNumber;
      }

      console.log(result);
      display.textContent = result;
    });
  };
  solveMath();
};
