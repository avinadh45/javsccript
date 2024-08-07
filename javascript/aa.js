// const array = [1,2,3,4,5]

// let result = array.map((a)=>{
//     return a*a
// })
// console.log(result);


// let result = array.filter((x)=>{
//     return x%2==0
// })
// console.log(result);


// const promise = require("promise")

// function add(a,b){
//     return new promise((resolve,reject)=>{
//         if(a<0){
//             reject('enter a positive number')
//         }
//         resolve(a+b)
//     })
// }
// add(12,34).then((sum)=>{
//     console.log(sum);
// }).catch((err)=>{
//     console.log(err);
// })


function outer(){
    var x =10
    function inner(){
        console.log(x);
    }
    inner()
}
outer()