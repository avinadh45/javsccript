// const prompt = require("prompt-sync")();
// let elm = prompt("Enter size of array");

// let count=0;


// var arr = [];


// for(let i=0;i<elm;i++){
//     arr[i] = prompt("enter the elements");
//     }
    
    
// for(let i=0;i<elm;i++){
//     if(arr[i]%2==0){
//         count++;

//     }

//     }
//     console.log(count)
    


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

// console.log(evenNumbers);
// Output: [2, 4, 6, 8, 10]


// for(i=0;i<numbers.length;i++){
//   if(numbers[i]%2==0){
//     console.log(numbers[i]);
//   }
// }


// const arr=[]
//  for(let i=0;i<numbers.length;i++){
//   if(numbers[i]%2==0){
//     arr.push(numbers[i])
//   }
//  }
//  console.log(arr);



const arr=[]
for(var i=0;i<numbers.length;i++){
  if(numbers[i]%2==0){
    arr.push(numbers[i])
  }
}
console.log(arr);

// for( var i=0;i<numbers.length;i++){
//   if (arr[i]%2==0){
//     arr.push(numbers[i])
//   }
// }
// console.log(arr);