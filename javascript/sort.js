// const prompt = require("prompt-sync")();
// let elm = prompt("Enter numbers of array");

// var arr = [];
//  let temp=0;
// console.log("enter the elements")
// for(let i=0;i<elm;i++){
//     arr[i] = prompt();
//     }

//     for( i=0;i<elm;i++){

//         for(let j=i+1;j<elm;j++){

//         if(arr[i]<arr[j]){

//             temp = arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp 
//         }

//         }
//     }
    

//     console.log(arr)
    





//  const array1 = [21,32,54,56]
//  const array2 = [90,98,87,67]
//   const array3 = [...array1,...array2]
//   const result = array3.sort((a,b)=>{
//     return a-b
//   }
//   )
//   console.log(result);

// const array = [32,65,98,589]
// const array1 = [78,1,56,29,4]
// const array3 = [...array,...array1]
// var result = array3.sort((a,b)=>{
//   return a-b

// })
// console.log(result);
// const array = [32,65,98,589]
// const array1 = [78,1,56,29,4]
// const array2 = [...array,...array1]
// const result = array2.sort((a,s)=>{
//   return a-s
// })
// console.log(result);

// const array3 = [...array,...array1]
// let result = array3.sort((a,b)=>{
//   return a-b
// })
// console.log(result);

// let array3 = [...array,...array1]
// let result = array3.sort((a,s)=>{
//   return a-s
// })
// console.log(result);


// let arr3 = [...array,...array1]
// let result = arr3.sort((a,s)=>{
//   return a-s
// })
// console.log(result);

const array = [32,65,98,589]
const array1 = [78,1,56,29,4]

const arry3 = [...array,...array1]
const res = arry3.sort((a,s)=>{
  return a-s
})
console.log(res);