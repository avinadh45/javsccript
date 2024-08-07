// function a(y) {
//     console.log('hello');
//     y();
// }

// a(function y() {
//     console.log("hi");
//     setTimeout(function () {
//         console.log("How are you?");
//         setTimeout(function () {
//             console.log("I'm fine, thank you!");
//         }, 1000);
//     }, 1000);
// });



// function x(y){
//     console.log('hi');
//     y()
// }
// x(function y(){
//     console.log("hello");
//     setTimeout(()=>{
//         console.log("good morning");
//         setTimeout(()=>{
//             console.log("have a nice day");
//         },1000)
//     },2000)

// function first(callback){
//     setTimeout(() => {
//         const data={name:'avani'}
//         callback(data)
//     }, 1000);
// }

// function second(data,callback){
//     setTimeout(()=>{
//         const pass=`hai i am ${data.name}`
//         callback(pass)
//     })
// }

// function display(){
//     first((data)=>{
//         second(data,(pass)=>{
//             console.log(pass);
//         })
//     })
// }
// display();

// function step1(callback) {
//     setTimeout(function() {
//       console.log("Step 1 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step2(callback) {
//     setTimeout(function() {
//       console.log("Step 2 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step3(callback) {
//     setTimeout(function() {
//       console.log("Step 3 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step4(callback) {
//     setTimeout(function() {
//       console.log("Step 4 completed");
//       callback();
//     }, 1000);
//   }
  
//   step1(function() {
//     step2(function() {
//       step3(function() {
//         step4(function() {
//           console.log("All steps completed");
//         });
//       });
//     });
//   });

  
// function first(callback){
//    setTimeout(function(){
//      console.log('first');
//         callback()
//    },1000)
// }
  
// function second(callback){
//   setTimeout(function(){
//     console.log('second');
//        callback()
//   },1000)
// }
// function third(callback){
//   setTimeout(function(){
//      console.log('third');
//      callback()
//   })
// }
// first(function(){
//   second(function(){
//     third(function(){
//       console.log('all are finished');
//     })
//   })
// })

// function first (callback){
//   setTimeout(function (){
//     console.log("this is first");
//     callback()
//   },1000)
// }
// function second(callback){
//   setTimeout(function(){
//     console.log("this is second");
//     callback()
//   },1000)
// }
// function third(callback){
//    setTimeout(function (){
//     console.log("tthis is third");
//     callback()
//    },1000)
// }

// first(function(){
//   second(function(){
//     third(function(){
//       console.log("all are finshed");
//     })
//   })
// })


// function first (callback){
//   setTimeout(function(){
//     console.log("first");
//     callback()
//   },3000)
// }

function fetchData(callback) {
    setTimeout(() => {
        console.log("Fetched data");
        callback("data");  
    }, 1000);
}
function processData(data, callback) {
    setTimeout(() => {
        console.log("Processed data:", data);
        callback("processedData");  
    }, 1000);
}
function saveData(data, callback) {
    setTimeout(() => {
        console.log("Saved data:", data);
        callback("savedData");  
    }, 1000);
}
fetchData((data) => {
    processData(data, (processedData) => {
        saveData(processedData, (savedData) => {
            console.log("All tasks completed:", savedData);
        });
    });
});
