//    let player={
// name:"baa",

//    }

//     let player2=player
//      player2.name="dui"
//     console.log(player)
//     console.log(player2)




//                                                               //shallo copy




// const person ={
//    name :"joel",
//    age :18,
//    address: {
//        city:"cheraneloor",
//        pincode:682034

//    }
// }


// //shallow copy

// const person2=person;
// person2.name="joy"
// console.log(person2)


// console.log(person)


// let originalObject = {
//    name: 'John',
//    age: 30,
//    address: {
//      city: 'New York',
//      country: 'USA'
//    }
//  };
 
// //  Shallow copy using Object.assign()
// //  let shallowCopy = Object.assign({}, originalObject);
 
// //  // Shallow copy using the spread operator
//  let shallowCopy = { ...originalObject };
 
//  shallowCopy.address.city = 'San Francisco';
 
//  console.log(originalObject.address.city); // Outputs 'San Francisco' - both objects share the same nested object reference
 



//  let originalObject = {
//    name: 'John',
//    age: 30,
//    address: {
//      city: 'New York',
//      country: 'USA'
//    }
//  };


// // let copy = Object.assign({},originalObject)


// //  copy.name="rohit"
// //  console.log(copy.name);


// let person={...originalObject}
// console.log(person);
 

// let person={
//   name:"gk",
//   place:"london"
// }

// let person2=Object.assign({},person)
// // console.log(person);

// console.log(person2);


// let res=Object.assign({},person)
// console.log(res);



// let person = {
//   name:'avinadh',
//   age:21,
// }
// let result = Object.assign({},person)

// result.name="th"
// console.log(result);



// let person={
//   name:'avinadh',
//   age:21,
//   place:{
//     contry:"india",
//     city:'thrissur'
//   }
// }


// var result = Object.assign({},person)
// result.place.city='miku'
// console.log(result);
// console.log(person);

// let result = Object.assign({},person)

// console.log(person);

// const result = Object.assign({},person)
// console.log(result);

// var result = Object.assign({},person)


// let person={
//   name:'avinadh',
//   age:21,
//   place:{
//     contry:"india",
//     city:'thrissur'
//   }
// }

// let result = Object.assign({},person)
// console.log(result);

// const person = {
//   name:"avinadh",
//   age:21,
//   place:{
//     country:"india",
//     city:"thrissur"
//   }
// }
// let result = Object.assign({},person)

// result.name = "avinadh"
// console.log(result);
// console.log(person);

// // Original object
// const original = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA"
//   }
// };

// // Shallow copy using Object.assign()
// const shallowCopy = Object.assign({}, original);

// // Modifying the shallow copy
// shallowCopy.name = "Jane";
// shallowCopy.address.city = "Los Angeles";

// console.log("Original Object:");
// console.log(original);
// console.log("Shallow Copy:");
// console.log(shallowCopy);



// const person  = {
//   name:"avinadh",
//   age:21,
//   place:{
//     city:"kochi",
//     country:"india"
//   }
// }
// let result = Object.assign({},person)
// console.log(result);
// let result = Object.assign({},(person))
// console.log(result);

// const profile={
//   name:'Akhildas',
//   age:23,
//   address:{
//       place:'Kochi',
//       state:'Kerala'
//   }
// }

// const user=Object.assign({},profile)

// user.name='martin',
// user.age=25;
// user.address.place='Chennai';
// user.address.state='Tamilnadu';

// console.log(profile);
// console.log(user);

// let res = Object.assign({},profile)
// console.log(res);

let person = {
  name: "Avinadh",
  age: 21,
  place: {
    panchayam: {
      vard: "valappad",
      manthri: "penarayii"
    }
  }
}
let res = Object.assign({}, person);
res.name = "kanna";
res.place.panchayam.vard = "chanderapenni";
console.log('Original person:', person);
console.log('Modified res:', res);
