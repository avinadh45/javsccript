// const arr=[2,6,4,8,4]

// function isiteven(y){
//     return Y%2==0
// }
// const out=arr.filter(isiteven).reduce(function(acc,curr){
//     acc=acc+curr
//     return acc;
// })
// console.log(out);

// let output=arr.filter( (each,index)=>{
//     return arr.indexOf(each)!=index
// })
// console.log(output);


// let out=arr.filter( (each,index)=>{
//     return arr.indexOf(each)!=index
// })
// console.log(out);

// const result = arr.filter( (value,index)=>{
//     return arr.indexOf(value)!=index
// })
// console.log(arr);

// const arr = [1,1,2,2,3,3,4,4,5,5]

// const result = arr.filter((value,index)=>{
//     return arr.indexOf(value)!=index
// })
// console.log(result);


// const array = [1, 2, 3, 4, 2, 5, 1, 6, 7];

// // Create a Set to store unique elements
// const uniqueSet = new Set(array);

// // Use reduce to calculate the sum of unique elements
// const sumOfUnique = [...uniqueSet].reduce((sum, element) => sum + element, 0);

// console.log(sumOfUnique); // Output: 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)



// const result = new Set(array)
// const sum = [...result].reduce((sum,element)=>{
//    return sum + element
// })
// console.log(sum);


// const a = [...new Set(array)]
// const b=[...a].reduce((sum,element)=>{
//   return sum+element
// })
// console.log(b);

// const a = [...new Set(array)]
// const b = [...a].reduce((sum,element)=>{
//    return sum+element
// })
// console.log(b);

// const array = [1, 2, 3, 4, 2, 5, 1, 6, 7];

// let a = [...new Set(array)]
// let b = [...a].reduce((sum,cur)=>{
//    return sum+cur
// })
// console.log(b);

// const arr = [1,2,1,2,4,3,5,8,9,10]

// let a = [...new Set(arr)]
// let b = [...a].reduce((acc,cur)=>{
//     return acc+cur
// })
// // console.log(a);
// console.log(b);
const array = [-1, -2, -3, 4, 5, 6, 7, null, 10, 67, undefined, -56, 0, 7, 89, 0, "king avinadh", () => {}];
let ans = array.filter((x)=> typeof x ==="number").reduce((acc,cur)=>acc+cur,0)
console.log(ans);