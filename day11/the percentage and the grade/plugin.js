let totalMarks = 0;
let percentage = 0;
let maxMarks = 100;
let physics;

//physicsz
do {
  physics = Number(prompt("Please enter your Physics grade between 0 and 20"));
} while (!Number.isInteger(physics) || physics < 0 || physics > 20);
totalMarks += physics;

// Chemistry
let chemistry;
do {
  chemistry = Number(prompt("Please enter your Chemistry grade between 0 and 20"));
} while (!Number.isInteger(chemistry) || chemistry < 0 || chemistry > 20);
totalMarks += chemistry;

// Biology
let biology;
do {
  biology = Number(prompt("Please enter your Biology grade between 0 and 20"));
} while (!Number.isInteger(biology) || biology < 0 || biology > 20);
totalMarks += biology;

// Mathematics
let mathematics;
do {
  mathematics = Number(prompt("Please enter your Mathematics grade between 0 and 20"));
} while (!Number.isInteger(mathematics) || mathematics < 0 || mathematics > 20);
totalMarks += mathematics;

// Computer
let computer;
do {
  computer = Number(prompt("Please enter your Computer grade between 0 and 20"));
} while (!Number.isInteger(computer) || computer < 0 || computer > 20);
totalMarks += computer;

percentage = (totalMarks / maxMarks) * 100;

if (percentage >= 90) {
  document.writeln(`<h1>your percentage is ${percentage}, and your Grade is A</h1>`);
} else if (percentage >= 80) {
  document.writeln(`<h1>your percentage is ${percentage}, and your Grade is B</h1>`);
} else if (percentage >= 70) {
  document.writeln(`<h1>your percentage is ${percentage}, and your Grade is C</h1>`);
} else if (percentage >= 60) {
  document.writeln(`<h1>your percentage is ${percentage}, and your Grade is D</h1>`);
} else if (percentage >= 40) {
  document.writeln(`<h1>your percentage is ${percentage}, and your Grade is E</h1>`);
} else {
  document.writeln(`<h1>your percentage is ${percentage}, and your Grade is F</h1>`);
}
