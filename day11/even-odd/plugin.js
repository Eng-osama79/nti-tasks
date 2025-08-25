let num;

do {
  num = Number(prompt("please enter a number"));
} while (!Number.isInteger(num));

if (num % 2 == 0) {
  document.writeln(`<h3>the number ${num} is even number </h3>`);
}
if (num % 2 != 0) {
  document.writeln(`<h3>the number ${num} is odd number </h3>`);
}
