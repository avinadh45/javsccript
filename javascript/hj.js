const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
    ];

// const output= users.filter( (x) =>x.age<30).map( (x)=>x.firstName)
// console.log(output);


// .......................reduce...................................


// const output=users.reduce(  (acc,curr) =>{
//     if(acc[curr.age]){
//         acc[curr.age]=++ acc[curr.age]
//     }else{
//         acc[curr.age]=1;
//     }
//     return acc
// },{})
// console.log(output);

// .....................using map and filtr,,,,,,,,,,,,,,,,


// const output =users.filter( (x)=> x.age<30).map( (x) => x.firstName)
// console.log(output);


// const res=users.filter( (x)=>x.age<25).map( (x)=> x.firstName+x.lastName)
// console.log(res);

// let output=users.filter( (w)=>w.age<30).map( (w)=>w.firstName)

// console.log(output);


const result = users.filter((a)=>a.age<30).map((a)=>a.firstName)
console.log(result);
