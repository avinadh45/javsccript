// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise 1 resolved');
//     }, 1000);
//   });

const { reject, resolve } = require("promise")

  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise 2 resolved');
//     }, 500);
//   });
  
//   Promise.race([promise1, promise2])
//     .then((result) => {
//       console.log(result); // Output: Promise 2 resolved
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  


// const promise1 = new Promise((resolve,reject)=>{
//     resolve('hi')
// })
// const promise2  = new Promise((resolve,reject)=>{
//     reject("hello")
// })
//  const r = Promise.race([promise1,promise2])
// r.then((result)=>{
//     console.log(result);
// })
// r.catch((error)=>{
//     console.log(error);
// })




// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise one ')
//     },2000)
// })
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise two ')
//     },3000)
// })
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//           reject('no')
//         // resolve('promise three')
//     },1050)
// })
// Promise.race([promise1,promise2,promise3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hi")
    },1000)
})
const promise2 = new Promise((resolve,reject)=>{
setTimeout(()=>{
    reject("this is reject")
},1200)
})

Promise.any([promise1,promise2])
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});