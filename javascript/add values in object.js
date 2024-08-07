// let obj = {a: 30, b: 30};
// let sum = obj['a'] + obj['b'];
// console.log("Sum:", sum); 


// let obj = {a: 30, b: 30,c:{d:10}}

// let num1=obj.a
// console.log(num1);

// let num2=obj.c
// // console.log(num2);
// let num3=num2.d
// // console.log(num3);
// let num4=obj.b

// let result=num1+num3+num4
// console.log(result);
//  var sum=0
// for(let x in obj)
// {
// sum=sum+obj[x]
// }

// console.log(sum);


// let obj = {a: 30, b: 30, c: {d: 10}};
// let sum = 0;

// function sumValues(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             sumValues(obj[key]); // Recursive call for nested objects
//         } else {
//             sum += obj[key]; // Add numeric values to the sum
//         }
//     }
// }
// sumValues(obj);
// console.log(sum); // Output: 70 (30 + 30 + 10)
// Output: 70 (30 + 30 + 10)

//  const arra1= [{a:10,b:20},{c:30,d:40},{mf:4}]
// const ress = arra1.reduce((acc,current)=>{
//   for (i in current){
//     acc= acc+ current[i]
//   }
//   return acc
// },0)
// console.log(ress); 


// const arr71= [[[[[[[[[[20],[10],[10],[2],[3],10],30,40,70,[40,50,30],[30]]]]]]]]]

// const r = arr71.flat(Infinity)
// console.log(r);

// const sumer = r.reduce((acc,curr)=>{
  
//   return acc+curr
// })
// console.log(sumer);


//  const arr71= [[[[[[[[[[20],[10],[10],[2],[3],10],30,40,70,[40,50,30],[30]]]]]]]]]

//  const res = arr71.flat(Infinity)
// //  console.log(res);
// const ans = res.sort((a,s)=>{
//     return a-s
// })
// console.log(ans);


// const arr71= [[[[[[[[[[20],[10],[10],[2],[3],10],30,40,70,[40,50,30],[30]]]]]]]]]

// const res = arr71.flat(Infinity)
// const ans = res.reduce((acc,cur)=>{
//     acc=acc+cur
//     return acc
// })
// console.log(ans);

// let obj = {a: 30, b: 30};
// let sum = 0
// for(let x in obj){
//     sum = sum+obj[x]
// }
// console.log(sum);


// const orr=[[{a:1,b:3}]]

// let m = orr[0][0].a
// let j = orr[0][0].b
// console.log(m+j);



// let obj = {a: 30, b: 30};

// let sum = 0

// for(let i in obj){
//   sum=sum+obj[i]
// }
// console.log(sum);


// const orr=[[[{a:1,b:3}]]]

// let x = orr[0][0][0].a
// let b=orr[0][0][0].b
// console.log(x+b);


// const arr71= [[[[[[[[[[20],[10],[10],[2],[3],10],30,40,70,[40,50,30],[30]]]]]]]]]

// let fla = arr71.flat(Infinity)
// let res = fla.reduce((acc,cur)=>{
//   acc = acc+cur
//   return acc
// })
// // console.log(res);



// const arra1= [{a:10,b:20},{c:30,d:40},{mf:4}]

// let ress = arra1.reduce((acc,cur)=>{
//   for(let i in cur){
//     acc = acc+cur[i]
//   }

//   return acc

// },0)
// console.log(ress);


// let obj = {a: 30, b: 30, c: {d: 10}};
// let sum = 0;

// for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//         sum += Object.values(obj[key]).reduce((acc, val) => acc + val, 0);
//     } else {
//         sum += obj[key];
//     }
// }

// console.log(sum);


// const arra1= [{a:10,b:20},{c:30,d:40},{mf:4}]

// let result = arra1.reduce((acc,cur)=>{
//   for(let i in cur){
//     acc = acc+cur[i]
//   }
//   return acc
// },0)
// console.log(result);


// let obj = {a: 30, b: 30, c: {d: 10}};
// let sum = 0
// for(let i in obj){

//   if(typeof obj[i]==="object"){
//     sum+=Object.values(obj[i]).reduce((acc,cur)=>acc+cur,0)
//   }else{
//     sum+=obj[i]
//   }
// }
// console.log(sum);
// let obj = {a: 30, b: 30};
// let sum = 0 
// for(let i in obj){
//   sum=sum+obj[i]
// }
// console.log(sum);

// let arr = [1,4,7]
// let rs = arr.map((x)=>x%2==0?"even":"odd")
// console.log(rs);

// let arr= [1,4,7]
// let result = arr.map((x)=>x%2==0?"even":"odd")
// // console.log(result);



// let obj = {a: 30, b: 30, c: {d: 10}};
// let sum = 0;

// function sumValues(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             sumValues(obj[key]); // Recursive call for nested objects
//         } else {
//             sum += obj[key]; // Add numeric values to the sum
//         }
//     }
// }

// sumValues(obj);
// console.log(sum); // Output: 70 (30 + 30 + 10)

// let obj = {a: 30, b: 30, c: {d: 10}};

// let sum = 0
// function sumvalue(obj){
//   for(let i in obj){
//     if(typeof obj[i]==="object"){
//       sumvalue(obj[i])
//     }else{
//       sum+=obj[i]
//     }
//   }
// }
// sumvalue(obj)
// console.log(sum);


// let obj = {a: 30, b: 30};

// let sum = 0 
// for(let i in obj){
//   sum+=obj[i]
// }
// console.log(sum);
// let sum = 0 
// for(let i in obj){
//   sum+=obj[i]
// }
// console.log(sum);
// const arra1= [{a:10,b:20},{c:30,d:40},{mf:4}]
// let res = arra1.reduce((acc,cur)=>{
//   for(i in cur){
//     acc=acc+cur[i]
//   }
//   return acc
// },0)
// console.log(res);

// let obj = {a: 30, b: 30,c:{d:10}}

// let num = obj.a
// let num2 = obj.b
// let num3 = obj.c
// let num4 = num3.d
// let sum = num+num2+num4
// console.log(sum);



// const arra1= [{a:10,b:20},{c:30,d:40},{mf:4}]
// let res = arra1.reduce((acc,cur)=>{
//   for(let i in cur){
//     acc = acc+cur[i]
//   }
//   return acc
// },0)
// console.log(res);

// const arr71= [[[[[[[[[[20],[10],[10],[2],[3],10],30,40,70,[40,50,30],[30]]]]]]]]]

// let res = arr71.flat(Infinity)

// let sum = res.reduce((acc,cur)=>{
//   acc=acc+cur
//   return acc
// },0)
// console.log(sum);

let obj = {a: 30, b: 30, c: {d: 10}};
let sum = 0;
// for (let i in obj) {
//   if (typeof obj[i] === "object") {
//     // Sum the values of the nested object
//     sum += Object.values(obj[i]).reduce((acc, cur) => acc + cur, 0);
//   } else {
//     // Sum the value directly if it's not an object
//     sum += obj[i];
//   }
// }
// console.log(sum); // Output: 70

for(let  i in obj){
  if(typeof obj[i]==="object"){
    sum+=Object.values(obj[i]).reduce((acc,cur)=> acc+cur,0)
  }else{
    sum+=obj[i]
  }
}
console.log(sum);