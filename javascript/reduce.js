

// const arr=[1,1,1,1,1]
// // //sum
// let output=arr.reduce(function(arr,curr){
//     arr=arr+curr
//     return arr;
// },0);

// console.log(output)

//max

// let output = arr.reduce(function(max,curr){
//     if(curr>max){

//     max=curr
//         return max
//     }
// },0);
// console.log(output)


// let output = arr.reduce( (max,cur) => { 

//  if(max<cur)
//  max=cur
// return max
// })
// console.log(output)


// let ser = arr.reduce(function (ar,cur){
     
// ar= ar+cur;
// return ar;
// },0);

// console.log(ser)

// let dx = arr.reduce( (max,cur) =>{
// if (max<cur)
//   max=cur
// return max

// })
// console.log(dx)

// let ar=[10,20,56,7,88]
//     let re=ar.reduce((a) =>{
//         return a+a+a
//     })
//     console.log(re)


// let res=arr.reduce( (curr,arr)=>{
//   arr=arr+curr
// return arr
// })
// console.log(res);


// let res=arr.filter( (acc,cur)=>{
//   acc=acc+cur
//   return acc
// })
// console.log(res);

// const ar=[4,3,6,8,6,]

// let result=ar.reduce( (max,curr)=>{
//   if(curr>max)
//   max=curr
// return max

// })
// console.log(result);

// var res=ar.reduce( (acc,cur)=>{
//   if(cur>acc){
//     acc=cur
//     return acc
//   }
// })
// console.log(res);

// const a=[2,3,6,9,1,9,1]
// let result=a.reduce( (max,cur)=>{
//   if(max<cur)
//     max=cur
//    return max
// })

// console.log(result);

// let re=a.reduce( (acc,cur) =>{
//    acc=acc+cur
//    return acc
// })
//  console.log(re);


// let res=a.reduce( (arc,cur)=>{
//    if(arc<cur)
//    arc=cur
//    return arc
// })

// console.log(res);


// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // Output: 15
// console.log(sum);

// const numbers = [2, 3, 4, 5];
// const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// // Output: 120
// console.log(product);


// const array =[12,34,56,77,100]
// // const result = array.reduce( (acc,curr)=>{
// //    if(acc<curr){
// //       acc=curr
// //       return acc
// //    }
// // })
// // console.log(result);


// const result = array.reduce( (acc,curr)=>{
//    if(curr%2==0){
//       acc.push(curr) 
//    }
//    return acc
// },[])
// console.log(result);
// const array = [1,2,3,4,5,6,7,8,9,0]

// const result = array.reduce((acc,curr)=>{
//     return acc>curr?curr:acc
// })
// console.log(result);


// const a = [12,3,45,78,12,3,5,5,]

// let res = a.reduce((acc,cur)=>{
//     if(acc<cur){
//       acc=cur
//     }
// return acc
   
// })

//  console.log(res);

// var arrays = [
//   ["1", "2", "3"],
//   [true],
//   [4, 5, 6]
// ];

// let res = arrays.flat(Infinity)
// let sum = 0 
// for(let i of res){
//    if(typeof res[i]==='number'){
//     sum+=res[i]
//    }
// }
// console.log(sum);
// console.log(res);

// let res = arrays.reduce((acc,cur)=>{
//   return acc.concat(cur)
// })
// console.log(res);

// let res = arrays.reduce((acc,cur)=>{
//   return acc.concat(cur)
// })
// console.log(res);

var arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

// Flatten the array to a single level
let res = arrays.flat(Infinity);

// Initialize sum variable
let sum = 0;

// Loop through the flattened array
for (let i of res) {
  if (typeof i === 'number') {
    sum += i;  // Add numeric values to the sum
  } else if (typeof i === 'string') {
    let num = Number(i);  // Convert strings to numbers
    if (!isNaN(num)) {
      sum += num;  // Add converted numeric values to the sum
    }
  } else if (typeof i === 'boolean') {
    sum += Number(i);  // Convert boolean values to 1 or 0
  }
}

console.log(sum);  // Output: 22
