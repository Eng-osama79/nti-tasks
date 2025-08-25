let num1, num2, num3;

do {
    num1 = Number(prompt("please enter the first number"));
} while (!Number.isInteger(num1));

do {
    num2 = Number(prompt("please enter the second number"));
} while (!Number.isInteger(num2));

do {
    num3 = Number(prompt("please enter the third number"));
} while (!Number.isInteger(num3));

let max = num1;
let min = num1;


if (num2 > max) {
    max = num2;
}
if (num2 < min) {
    min = num2;
}


if (num3 > max) {
    max = num3;
}
if (num3 < min) {
    min = num3;
}

document.writeln(`The max number is ${max}<br>`);
document.writeln(`The min number is ${min}<br>`);
