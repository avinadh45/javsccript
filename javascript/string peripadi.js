// const aw = ["akhildas", "avinadh", "jOElhuhijhu", "xaxa","zzzz", "xxxx"];

// let resuit = aw.reduce((acc,cur)=>{
//    return acc.length>cur.length?acc:cur
// })
// console.log(resuit);


// const arr = ["akhildas","avinadh","jOEl","zzzz","xxxx","yyyy"]
// console.log(arr[0].split('').length)

// ar = ["apple","orange","banana","grapes"]
// const re = ar.map((x)=>{
//     return x.toUpperCase().charAt()+x.slice(1)
// })
// console.log(re.slice(1));


// const ar = ["apple","orange","banana","grapes"]
// const res = ar.map((x)=>{
//    return x.toUpperCase().charAt()+x.slice(1)
// })
// console.log(res);

// const ar = ["apple","orange","banana","grapes"]
// const res = ar.map((x)=>{
//    return x.toUpperCase().charAt()+x.slice(1)
// })
// console.log(res);
// const res = ar.map((x)=>{
//    return x.toUpperCase().charAt()+x.slice(1)
// })
// console.log(res);


// const users=[
//    {firstName:"john",lastName:"Biden",age:26},
//    {firstName:"jimmy",lastName:"cob",age:75},
//    {firstName:"sam",lastName:"lewis",age:50},
//    {firstName:"Ronald",lastName:"Mathew",age:26},  
//  ];
//  let result = users.reduce((acc,cur)=>{
//    if(acc[cur.age]){
//       acc[cur.age]++
//    }else{
//       acc[cur.age]=1
//    }
//    return acc
//  },{})
//  console.log(result);

//  let str = "hi my name is avinadh"
//  let word = str.split(" ")
//  for(let i = 0 ;i<word.length;i++){
//     word[i]=word[i].split("").reverse().join("")
//  }
//  let res = word.join(" ")
//  console.log(res);

// const word = str.split(" ")
// for(let i = 0;i<word.length;i++){
//     word[i]=word[i].split("").reverse().join("")
// }
// let result = word.join(" ")
// console.log(result);

// let str = "this is an string"

// let resl = str.split('').reverse().join('')
// console.log(resl);



// let str = "reverse the string to their own place";


// let words = str.split(" ");


// for (let i = 0; i < words.length; i++) {

//     words[i] = words[i].split("").reverse().join("");
// }


// let reversedStr = words.join(" ");


// console.log(reversedStr);



// const users=[
//    {firstName:"john",lastName:"Biden",age:26},
//    {firstName:"jimmy",lastName:"cob",age:75},
//    {firstName:"sam",lastName:"lewis",age:50},
//    {firstName:"Ronald",lastName:"Mathew",age:26},  
//  ];

// let ress = users.reduce((acc,cur)=>{
//   if(acc[cur.age]){
//    acc[cur.age]++
//   }else{
//    acc[cur.age]=1
//   }
//   return acc
// },{})
// console.log(ress);


// const aw = ["akhildas", "avinadh", "jOElhuhijhu", "xaxa","zzzz", "xxxx"];

// let es = aw.reduce((acc,cur)=>{
//   return acc.length>cur.length?acc:cur
// })
// console.log(es);


// const users=[
//    {firstName:"john",lastName:"Biden",age:26},
//    {firstName:"jimmy",lastName:"cob",age:75},
//    {firstName:"sam",lastName:"lewis",age:50},
//    {firstName:"Ronald",lastName:"Mathew",age:26},  
//  ];
//  let ans = users.reduce((acc,cur)=>{
//    if(acc[cur.age]){
//       acc[cur.age]++
//    }else{
//       acc[cur.age]=1
//    }
//    return acc
//  },{})
//  console.log(ans);

// Output: "world hello"


// let string = "hello world"

// let result = string.split(' ').reverse().join(' ')
// console.log(result);

// let s = "helllo this is "

// let arr=s.split(" ").join('')
// console.log(arr);


// const arr1 = ["akhildas","avinadh","jOElhuhijhu","zzzz","xxxx","yyyy"]
// let greater = arr1[0]
// arr1.forEach((ele)=>{
// if(greater.length < ele.split('').length){
//     greater = ele
// }
// })

// console.log(greater)


// let str = "avinad";
// let word = str.split("");  
// let reversed = "";  

// for (let i = word.length - 1; i >= 0; i--) {
//   reversed += word[i];  
// }
// console.log(reversed)

let str = "avinad";
let word = str.split("")
let reverse = ''
for(let i = word.length-1;i>=0;i--){
    reverse+=word[i]
}
console.log(reverse);