const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
  ];
  
  const totalVoted = voters.reduce((acc, voter) => {
    return acc + (voter.voted ? 1 : 0);
  }, 0);
  
  // console.log(`Total number of people who voted: ${totalVoted}`);
 

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
//   ];
  
//   const flattenedArray = arrays.reduce((acc, currentArray) => {
//     return acc.concat(currentArray);
//   }, []);
  
// //   console.log(flattenedArray);




  
// Given an array of objects users, print user of particular age along with their frequency.


// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"cob",age:75},
//     {firstName:"sam",lastName:"lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},  
//   ];
//   // using reduce array method
//   var output=users.reduce(function(acc,curr){
//       if(acc[curr.age])
//       //if present in array object
//       {
//           acc[curr.age]++;            
//       }else{
//       //if not present in array object
//         acc[curr.age]=1;      
//       }
//       return acc;
//   },{})
//   console.log(output);




//Print object having marks greater than 60 and rollNumber greater than 15.


// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];
  //  const details= student.filter((x)=>x.marks>60 && x.rollNumber>15);
//    console.log(details);



// const numbers = [1, 2, 3, 4, 5];

// const strings = numbers.map(number => String(number));

// console.log(strings);

// let student =[
//       {name:"Smith",rollNumber:31,marks:80},
//       {name:"Jenny",rollNumber:15,marks:69},
//       {name:"John",rollNumber:16,marks:35},
//       {name:"Tiger",rollNumber:7,marks:55}
//      ];

//      let result = student.filter((x)=>x.marks>60) 
// //      console.log(result);
// let student =[
//   {name:"Smith",rollNumber:31,marks:80},
//   {name:"Jenny",rollNumber:15,marks:69},
//   {name:"John",rollNumber:16,marks:35},
//   {name:"Tiger",rollNumber:7,marks:55}
//  ];

//  let result = student.filter((x)=>x.marks>60).map((y)=>y.name)
//  console.log(result);




// const aw = ["akhildas", "avinadh", "jOElhuhijhu", "xaxa","zzzz", "xxxx"];
// const greater1 = aw.reduce((acc, curr) => {
//     return acc.length>curr.length?acc:curr
// },aw[0])
// console.log(greater1);


// 
// console.log(result);


// var arrays = [
//   ["1", "2", "3"],
//   [true],
//   [4, 5, 6]
// ];
// const flattenedArray = arrays.reduce((acc, currentArray) => {
//   return acc.concat(currentArray);
// }, []);

//   console.log(flattenedArray);
// let res = arrays.reduce((acc,cur)=>{
//   return acc.concat(cur)
// })

// console.log(res);


// var arrays = [
//   ["1", "2", "3"],
//   [true],
//   [4, 5, 6]
// ];
// let res = arrays.reduce((acc,cur)=>{
//   return acc.concat(cur)
// })
// console.log(res);




// const users=[
//   {firstName:"john",lastName:"Biden",age:26},
//   {firstName:"jimmy",lastName:"cob",age:75},
//   {firstName:"sam",lastName:"lewis",age:50},
//   {firstName:"Ronald",lastName:"Mathew",age:26},  
// ];
// var result = users.reduce((acc,cur)=>{
//   if(acc[cur.age]){
//     acc[cur.age]++
//   }else{
//     acc[cur.age]=1
//   }
//   return acc
// },{})
// console.log(result);

// let res = users.reduce((acc,cur)=>{
//    if(acc[cur.age]){
//     acc[cur.age]++
//    }else{
//     acc[cur.age]=1
//    }
//    return acc
// },{})
// console.log(res);

// var arrays = [
//   ["1", "2", "3"],
//   [true],
//   [4, 5, 6]
// ];

// let res = arrays.reduce((acc,cur)=>{
//   return acc.concat(cur)
// })
// console.log(res);


// const orr=[[{a:1,b:3}]]
// let or=orr.flat()
// let res=Object.values(or).reduce((acc,curr)=>acc+curr.a+curr.b,0)
// console.log(res)
let obj = {a:10,b:20}
let sum = 0 
for(let i in obj ){
  sum+=obj[i]
}
console.log(sum);