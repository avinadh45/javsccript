

// const promise = require ('promise')

const { resolve, reject } = require("promise");


//   function add(num1,num2){

//    return new promise((resolve,reject)=>{

//       if(num1<1){
//         reject(" number is negative please enter a postuive number ")
//       }
//        resolve(num1+num2)
//    })

//   }
//   add(40,60).then((sum)=>{
// console.log(sum)

//   }).catch((err)=>{
//     console.log(err)
//   })


// const promise = require ('promise')


// function  add(num1,num2){

//   return new promise ( (resolve,reject) =>{

//     if (num1<0){
//       reject (" enter a positive number")
//     }
//     resolve(num1+num2)
//   })
// }
// add(20,40).then( (sum)=>{
//   console.log(sum)
// }).catch((err) =>{
//   console.log(err)
// })


// let promise = require('promise')

// function add(num1,num2){

//   return new promise( (resolve,reject)=>{

//      if(num1<1){
//       reject("erro")
//      }
//      resolve(num1+num2)
//   })
// }
//   add(20,30).then( (sum)=>{
//     console.log(sum)
//   }).catch( (err) =>{

//     console.log(err)
//   })

  
// let promise = require('promise')

// function ad(a,s){
//   return new promise ( (resolve,reject) =>{
  

// if (a<1){
//   reject ("error");
// }
// resolve(a+s)

//   })
// }
//   ad(0,23).then( (sum) =>{
//     console.log(sum)
//   }).catch( (err) =>{

// console.log(err);
//   })



//   let promis=require('promise')

//   function add(a,b){
//     return new promis((resolve,reject)=>{


// if(a>b){
//   reject("error")
// }
// resolve(a+b)


//     })
//   }
//   add(23,45).then( (sum)=>{
//   console.log(sum)
//   }).catch( (err)=>{
//     console.log(err);
//   })




//   let promise=require('promise')

//   function add(a,b){
// return new promise( (resolve,reject)=>{

//   if (a>b){
//     reject("enter a positive number")
//   }
//   resolve(a+b)
// })

//   }
//   add(20,-1).then( (sum)=>{
//     console.log(sum);
//   }).catch( (err)=>{
//     console.log(err);
//   })

// let promise = require('promise')

// function add(a,d){
//   return new  promise( (resolve,reject)=>{
//  if (a<0){
//   reject('err')
//  }
//  resolve(a+d)
//   })
// }
// add(20,20).then( (sum)=>{
//   console.log(sum);
// }).catch( (err)=>{
//   console.log(err);
// })

// const promise = require('promise')

// function add(a,s){
//     return new promise( (resolve,reject)=>{
//         if(a<0){
//             reject("error ")
//         }
//         resolve(a+s)
//     })
// }
// add(20,20).then((sum)=>{
//     console.log(sum);
// }).catch((err)=>{
//     console.log(err);
// })

// const promise=require('promise')
// function add(a,s){
//     return new promise ((resolve,reject)=>{
//    if(a<0){
//     reject('error')
//    }
//    resolve(a+s)
//     })

// }
// add(20,30).then((sum)=>{
//     console.log(sum);
// }).catch((err)=>{
//     console.log(err);
// })

// const promise = require('promise')
// function add(a,s){
//     return new promise ((resolve,reject)=>{
//         if(a<0){
//             reject('enter a positive number')
//         }else{
//             resolve(a+s)
//         }
//     })
// }
// add(23,45).then((sum)=>{
//     console.log(sum);
// }).catch((err)=>{
//     console.log(err);
// })



// const promise  = require('promise')
// function add(a,s){
//     return new promise((resolve,reject)=>{
//         if(a<0){
//             reject('enter a positive number');
//         }else{
//           resolve(a+s)
//         }
//     })
// }
// add(21,23).then((sum)=>{
//     console.log(sum);
// }).catch((err)=>{
//     console.log(err);
// })

// const promise = require('promise')

// function add(a,b){
//     return new promise( (resolve,reject)=>{
//         if(a<1){
//             reject('enter a positive number')
//         }else{
//             resolve(a+b)
//         }
//     })
// }
// add(10,90).then((sum)=>{
//     console.log(sum);
// }).catch((err)=>{
//     console.log(err);
// })


// const promise =  require('promise')
//  function add(a,s){
//     return new promise((resolve,reject)=>{
//         if(a<0){
//             reject('enter a positive number')
//         }else{
//             resolve(a+s)
//         }
//     })
//  }
//  function mul(num1,num2){
//     return new promise((resolve,reject)=>{
//         if(num1==0){
//             reject('enter a positive number')
//         }else{
//             resolve(num1*num2)
//         }
//     })
//  }

//  add(4,5).then((sum)=>{
//     console.log(sum);
//     return mul(sum,su)
//     .then((value)=>{
//         console.log(value);
//     })
//  }).catch((err)=>{
//     console.log(err);
//  })

//  function add(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a<0){
//             reject("enter an positive number")
//         }
//         resolve(a+b)
//     })
//  }
//  try{
//  add(20,10).then((sum)=>{
//     console.log(sum);
//  }).catch((err)=>{
//     console.log(err);
//  })
// }
// catch(error){
//     console.log("faild");
// }

// function Dely(time){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hii")
//     },3000)
//    })
// }
// Dely(3).then(data=>console.log(data))


// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a<0){
//             reject("need a pos number")
//         }else{
//             resolve(a+b)
//         }
//     })
// }

// add(12,2).then((sum)=>{
//     console.log(sum);
// }).catch((err)=>{
//     console.log(err);
// })

function ad(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("this is resolved from the ad")
        },3000)
    })
}
async function go(){
    try {
        console.log("i am awaituing");
     result = await ad()
    console.log(result);
    } catch (error) {
       console.log(error); 
    }
}

go()


// function add(){
//     return new Promise((resolve,reject)=>{
//         resolve("it resolved")
//     })
// }
// add().then((sum)=>{
//     console.log(sum);
// }).catch((err)=>{
//     console.log(err);
// })

// let ans =()=>{
//     console.log("hiii");
// }
// ans()

// function add(a,d){
//   return new Promise((resolve,reject)=>{
//     if(a<0){
//         reject("enther a positive number")
//     }
//     resolve(a+d)
//   })
// }
// add(21,32).then((sum)=>{
//     console.log(sum);
// }).catch((err)=>{
//     console.log(err);
// })

// function ad(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("hii")
//         },1000)
//     })
// }
// async function dely(){
//     console.log("hi");
//     let result = await ad()
//     console.log(result);
// }
// dely()