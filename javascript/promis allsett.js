// // Function that returns a promise with setTimeout
// function delay(value, timeout) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         console.log(`${value} finished after ${timeout} milliseconds`);
//         resolve(value);
//       }, timeout);
//     });
//   }
  
//   // Array of promises with different timeouts
//   const promises = [
//     delay('Promise 1', 1000),
//     delay('Promise 2', 2000),
//     delay('Promise 3', 1500)
//   ];
  
//   // Using Promise.allSettled to wait for all promises to settle
//   Promise.all(promises)
//     .then(results => {
//       console.log('All promises have settled:', results);
//     });
  



// // Simulated asynchronous functions without setTimeout
// function fetchData1() {
//   return new Promise((resolve) => {
//     // Simulating an asynchronous operation
//     resolve('Data from API 1');
//   });
// }

// function fetchData2() {
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation that fails
//     reject(new Error('Failed to fetch data from API 2'));
//   });
// }

// function fetchData3() {
//   return new Promise((resolve) => {
//     // Simulating an asynchronous operation
//     resolve('Data from API 3');
//   });
// }

// // Using Promise.allSettled to fetch data from multiple APIs concurrently
// Promise.allSettled([fetchData1(), fetchData2(), fetchData3()])
//   .then((results) => {
//     console.log('All promises settled:', results);
//     /*
//       Output:
//       [
//         { status: 'fulfilled', value: 'Data from API 1' },
//         { status: 'rejected', reason: Error: Failed to fetch data from API 2 },
//         { status: 'fulfilled', value: 'Data from API 3' }
//       ]
//     */
//   });



const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 2 rejected');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 5000);
});

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error); // This won't be executed in this example
  });
