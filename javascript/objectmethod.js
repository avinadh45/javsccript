// const persom = {
// name:"avinadh",
// age:20,
// place:"thrissur",
//  hi:function(){

// //console.log("hello")
// return this.name+" "+this.age;
//  }

// };
//  ///persom.hi();


//  persom.hi();







// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName+" "  + this.id;
//     }
//   };
//    console.log(person.fullName()); 


// const person={
//   name:"avinad",
//   age:21,
//   secondname:"kp",
//   full :function(){
//   return this.name+this.secondname
//   }
// };
// console.log(person.full());


// const person={
//   name:"avinadh",
//   age:21,
//   hi: function (){
//     return this.name+this.age
//   }
// };
// console.log(person.hi());


let arr = [
  { book: 'one', price: 170 },
  { book: 'two', price: 200 },
  { book: 'three', price: 130 }
];


// arr.sort((a,b)=>b.price-a.price)
// let result=arr[0].price
// console.log(result);


let maxPrice = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].price > maxPrice) {
    maxPrice = arr[i].price;
  }
}
console.log(maxPrice);