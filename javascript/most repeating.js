const array1 = [1, 2, 3, 4, 5, 2, 4, 5, 1, 7, 9, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
// var count = 0;
// var max = 0;
// var value = 0;

// for (let i = 0; i < array1.length; i++) {
//   count = 1;
//   for (let j = i + 1; j < array1.length; j++) {  // <-- Corrected array1.length
//     if (array1[i] == array1[j]) {
//       count++;
//     }
//   }
//   if (count > max) {
//     max = count;
//     value = array1[i];
//   }
// }
// console.log(`${value} repeated ${max} times`);

// var count = 0;
// var max = 0;
// var value = 0;
// for (let i = 0 ;i<array1.length;i++){
//   count = 1
//   for(let j= i+1;j<array1.lenth;j++){
//     if(array1[i]==array1[j]){
//       count++
//     }
//   }
//   if(count>max){
//     max = count;
//     value = array1[i];
//   }
// }
// console.log(`${value} repeated ${max} times`);

let str = "killdassss"
let value = ''
let count = 0 
let max =0
for(let i = 0 ;i<str.length;i++){
count = 1
for(let j = i+1;j<str.length;j++){
  if(str[i]===str[j]){
    count++
  }
}
if(count>max){
  max=count
  value = str[i]
}
}
console.log(`${value} repeated ${max} times`);