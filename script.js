// console.log("Let's create a sentece");
const q1 = prompt("Please write down a name");
const q2 = prompt("Write down a color");

// const sentence = (name, color) => {
//   console.log(`My name is ${name} and my favorite color is ${color}.`);
// };

// console.log("Let's make an operation");
const q3 = prompt("Please write down a number");
const q4 = prompt("Write down another number");

// const operation = (num1, num2) => {
//   console.log("multiplication of numbers: " + num1 * num2);
//   console.log("division of numbers: " + num1 / num2);
//   console.log("addition of numbers: " + num1 + num2);
//   console.log("subtraction of numbers: " + parseInt(num1 - num2));
// };

// operation(q3, q4);

const both = (name, color, num1, num2) => {
  console.log("The selected name is: " + name);
  console.log("The selected color is: " + color);
  console.log("The selected number 1 is: " + num1);
  console.log("The selected number 2 is: " + num2);
};

both(q1, q2, q3, q4);
