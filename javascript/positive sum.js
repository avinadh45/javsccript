const numbers = [1, -2, 3, -4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    sum += numbers[i];
  }
}

console.log("Sum of positive numbers:", sum); // Outputs: 9
