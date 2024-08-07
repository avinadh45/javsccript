// const arr=[12,5,4,7,]


//    const output=arr.map( (x) => {
//      return x*2
//     } )
// console.log(output)

// function add(x){
//     return x*3
// }


// const output = arr.map(add)
// console.log(output)

// const double = arr.map( (i) =>{
// return i*2

// })
// console.log(double)

//  const sum = arr.map ( (w)=>{
//     return w*1
//  })
//  console.log(sum)

// const hi = arr.map( (k) =>{

//     return k*2
// })
// console.log(hi)


// function square(x){
//     return  x*x;
// }
// const out=arr.map(square)
// console.log(out);


// const aw = arr.map( (i) =>{
//     return i*i
// })

// console.log(aw)

// let ser = arr.map( (e) =>{

//     return e*e;
// })
// console.log(ser)



// var res=arr.map( (x) =>{

//     return x*x
// })

// console.log(res)


// let res=arr.map( (e)=>{

// return e*e

// })
// console.log(res);


// let res=arr.map( (e)=>{
//     return e*e
// })
// console.log(res);
// let res=arr.map( (x)=>{
//     return x*x
// })
// console.log(res);

// let res=arr.map( (w)=>{
//     return w*w
// })
// console.log(res);

// let res =arr.map( (e)=>{
//     return e*e
// })
// console.log(res);

// const arr = [2,3,5,1,2,]

// const result = arr.map( (a)=>{
//     return a*a
// })
// console.log(result);



// const users = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 }
//   ];
  
//   const names = users.map(user => user.name);
//   // Output: ['John', 'Alice', 'Bob']
//   console.log(names);

// const names = users.map((a)=>{
//     return a.name
// })
// console.log(names);



  


// const nestedArrays = [[1, 2], [3, 4], [5, 6]];
// const flatArray = nestedArrays.flatMap(array => array);
// // Output: [1, 2, 3, 4, 5, 6]
// console.log(flatArray);

// const flatArray = nestedArrays.flatMap(arr=>arr);
// console.log(flatArray);


// const array1 = [21,32,54,56]
// const array2 = [90,98,87,67]
//  const array3 = [...array1,...array2]
  
//  const result = array3.map((a,b)=>{
//    return s=a>b;
//  })
//  console.log(result);

// const users = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 }
// ];


// let res = users.map((a)=>{
//   return a.name
// })
// console.log(res);

// const numbers = [['1', '2'], ['3', '4',['5',['6'], '7']]];

// let a = numbers.flat(Infinity)

// let result = a.reduce((sum,cur)=>{
//   return  sum+parseInt(cur)
// },0)
// console.log(result);

// const numbers = [[1, 2], [3, 4,[5,[6], 7]]];

// let result = numbers.flatMap((x)=>{
//   return x.map((y)=>y*y)
// })
// console.log(result);


// const numbers = [[1, 2], [3, 4, [5, [6], 7]]];

// let result = numbers.flatMap((x) => {
//   return x.map((y) => y * y); // Square each number in the nested arrays
// });

// console.log(result);



// const users = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 }
// ];


// let res = users.map((c)=>{
//   return c.name
// }
// )
// console.log(res);

// const array1 = [21,32,54,56]
// const array2 = [90,98,87,67]
// let res = array1.concat(array2)
// let ans = res.map((x)=>{
//   return x*x
// })
// console.log(ans);


// const nestedArrays = [[1, 2], [3, 4], [5, 6]];
// let res = nestedArrays.flatMap((x)=>)
// console.log(res);

//  const ar = ["apple","orange","banana","grapes"]
// let ans = ar.map((x)=>{
//      return x.toUpperCase().charAt()+x.slice(1)
// })
// console.log(ans);



// let array = [2,3,4,7,9]
// let res = []
// let ans = array.map((x)=>{
//   if(x%2===0){
//     res.push("even")
//   }else{
//    res.push("odd")
//   }
// })
// console.log(res);

// let array = [3,5,9,16,15,10,9,13]
// let sum = 0 
// for(let i = 0 ;i<array.length;i++){
//      if(i%3===0 ){
//       sum = sum+array[i]
// }
// }
// console.log(sum);
// console.log(ans);

// let array = [13,12,8,6,7,9,5,10,15]

// for(let i = 0 ;i<array.length-1;){

// if(array[i] % 2 !== 0&&array[i+1]%2!==0){
//      array.splice(i,2)
// }else{
//      i++
// }

// }
// console.log(array);


//  let str = "amavan eppol indian upamandhrii"

//  let count = 0 
//  let vou = "aeiou"
//  for(let i = 0 ;i<str.length;i++){
//      if(vou.includes(str[i])){
//           count++
//      }
//  }
//  console.log(count);


// let array =  [13,12,8,6,7,9,5,10,15]
// let arr =[]
// let i=0
// while(i<array.length){
//     if((array[i]%2==0) && (array[i+1]%2==0)){
//      i++
// }else{
//      arr.push(array[i])
//      i++
// }
// }
// console.log(arr);

// let array = [2,5,6,9]
// let arr = []
// let res = array.map((x)=>{
//     if(x%2===0){
// arr.push("odd")
//     }else{
//         arr.push("even")
//     }
// })
// console.log(arr);

let array = [2,5,6,9]
let res = array.map((x)=>{
    if(x%2===0){
       return "odd"
    }else{
    return "even"
    }
})
console.log(res);