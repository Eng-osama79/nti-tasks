let operator = "",
  num1 = 0,
  num2 = 0,
  result = 0;

do {
  operator = prompt(
    "Please enter the operator (+, -, *, /, %) you want to use:"
  );
  num1 = Number(prompt("Please enter the first number:"));
  num2 = Number(prompt("Please enter the second number:"));
} while (
  !["+", "-", "*", "/", "%"].includes(operator) ||
  isNaN(num1) ||
  isNaN(num2)
);

switch (operator) {
  case "+":
    result = num1 + num2;
    document.writeln(`<h3>${num1} + ${num2} = ${result}</h3>`);
    break;

  case "-":
    result = num1 - num2;
    document.writeln(`<h3>${num1} - ${num2} = ${result}</h3>`);
    break;

  case "*":
    result = num1 * num2;
    document.writeln(`<h3>${num1} * ${num2} = ${result}</h3>`);
    break;

  case "/":
    if (num2 === 0) {
      document.writeln(`<h3>Division by zero is not allowed.</h3>`);
    } else {
      result = num1 / num2;
      document.writeln(`<h3>${num1} / ${num2} = ${result.toFixed(2)}</h3>`);
    }
    break;

  case "%":
    if (num2 === 0) {
      document.writeln(`<h3>Modulo by zero is not allowed.</h3>`);
    } else {
      result = num1 % num2;
      document.writeln(`<h3>${num1} % ${num2} = ${result}</h3>`);
    }
    break;

  default:
    document.writeln(
      "<h3>Invalid operator. Please use one of +, -, *, /, %.</h3>"
    );
    break;
}
