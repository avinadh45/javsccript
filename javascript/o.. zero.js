const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     // If the number is odd, replace it with zero
//     numbers[i] = 0;
//   }
// }

// console.log(numbers);
// Outputs: [0, 2, 0, 4, 0, 6, 0, 8, 0]


// for (let i=0;i<numbers.length;i++){
//   if(numbers[i]%2==0){
//     numbers[i]=0
//   }
// }
// console.log(numbers);

for(let i = 0 ;i<numbers.length;i++){
  if(numbers[i]%2===0){
    numbers[i]=0
  }
}
console.log(numbers);