
// map


   const arr=[1,3,4,6,7,8]

//    let res=arr.map(  (r)=>{
//     return r*r
//    })

//    console.log(res);




// map function



// function sq (e){
//     return e*e
// }
// let c=arr.map(sq)
// console.log(c);



// let res=arr.filter( (e)=>{

//   return  e%2==0;

// })
// console.log(res);
// function ss(e){

//     return e%2==0
// }
// let res=arr.filter(ss)
// console.log(res);

// reduce

// let res=arr.reduce( (ar,cr)=>{
// if (ar<cr)
//  ar=cr
// return ar

// })

// console.log(res);


// const person={
//     name:"avinadh",
//     place:"thrissur",
//     age:21
// }
// let person2={...person}
// console.log(person2);


// promis


// let promis=require('promise')

//  function add(a,d){
//     return new promis( (resolv,reject)=>{

//         if(a<3){
//             reject("error")
//         }
//         resolv(a+d)
//     })
// }
//  add(5,5).then( (sum)=>{
//     console.log(sum);
//  }).catch((err)=>{
//     console.log(err);
//  })

// setimeout

// setTimeout( ()=>{
//     console.log("hi");
// },3000)


// callback
 
// function e(h){
//     console.log("hi");
//     h();
// }
// e(function (){
// console.log("hello");

// })

// currying

// function e(q){
//     return function(n){
//         return function(j){
//             return q+n+j
//         }
//     }
// }
//   let res=e(3)(9)(3);
// console.log(res);

// foreach
// sum=0;
// arr.forEach( (value)=>{
// sum=sum+value
// })

// console.log(sum);



// optional chainning


// const person={
//     name:"avinadh",
//     place:"thrissur",
//     age:21
// }
// let ar=person?.name
// console.log(ar);
    //  OR
    // console.log(person?.place);

    // terneary operator

//     var num=2
//     var num2=6
//   let res = num2%num==0?"even":"odd"
//   console.log(res);


// closur

// function x(){
//     console.log("he");
//     function w(){
//         console.log("hi");
//     }
//     w();
// }
// x();


// hoisting
// x=10
// console.log(x);
// var x



// slic

// let res=arr.slice(1,4)
// console.log(res);



// splice

// let res=arr.splice(3 ,5)
// console.log(res);


// shallo copy



// let person={

//     name:"hoi"
// }

// let person2=person

//  person2.name="hu"
//  console.log(person);
//  console.log(person2);


// deep copy


// let person={

//     name:"hoi"
// }
// let person1={...person}

// person1.name="hi";
//  console.log(person);
//  console.log(person1);


// .........................................................................................................



// call

// const person3={
//   fullname (){
//     console.log(this.name+this.secondname);
// }
// }
// const person={
//     name:"avi",
//     secondname:"nadh",
// }
// const person1={
//     name:"jo",
//     secondname:"hn",
// }
// person3.fullname.call(person)
// person3.fullname.call(person1)



// bind

// const person={
  
//     fullname(){
//         console.log(this.name+this.secondname);
//     }

// }

// const person1={
//     name:"avinadh",
//     secondname:"kp"
// }
// let res=person.fullname.bind(person1)
// res();


//apply



const person3={
  fullname (secondname){
    console.log(this.name +secondname);
}
}
const person={
    name:"avi",
    
}
const person1={
    name:"jo",
   
}

person3.fullname.apply(person1,['mone'])

//..................................................................................................

// promis

// const promis=require('promise')

// function add(a,b){
//     return new promis( (resolve,reject)=>{
//         if(a<1){
//         reject("error")
//         }
//         resolve(a+b)
//     })
// }
// add(0,54).then( (sum)=>{
//     console.log(sum);
// }).catch( (err)=>{
//     console.log(err);
// })

// optional chainning

// const person={
//     name:"avinadh",
//     secondname:"kp",
// }
// let res=person?.name
// console.log(res);


// terneary operator

// var num=9
// var result
// result=num%2==0?"even":"odd"
// console.log(result);



// const man={

// namam(lastname){
//     console.log(this.name+lastname);
// }
// }
// const man2={
//     name:"avinadh",
// }
// man.namam.call(man2,['kp'])

// const promise=require('promise')

// function add(s,d){
 
// return new promise( (reslove,reject)=>{
//     if (s<-1){
//         reject("ed")
//     }
// reslove(s+d)
// })


// }
// add(-20,40).then( (sum)=>{
//     console.log(sum);
// }).catch((err)=>{
//     console.log(err);
// })




// const orr=[[{a:1,b:3}]]

// // console.log(r1);
// let m=orr[0][0].a
// let h=orr[0][0].b
// console.log(h+m);



const barr = [[{a:1,b:3,c:5}]]
var h = barr[0][0].a
var i = barr[0][0].b
var j = barr[0][0].c
console.log(h+i+j);