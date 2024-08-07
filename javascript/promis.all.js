// // Simulated asynchronous functions without setTimeout
// function fetchData1() {
//   return new Promise((resolve) => {
//     // Simulating an asynchronous operation
//     resolve('Data from API 1','Data from API 1');
//   });
// }

const { reject, resolve } = require("promise");

// function fetchData2() {
//   return new Promise((resolve) => {
//     // Simulating an asynchronous operation
//     resolve('Data from API 2');
//   });
// }

// function fetchData3() {
//   return new Promise((resolve,reject) => {
//     // Simulating an asynchronous operation
//     // reject('Data from API 3');
//     resolve('solve');
//   });
// }

// // Using Promise.all to fetch data from multiple APIs concurrently
// Promise.all([fetchData1(), fetchData2(), fetchData3()])
//   .then((data) => {
//     console.log('All data fetched successfully:', data);
//     // Output: ['Data from API 1', 'Data from API 2', 'Data from API 3']
//   })
//   .catch((error) => {
//     console.error('One of the API requests failed:', error);
//   });



const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 4000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 3 rejected');
    // resolve('Promise 3 resolved');
  }, 1500);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
  })
  .catch((error) => {
    console.error(error); // This won't be executed in this example
  });


// const promise1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("resolved ")
//   },1000)
// })
// const promise2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("sucess")
//   },1500)
// })
// const promise3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject("sucess")
//   },1500)
// })
// Promise.all([promise1,promise2,promise3])
// .then((value)=>{
//   console.log(value);
// })
// .catch((err)=>{
//   console.log(err);
// })