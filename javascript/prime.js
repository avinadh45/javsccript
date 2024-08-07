// const prompt = require("prompt-sync")();

// let n= prompt("enter the number")

// flag=0
// for(let i=2;i<n;i++){
//     if(n%i===0){
//         flag=1;
//         break;
//     }
// }
// if(flag==0){
//     console.log("prime number")
// }else{
//     console.log("not a prime number")
// }

// const prompt = require('prompt-sync')
// let n = prompt('enter a nnumber')
// flage = 0
// for(i=0;i<n;i++){
//     if(n%2===0){
//         flage=1
//         break;
//     }
// }if (flage==0){
//     console.log(pro);
// }






// const array =[1,2,3,4,5,6,7,8]

// flag=0
// for(let i=2;i<array.length;i++){
//     if(array.length%i===0){
//         flag=1;
//         break;
//     }
// }
// if(flag==0){
//     console.log("prime number")
// }else{
//     console.log("not a prime number")
// }



// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     if (num % 2 === 0) return false;
//     for (let i = 3; i * i <= num; i += 2) {
//       if (num % i === 0) return false;
//     }



// const arr = [4, 7, 5, 2, 1, 3, 7, 9, 1];
// const arr1 = arr.filter((n) => {
//   if (n <= 1) return false; // 1 and numbers less than 1 are not prime
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false; // If n is divisible by any number other than 1 and itself, it's not prime
//     }
//   }
//   return true; // If no factor was found, it's prime
// });
// console.log(arr1);


// const arr = [1,4,2,6,8,9,11,15,3,5]
// let res = arr.filter((x)=>{
//   if(x<=1)return false;
//   for(let i=2;i< x ;i++){
//     if(x%i===0){
//       return false
//     }
//   }
//   return true
// })
// console.log(res);


// let res = arr.filter((x)=>{
//     if(x<=1)return false
//     for(let i=2;i<x;i++){
//         if(x%i==0){
//             return false
//         }
//     }
//     return true
// })
// console.log(res);



// let res = arr.filter((x)=>{
//     if(x<=1)return false
//        for(let i = 2 ;i < x;i++){
//           if(x%2==0){
//             return false
//           }
//        }
//        return true
// })
// console.log(res);

// let result = arr.filter((x)=>{
//     if(x<=1)return false
//     for(let i =2 ;i< x;i++){
//         if(x%2==0){
//             return false
//         }
//     }
//     return true
// })
// console.log(result);


// const arr = [12,1,5,4,7,8,9,4]

// let result = arr.filter((x)=>{
//     if(x<=1)return false
//     for(let i = 2;i< x;i++){
//         if(x%2==0){
//             return false
//         }
//     }
//     return true
// })
// console.log(result);

// let result = arr.filter((x)=>{
//     if(x<=1)return false
//     for(let i = 2 ;i<x;i++){
//         if(x%2==0){
//             return false
//         }
//     }
//     return true
// })
// console.log(result);

// function isPrime(number) {
//     if (number <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(number); i++)
//         if (number % i === 0) return false;
//     return true;
// }

// // Example usage:
// const numberToCheck = 17;
// console.log(isPrime(numberToCheck) ? `${numberToCheck} is a prime number.` : `${numberToCheck} is not a prime number.`);



// const arr = [12,1,5,4,7,8,9,4]
// let res = arr.filter((x)=>{
//     if(x<=1)return false
//     for(let i =2 ;i<x;i++){
//         if(x%2==0){
//             return false
//         }
//     }
//     return true
// })
// console.log(res);

// let res = arr.filter((x)=>{
//     if(x<=1)return false
//     for(let i=2;i<x;i++){
//         if(x%2==0){
//             return false
//         }
//     }
//     return true
// })
// console.log(res);


// function isprime(x){
//     if(x<=1)return false
//     for(let i =2 ;i<=Math.sqrt(x);i++){
//         if(x%2===0)  return false
          
//         return true
//     }
// }
// console.log(isprime(5)?"prime":"notprime");


// function prime(x){
//     if(x<=1)return false
//     for(let i = 2;i<Math.sqrt(x);i++){
//         if(x%2===0)return false
//         return true
//     }
// }
// console.log(prime(1)?"prime":"not a prime number");
// function checkprime(x){
//     if(x<=1)return false
//     for(let i=2;i<=Math.sqrt(x);i++){
//         if(x%i===0)return false
       
//     }
//     return true
// }
// console.log(checkprime(100)?"prime":"not prime");
// function prime(x){
//     if(x<=1)return false
//     for(let i=2;i<Math.sqrt(x);i++){
//         if(x%2===0)return false
//         return true
//     }
// }
// const arr = [12,1,5,4,7,8,9,4]
// let res = arr.filter((x)=>{
//     if(x<=1)return false
//       for(let i =2;i<arr.length;i++){
//         if(x%2==0){
//             return false
//         }
//       }
//       return true
// })
// console.log(res);
// function prime(x){
//     if(x<=1)return false
//     for(let i = 2;i<Math.sqrt(x);i++){
//         if(x%2===0)return false
//         return true
//     }
// }
// console.log(prime(2)?"prime":"notprime");
// const arr = [12,1,5,4,7,8,9,4]
// let res = arr.filter((x) => {
//     if (x <= 1) return false; 
//     for (let i = 2; i <= Math.sqrt(x); i++) { 
//         if (x % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// });
// console.log(res);

const arr = [12,1,5,4,7,8,9,4,13,13]
let res = arr.filter((x)=>{
    if(x<=1)return false
    for(let i = 2 ;i<=Math.sqrt(x);i++){
        if(x%i==0){
            return false
        }
    }
    return true
})
console.log(res);

// let res = arr.filter((x)=>{
//     if(x<=1)return false
//     for(let i = 2 ;i<=Math.sqrt(x);i++){
//         if(x%i==0){
//             return false
//         }
//     }
//     return true
// })
// console.log(res);

// let res = arr.filter((x)=>{
//     if(x<=1)return false;
//     for(let i = 2 ;i<=Math.sqrt(x);i++){
//         if(x%i===0){
//             return false
//         }
//     }
//     return true
// });
// console.log(res);


// let res = arr.filter((x)=>{
//     if(x<=1)return false
//     for(let i = 2 ;i<=Math.sqrt(x);i++){
//         if(x%i===0){
//             return false
//         }
//     }
//     return true
// })
// console.log(res);



// const array = [-1, -2, -3, 4, 5, 6, 7, null, 10, 67, undefined, -56, 0, 7, 89, 0, "king avinadh", () => {}];
// let primes = [];
// function isPrime(num) {
//     if (num <= 1) return false; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false; 
//     }
//     return true; 
// }
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number' && isPrime(array[i])) {
//         primes.push(array[i]);
//     }
// }
// console.log(primes);




// function test(){
//     let arr=[]
//     for(let i=0;i<=100;i++){
//         if(i%10!==0 && i%2==0){
//              arr.push(i) ;
//         }   
//     }
//     return arr
// }

// const out=test();
// console.log(out);




const array = [-1, -2, -3, 4, 5, 6, 7, null, 10, 67, undefined, -56, 0, 7, 89, 0, "king avinadh", () => {}];
// let sum = 0
// for(let i = 0 ; i<array.length;i++){
//     if(typeof array[i]==="number"&&array[i]>0){
//         sum+=array[i]
//     }
// }
// console.log(sum);

