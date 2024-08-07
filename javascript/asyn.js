// function name() 
// {
//     setTimeout(() => {
//        console.log("hi"); 
//     }, 3000);

const { resolve, reject } = require("promise");

    
// }
// async function s() {
//     let ae= await name()
//     console.log(ae);
    
// }
// s()


// Simulated asynchronous function that returns a promise
// function fetchData() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('Data');
//       }, 1000);
//     });
//   }
  
//   // Async function using await to fetch data
//   async function getData() {
//     const result = await fetchData();
//     console.log('Data received:', result);
//   }
  
//   // Call the async function
//   getData();

// function hi(){
//   return new Promise(resolve =>{
//     setTimeout(()=>{
//       resolve('data');
//     },1000)
//   })
// }
// async function getdata(){
//   const result = await hi();
//   console.log('data recived',result);
// }
// getdata();
  

// function hi(){
//   return new Promise(resolve =>{
// setTimeout(()=>{
//   resolve('data')
// },1000)
//   })
// }
// async function fetchData(){
//   var result = await hi()
//   console.log('data recived',result);
// }
// fetchData()



// function hi (){
//   return new Promise(resolve  =>{
//     setTimeout( ()=>{
//       resolve('data')
//     },1000)
//   })
// }
// async function data(){
//   var result = await hi()
//   console.log('data recived',result);
// }
// data()


// function hi (){
//   return  new Promise (resolve =>{
//     setTimeout(()=>{
//       resolve('data')
//     },1000)
//   })
// }
// async function data(){
//   let result = await hi()
//   console.log('data recive ',result);
// }
// data()


// function hi(){
//   return new Promise (resolve =>{
//     setTimeout( ()=>{
//       resolve('data')
//     },1000)
//   })
// }
// async function da(){
//   let result = await hi()
//   console.log("data recive",result);
// }
// da()



// function add(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve("hello")
//     },1000)
//   })
// }
// async function data(){
//   let result = await add()
//   console.log("get it",result);
// }
// data()

// var add = function(){
//   return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     resolve('sucess!!!')
//    },1000)
//   })
// }
// async function data(){
//   let result  = await add()
//   console.log("the wait is over",result);
// }
// data()


// var ho = function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('here is this')
//         },1000)
//     })
// }
// async function data(){
//     let result = await ho()
//     console.log('faster',result);
// }
// data()


// var ha = function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("waite");
//         },1000)
//     })
// }
// async function add(){
//     let result = await ha()
//     console.log("faster",result);
// }
// add()
// function data(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("its comming")
//         },1000)
//     })
// }
//  async function pass(){
//    let result = await data()
//    console.log('bba',result);
// }
// pass()

// function add(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//               resolve("date resolved")
//         },1000)
//     })
// }
// async function come(){
//     let result = await add()
//     console.log("got it",result);
// }
// come()


// function add(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hj")
//         },1000)
//     })
// }
// async function come(){
//     let res = await add()
//     console.log("hi",res);
// }
// come()

// function add(){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//           resolve("hiii")
//         },1200)
//     })
    
// }
// async function come(){
//     let res = await add()
//     console.log("ho",res);
// }
// come()



// function add(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("it ok")
//         },3000)
//     })
// }
// async function ok(){
// let res = await add()
// console.log("waiting is over",res);
// }
// ok()


// function add(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("resolved")
//         },3000)
//     })
// }
// async function npn(){
//     let result = await add()
//     console.log("waiting is over",result);
// }
// npn()

// function add(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("red")
//         },3000)
//     })
// }
// async function ok(){
//     let result = await add()
//   console.log("bob",result);
// }
// ok()


// function add(a,s){
//     return new Promise((resolve,reject)=>{
//         if(a<0){
//              reject("enter a positive number")
//         }
//         resolve(a+s)
//     })
// }
// async function ok(){
//     let result = await add(12,25)
//     console.log("hy",result);
// }
// ok()