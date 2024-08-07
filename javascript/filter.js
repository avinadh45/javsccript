

// let arr=[2,7,5,5,5,4,8,9]

// function grester(i){
// return i>4

// }

// let output = arr.filter(grester)

// console.log(output)

// let output=arr.filter( (x)=>{
//     return x>4
// })
// console.log(output)

// //even
//  let output= arr.filter( (x) =>{
//     return x%2===0;
//  })

//  console.log(output)

 //odd

//  function odd(i){
//     return i%2===1
//  }
//  let output= arr.filter(odd)
//  console.log(output)

//  let arr2 = [5,8,9,6,7,3]

//  let res = arr2.filter( (x) =>{
//     return x%2==0;
//  })
//  console.log(res)



// let res = arr2.filter( (x) =>{

//     if(x<5){
//         return x
//     }

// } )
// console.log(res)


// let ress = arr2.filter( (x) =>{
   
// return x%2==0;


// })
// console.log(ress)

// let ser = arr.filter( (y) =>{

//     return y%2==1;
// })

// // console.log(ser)
// let des= arr.filter( (element,index) => arr.indexOf(element)===index


// );
// console.log(des)


// var res=arr.filter( (y) =>{
//     return y%2==1;
// })
// console.log(res)

// var res = arr.filter( (e) =>{

//     return e%2==1;
// })
// console.log(res)

// let res=arr.filter( (e)=>{
//     return e%2==0
// })
// console.log(res);

// let res=arr2.filter( (f)=>{
//     return f%2==0
// })
// console.log(res);




// let res=arr.filter( (e)=>{
//     return e%2==0
// })
// console.log(res);





// const array = [1, 2, 3, 4, 2, 5, 6, 1];

// // Remove duplicates using filter and indexOf
// const uniqueArray = array.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });

// console.log(uniqueArray);


// const arr=[2,2,5,3,5,5,6]
// const ardep=arr.filter((value,index,self)=>{
//     return self.indexOf(value)==index;
// })
// console.log(ardep);


// const arr=[3,6,3,6,5]
// const ars=arr.filter((value,index,self)=>{
//     return self.indexOf(value)==index;
// })
// console.log(ars);


// const moz=arr.filter((value,index)=>{
//     return arr.indexOf(value)==index;
// })
// console.log(moz);


// const mor=arr.filter((index,value)=>{
//     return arr.indexOf(value)==index;
// })
// console.log(mor);



// const arr=[22,4,5,22,8]
// const result=arr.filter((e)=>{
//     return e%2==!0
// })
// console.log(result);
// const result = arr.filter( (value,index,self)=>{
//     return self.indexOf(value)===index;
// })
// console.log(result);

// const arr = [12,3,4,12,3,4,5,5,6]
// const result = arr.filter((value,index,self)=>{
//     return self.indexOf(value)===index
// })
// console.log(result);


const users = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 }
  ];
  
  const adults = users.filter(user => user.age >= 18);
  // Output: [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 22 }]
  console.log(adults);



// const mixedData = [1, 'Hello', true, null, 42, 'world'];
// const numbersOnly = mixedData.filter(item => typeof item === 'number');
// // Output: [1, 42]
// console.log(numbersOnly);


// const arr = [12,3,4,12,3,4,5,5,6]
// const result = arr.filter( (value,index,self)=>{
//   return self.indexOf(value)===index
// })
// console.log(result);



// const users = [
//   { name: 'John', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 22 }
// ];

// const result = users.filter(users =>users.age>=18)
// console.log(result);
  
// const arr = [12,3,4,12,3,4,5,5,6]
// const result = arr.filter((value,index,self)=>{
//   return self.indexOf(value)==index
// })
// console.log(result);

// const result = arr.filter((value,index,self)=>{
//   return self.indexOf(value)==index
// })
// console.log(result);

// const res = arr.filter((value,index,self)=>{
//   return self.indexOf(value)==index
//  })
// console.log(res);


// const array = [12,4,55,3,7]

// let result = array.filter((x)=>{
//    return x%2==0
// })
// console.log(result);

// const arr = [12,12,34,56,34,87,90,90]

// let res = arr.filter((value,index,self)=>{
//   return self.indexOf(value)==index
// })
// console.log(res);

// const users = [
//   { name: 'John', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 22 }
// ];

// let result = users.filter(users=>users.age<26)
// console.log(result);

let result= users.filter(users=>users.age>22)
console.log(result);