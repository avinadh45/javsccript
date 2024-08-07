// const person={

//     name:"avinadh",
//     place:"thrissur"

// }
// let add =function (age) {
//     console.log(this.name+this.place,age);
// }

// add.apply(person ,[20])


// const person ={
//   name:"avinadh",
//   place:'thrissur',
// //   age:21,
// }
// var result = function(age) {
//     console.log(this.name+this.place,age);
// }
// result.apply(person,[20])


// const person = {
//     name:'avinadh',
//     place:'thrissur',
// }
// const add = function(age){
//     console.log(this.name+this.place,age);
// }
// add.apply(person,[21])


// const person = {
//     name:'Tony',
//     place:'varapuzha'
// }
// const add = function(age){
//     console.log(this.name+this.place,age);
// }
// add.apply(person,[31])


// const res = function(age){
//     console.log(this.name+this.place,age);
// }
// res.apply(person,[31])


// const add = function(age){
//     console.log(this.name+this.place,age);
// }
// add.apply(person,[23])

// const add = function(age){
//     console.log(this.name,this.place,age);
// }
// add.apply(person,[21])

// const person  = {
//     name:'avinadh',
//     place:'edamuttam'
// }
// const add = function(age){
//     console.log(this.name,this.place,age);
// }
// add.apply(person,[21])



// const result = function(age){
//     console.log(this.name+this.place,age);
// }
// result.apply(person,[21])

// const a  = function(age){
//     console.log(this.name+age);
// }
// a.apply(person,[21])

// var hi = function(age){
//     console.log(this.name+this.name,age);
// }
// hi.apply(person,[21])



// var hi = [[{a:12},{b:43}]]

// var ho = hi.flat(Infinity)
// console.log(ho);


// var h = hi[0][0].a
// var b = hi[0][0].b
// console.log(h+b);


// function hai(age){
//     console.log(this.name+this.place+age);
// }
// hai.apply(person,[21])

// function ha(age){
//   console.log(this.name+""+this.place+""+age);
// }
// ha.apply(person,[21])


// function add(age){
//   console.log(this.name+''+this.place+''+age);
// }
// add.apply(person,[21])

// function add(age){
//   console.log(this.name +" "+this.place+" "+age);
// }
// add.apply(person,[21])

// function add(age){
//   console.log(this.name+" "+this.place+" "+age);
// }
// add.apply(person[21])


// const person = {
//   name:"avinadh",
//   place:"sn center"
// }

// function add(age){
//   console.log(this.name+" "+this.place+" "+age);
// }
// add.apply(person,[21])

// let student = {
// 	details: function () {
// 		return this.name + this.class;
// 	}
// }
// let stud1 = {
// 	name: "Dinesh",
// 	class: "11th",
// }
// let stud2 = {
// 	name: "Vaibhav",
// 	class: "11th",
// }
// let x = student.details.apply(stud2,stud1);
// console.log(x);
// const person = {
//   name:"avinadh",
//   place:"thrissur"
// }
// function add(age){
//   console.log(this.name+" "+this.place+" "+age);
// }
// add.apply(person,[21])
// const person = {
//   name:"avinadh",
//   age:21,
//   place:"thrissur"
// }

// function profile(country){
//   console.log(this.name+" "+this.place+" "+this.age+" "+country);
// }
// profile.apply(person,["india"])

// function profile(country){
// console.log(this.name+" "+this.place+country);
// }
// profile.apply(person,["india"])

// function profile(country){
//   console.log(this.name+""+this.age+""+this.place+""+country);
// }
// profile.apply(person,["india"])

// function profile (country){
//   console.log(this.name+" "+this.age+" "+country);
// }
// profile.apply(person,["india"])

// let person = {
//   name:"avinadh",
//   age:21
// }

// function add(contry){
//   console.log(this.name+" "+this.age+" "+contry);
// }
// add.apply(person,["india"])
// add.call(person,"india")
// let result = add.bind(person,["india"])
// result()

// function per(contry){
//   console.log(this.name+" "+this.age+" "+contry);
// }
// per.apply(person,["india"])
// per()

// function profile(contry){
//   console.log(this.name+" "+this.age+""+contry);
// }
// profile.apply(person,["india"])
// function profile(contry){
//   console.log(this.name+" "+contry);
// }
// profile.apply(person,["india"])
// profile.call(person,"india")
// let res = profile.bind(person,"america")
// res()