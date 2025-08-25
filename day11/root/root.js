let num = 0,
  root = 0;

do {
  num = Number(
    prompt("Enter a non-negative integer to find its specific root:")
  );
  root = Number(
    prompt(
      "Enter the degree of the root (e.g., 2 for square root, 3 for cube root):"
    )
  );
} while (
  !Number.isInteger(num) ||
  num < 0 ||
  !Number.isInteger(root) ||
  root <= 0
);

let found = false;
for (let i = 1; i <= num; i++) {
  let power = 1;
  for (let j = 1; j <= root; j++) {
    power *= i;
    if (power > num) break;
  }
  if (power === num) {
    document.writeln(`<h3>The ${root} root of ${num} is ${i}.</h3>`);
    found = true;
    break;
  }
}
if (!found) {
  document.writeln(`<h3>${num} does not have an integer ${root} root.</h3>`);
}
