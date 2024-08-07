//  let person={
// name:"avi",
// lastname:"nadh",

 
//  fullname(){
//     console.log(this.name + " " + this.lastname);
//  }
//  }
//  let person2 ={
//     name:"ro",
//     lastname:"akhi",
//  }
//  let person1 ={
//    name:"grdgfdgf",
//    lastname:"hfdgfhgghg",
// }

// person.fullname.call(person1);




// let fun=function(place,age){
// console.log( this.name,place,age);

// }
// let person={
// name:"avinadh",


// }
// fun.call(person ,"thrissur",20 )


// let hd=function(){
//     console.log(this.name)
// }
// let person={
//     name:"avinadh"
// }
// hd.call(person)


// let na=function(){
//     console.log(this.);
// }


// let name=function(){
//     console.log(this.name+this.secondname);
// }
// const person={
//     name:"avinadh",
//     secondname:"kp"
// }
// name.call(person)



// const person={
//     name:"avi",
//     age:20,
// }


// let hi=function(){
//     console.log(this.age+this.name);
// }
// hi.call(person)

// const person={
//     name:"avi",
//     age:21,
// }
// const hi =function(){
//     console.log(this.name);
// }
// hi.call(person)

// const person = {
//     name:"avinadh",
//     age:21,
// }
// const hi = function(){
//     console.log(this.name);
// }
// hi.call(person)


// const per = function(){
//     console.log(this.name);
// }
// per.call(person)

// const res = function(){
//     console.log(this.name);
// }
// res.call(person)


// const add = function(){
//     console.log(this.name+this.place);
// }
// add.call(person)


// const hi = function(){
// console.log(this.name,this.age);
// }
// hi.call(person)

// var hi = function(){
//     console.log(this.age);
// }
// hi.call(person)


// const person = {
//     name:"avinadh",
//     age:21,
// }


// var hi = function(){
//     console.log(this.name+this.age);
// }
// hi.call(person)



// var hi = function(greetings){
//     console.log(greetings +'' + this.name+''+this.age);
// }
// hi.call(person,'hello')


// function hi(){
//     console.log(this.name+this.age);
// }
// hi.call(person)


// function hai(place){
//     console.log(this.name+this.age+place);
// }
// hai.call(person,'ththt')


// function hai(){
//     console.log(this.age+this.name);
// }
// hai.call(person)
// function  hai(){
//     console.log(this.name+""+this.age);
// }
// hai.call(person)



const person  = {
    name:"avinadh",
    age:21,
    place:"thrissur"
}

// function profile(){
//     console.log(this.name+" "+this.age+" "+this.place);
// }
// profile.call(person)


function profile(country){
    console.log(this.name+" "+this.place+`${country}`);
}
profile.call(person,"india")