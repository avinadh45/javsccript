// let person={
//     name:"avi",
//     lastname:"nadh",
    
//      }
//      let fullname =function(){
//         console.log(this.name + " " + this.lastname);
    
//      }
//      let person2 ={
//         name:"ro",
//         lastname:"no",
//      }
//      let person1 ={
//       name:"kuuyjuuhu",
//       lastname:"hjhkjhkjk",
//    }
   
     

//      let printfull = fullname.bind(person1)

//        printfull();





// let person={

// let fullname= function(){
//   console.log( this.name+this.lastname)
// }

//     let person2={
//       name:"avi",
//       lastname:"nadh"
//     }
//     let person3={
//       name:"avi",
//       lastname:"nadh"
//     }


//     let printfull=fullname.bind(person3)
//     printfull();




// let fill=function(){

//    console.log(this.name+this.lastname);
// }
// let person={
//    name:"avi",
//    lastname:"xavi"
// }
// let fullname=fill.bind(person)

// fullname();


// let fullna=function(){

//    console.log(this.name+this.lastname);
// }
// let person={
//    name:"avi",
//    lastname:"nadh",
// }

// let result=fullna.bind(person);
// result();


// let nam=function(){

//    console.log(this.name+this.secondname); 
// }

// const person={
//    name:"avi",
//    secondname:"nadh",
// }
// // let res=nam.bind(person)
// res();

// let nam=function(){
//    console.log(this.name);
// }
// const person={
//  name:"avinadh"
// }
// let res=nam.bind(person)
// res();

// let fname=function () {
//    console.log(this.name+this.secondname);

   
// }
// var res = fname.bind(person)
// res();

// const person ={
//    name:"avinadh",
//    age:20,
//    place:"thrissur",
// }  
   
// let res=function(){
//    console.log(this.name+ " "+this.age+ " "+this.place);
// }

// let sul=res.bind(person)
// sul()



// const person={
//    name:"avinadh",
//    place:"thrissur"
// }
// //
// const person2={
//    name:"hi",
//    place:"thrissur"
// }
// let res=function(){
//    console.log(this.name+this.place);
// }
// let result=res.bind(person2)
// result()

// const hi =function(){
//    console.log(this.name);
// }
// const result = hi.bind(person)
// result()


// const hi = function(){
//    console.log(this.name+this.place);
// }
// const result = hi.bind(person)
// result()


// const hi = function(){
//    console.log(this.name);
// }
// let result = hi.bind(person)
// result()

// const hi = function(){
//    console.log(this.name);
// }
// let result = hi.bind(person)
// result()

// const hi = function (){
//    console.log(this.name,this.place);
// }
// let result = hi.bind(person)
// result()



// var hi = function(){
//    console.log(this.name,this.place);
// }
// var result = hi.bind(person)
// result()

// var result = function(){
//    console.log(this.name , this.place);
// }
// let res = result.bind(person)
// // res()

// var res = function(){
//    console.log(this.name,this.place);
// }
// let a = res.bind(person)
// a()


// const hi  = function(){
//    console.log(this.name+this.place);
// }
//  hi.apply(person)
// result()

// var result = function(){
//    console.log(this.name+ ''+this.place);
// }
// let re = result.bind(person)
// // re()
// function result(){
//    console.log(this.name+this.place);
// }
// let res = result.bind(person)
// res()

// function ho(){
//    console.log(this.name+this.place);
// }
// let result = ho.bind(person)
// result()


// var per = function (){
//    console.log(this.place+""+this.name);
// }
// let result = per.bind(person)
// result()

// let ok = function (){
//    console.log(this.place+" "+this.name);
// }
// let result = ok.bind(person)
// result()

// let ok = function(){
//    console.log(this.name+" "+this.place);
// }
// let result = ok.bind(person)
// result()


// let ok  = function(){
//  console.log(this.name+" "+this.place);
// }
// let result = ok.bind(person)
// result()


// const person  = {
//    name:"avinadh",
//    age:21
// }
// function profile(){
//  console.log(this.name+" "+this.age);
// }
// let result = profile.bind(person)
// result()
// function profile (country){
//  console.log(this.name+""+this.age+country);
// }
// let result = profile.bind(person,"india")
// result()

// const person  = {
//    name:"avinadh",
//    age:21
// }
// function profile(place){
//    console.log(this.name+" "+this.age+place);
// }
// let res = profile.bind(person,"kazhimbram")
// res()


let person = {
   name:"avinadh",
   age:21
}
function add(place){
   console.log(this.name+" "+place);
}
let res = add.bind(person,"kazhimbram")
res()