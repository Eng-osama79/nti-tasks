let num;

do {
  num = Number(prompt("please enter a number"));
} while (!Number.isInteger(num));

if (num > 0) {
  document.writeln(`<h3>the number ${num} is positive</h3>`);
} else if (num < 0) {
  document.writeln(`<h3>the number ${num} is negative</h3>`);
} else {
  document.writeln(`<h3>the number is zero</h3>`);
}
