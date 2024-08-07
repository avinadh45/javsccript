// var r = require('readline-sync')

//   num1= r.question(' enter the principle amount')
// num2 =r.question('enter the interest rate')
// num3=r.question('enter the number of years')
//  num4=(num1*num2*num3)/100
//  console.log("simple interest "+num4)

// setTimeout(()=>{
//   console.log("hii");
// },1000)


// setTimeout(()=>{
//   console.log("hello");
// },1000)

let count = 1
let res = setInterval(()=>{
   count++
   console.log(count);
   if(count>5){
    clearInterval(res)
   }
},1000)