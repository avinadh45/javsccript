// //       regex      //
// const arr = ["akhildas","avinadh","jOEl","zzzz","xxxx","yyyy"]
// const result = arr.filter((x)=>{
//   return /[aeiuo]/i.test(x)
// })
// console.log(result);
// // ---------------------------------------------------------------------//
// // Math.ceil
// // maath.floor

const { resolve } = require("promise")

// const { resolve, reject } = require("promise")

// let number = 2.33
// let odi=Math.ceil(number)

// console.log(odi);



// //-------------------- sum of same index **------------------------------//


// let ar= [1,2,3,4,5,6]
// let ara = [1,2,3,4,5,6]

// let sumArray = ar.map((value, index) => value + ara[index]);
// let sumarr= ar.map((value ,index)=>{
//   return [value,ara[index]]
// })
// console.log(sumarr);

// // --------------------------

// let sumarr = [];

// for (let i = 0; i < ar.length; i++) {
//   sumarr.push(ar[i] + ara[i]);
// }

// console.log(sumarr);




// //-------------------------largest------------------------------------//

//  const array=[100,2,3,4,5,6,7,8,9,10,99]
// const res = array.reduce((acc,cur)=>{
//   return acc>cur?acc:cur
// })
// console.log(res);
// const res = array.reduce((acc,curr)=>{
//   return acc>curr?acc:curr
// })
// console.log(res);



// const resu = Math.max(...array)
//  console.log(resu);


// //-----------------------------count-----------------------------------//

// const array1=[1,2,3,4,5,2,4,5,1,7,9,1,1,1,2,2,2,2,2,2,2,2,2,2] ;
//   var count =0;
//   var max=0;
//   var value =0;

//     for(let i=0;i<array1.length;i++){
//         count=1
//         for(let j=i+1;j<array.length;j++){
//             if(array[i]==array[j]){
//                 count++;
//             }
//         }
//          if(count>max){
//             max=count;
//             value=array[i]
//          }
//     }
//      console.log(${value} repeated ${max} times)


// // -------

//  const intArr= [1,2,3,4,1,2,3]

//  let fre = {}
//  for(let i of intArr){
//   if(fre[i]){
//     fre[i]++
//   }else{
//     fre[i]=1
//   }
//  }
//  console.log(fre);

//  let fre = {}
//  for(let i of intArr){
//   if(fre[i]){
//     fre[i]++
//   }else{
//     fre[i] = 1
//   }
//  }
//  console.log(fre);


// const elem = array1.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
//   },{});
//   // console.log(elem);


//   const doge = intArr.reduce((acc,curr)=>{
//     acc[curr]= (acc[curr]||0)+1
//     return acc
//   },{})

//  console.log(doge);
//   /////////////////////////////////////////////////////

//   function freq(arr){

//     const resArr=arr.reduce((acc,curr)=>{
//        acc[curr]= (acc[curr]||0)+1
       
//       return acc
//     },{})
//     // console.log(resArr)


//   }
//   // freq(intArr)


// // -----------------sum of objects-----------------






// function add(obj){
//   let sum = 0 
//   for(let i in obj){
//     if( typeof obj[i]==="object"){
//       sum +=add(obj[i])
//     }else{
//       sum+=obj[i]
//     }
//   }
//   return sum
// }
// let obj =  { a :2 , b:{c : { d : 5}}}
// let sum = add(obj)

// console.log(sum);
// let sum1=0
// let sum2=0
// let sum3=0
// let sum4=0
// sum1 = 
// console.log(a+b);




// // -------------------flat------------------------

const arr71= [[[[[[[[[[20],[10],[10],[2],[3],10],30,40,70,[40,50,30],[30]]]]]]]]]

// let array = arr71.flat(Infinity)
// let ans  = array.reduce((acc,cur)=>{
//   return acc+cur
// })
// console.log(ans);
// console.log(array);

// const r = arr71.flat(Infinity)
// console.log(r);

// const sumer = r.reduce((acc,curr)=>{
  
//   return acc+curr
// })
// // console.log(sumer);

// // ------------

// const orr=[[{a:1,b:3}]]

// let ans = orr.reduce((acc,cur)=>{
//   for(let i of cur){
//     for(let j in i){
//       acc = acc+i[j]
//     }
//   }
//   return acc
// },0)
// console.log(ans);

// // console.log(r1);
// let m=orr[0][0].a
// let h=orr[0][0].b
// console.log(h+m);



// // ---------------------sum-----------------------------

//  const ori= [10,30,30,10,50]
// let ans = ori.reduce((acc,cur)=>{
//   return acc=acc+cur
// })
// console.log(ans);
// let sum=0
// for(let i=0;i<ori.length;i++){

//     sum=sum+ori[i]
//   }
//  console.log(sum);


// // ----------------------------

//  const arra1= [{a:10,b:20},{c:30,d:40},{mf:4}]
//  let ans = arra1.reduce((acc,cur)=>{
//   for(let i in cur){
//     acc=acc+cur[i]
//   }
//   return acc
//  },0)
//  console.log(ans);
// let ans = arra1.reduce((acc,cur)=>{
//   for(let i in cur ){
//     acc = acc+cur[i]
//   }
//   return acc
// },0)
// console.log(ans);
// let sum = 0 
// for(let i in arra1){
//  let obj = arra1[i];
//  for(let j in obj){
//   if(typeof obj[j]==="number"){
//     sum+=obj[j]
//   }
 
//  }
// }
// console.log(sum);

// let res = arra1.reduce((acc,cur)=>{
//  for(let i in cur){
//   acc=acc+cur[i]
//  }
//  return acc
// },0)
// console.log(res);

// const ress = arra1.reduce((acc,current)=>{
//   for (i in current){
//     acc= acc+ current[i]
//   }
//   return acc
// },0)
//  console.log(ress);   

// const adii= arra1.reduce((accuu,curr)=>{
//   for(i in curr){
//     accuu=accuu+curr[i]
//   }
// return accuu

// },0)
// // console.log(adii);
// // -------------------------------
// const arra2y = [1, 2, 3, 4];
// const adi = arra2y.flatMap((num)=>{
//   return num+2
// });
// // console.log(adi); 

// const users = [
//   { firstName: "Alok", lastName: "Raj", age: 23 },
//   { firstName: "Ashish", lastName: "Kumar", age: 29 },
//   { firstName: "Ankit", lastName: "Roy", age: 29 },
//   { firstName: "Pranav", lastName: "Mukherjee", age:50},
// ];

// const re = users.reduce((acc,curr)=>{
//   return acc.age>curr.age?acc:curr
// },users[0])
// const a= re.lastName
// console.log(re);


// const de = users.reduce((acc, curr) => {
//   return curr.age < acc.age ? curr : acc;
// }, users[0]);

// // console.log(de);

// const result11 = users.filter((a)=>a.age>30).map((a)=>a.firstName)
// console.log(result11);

// const doge1 = users.filter((a)=>{
//   if(a.age<30){
//     return a
//   }
// })
// const ree= doge1.map((x)=>{
// return x.firstName&&x.lastName
// })
// // console.log(doge1);
// // console.log(ree);





// const array = [1,2,3,4,5,6,7,8,9,0]

// const result = array.reduce((acc,curr)=>{
//     return acc>curr?curr:acc
// })
// console.log(result);



// // const obj = {
// //     name: "joel",
// //     age: 18,
// //     place:{
// //         location:"cheraneloor",
// //         pincode:682034,
// //         ward:2,
// //         HouseName:"Valiyaparambil",
// //     }
// // }


// // function od(){

// // const {name,age} = obj
// // console.log(name,age);
// // }

// // od()
// let odi= "joel" 
// const odii=odi.split('').reverse().join("")
// console.log(odii);


// for(let i=odii.length;i>=0;i--){
//     arr.push(odii[i])
// }
// arr.shift()
// console.log(arr)

// const ar = ["apple","orange","banana","grapes"]
// const re = ar.map((x)=>{
//     return x.toUpperCase().charAt()+x.slice(1)
// })
// console.log(re);
// // ar = ["apple","orange","banana","grapes"]
// // const re = ar.map((x)=>{
// //     return x.toUpperCase().charAt()+x.slice(1)
// // })
// console.log(re+slice(1));

// const nums = [0,2,1,5,3,4]

// // const result = nums.map((a)=>{
//     // return nums[a]
// // })
// // console.log(result);

// const numser =[{a:10},{b:120},{c:300}]

// const result = numser.reduce((acc,curr)=>{
//     for(i in curr){
//         return acc=acc+curr[i]
        
//     }

// },0)
// // console.log(result);

// const doge = [1,2,3,4,5,6,7,8,9]
// doge.splice(3,1)
// // const resul =doge.slice(2,4)

// // doge.splice(0,0,"Joel")
// console.log(doge);
// // console.log(resul);


// let = 'hello'

// // jgnnq
// let ="ddfhgswsswh"
// // 2d1f2h1g3s


// const arr = ["akhildas","avinadh","jOEl","zzzz","xxxx","yyyy"]
//  console.log(arr[0].split('').length)


const arr1 = ["akhildas","avinadh","jOElhuhijhu","zzzz","xxxx","yyyy"]
let greater = arr1[0]
arr1.forEach((ele)=>{
if(greater.length < ele.split('').length){
    greater = ele
}
})

console.log(greater)



// const aw = ["akhildas", "avinadh", "jOElhuhijhu", "xaxa","zzzz", "xxxx"];
// const greater1 = aw.reduce((acc, curr) => {
//     return acc.length>curr.length?acc:curr
// },aw[0])
// // console.log(greater1);


// let xo="ddfhgswsswh"
// let newArr= xo.split('')
// // console.log(newArr)

// const reee = newArr.reduce((acc,curr)=>{
//     acc[curr]=(acc[curr]||0)+1
//     return acc
// },{})
// // console.log(reee);


//  const array1 = [21,32,54,56]
//  const array2 = [90,98,87,67]

//  let ans = array1.concat(...array2)
// let res = ans.sort((a,b)=> a-b)
// console.log(res);
//   const array3 = [...array1,...array2]
//   const result = array3.sort((a,b)=>{
//     return a-b
//   }
//   )
//   console.log(result);


  
//  const array1 = [21,32,54,56]
//  const array2 = [90,98,87,67]
//   const array3 = [...array1,...array2]
   
//   const result = array3.map((a,b)=>{
//     return s=a>b;
//   })
//   console.log(result);


// const array1 = [1, 2, 3, 4, 5, 2, 4, 5, 1, 7, 9, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
// var count = 0;
// var max = 0;
// var value = 0;

// for (let i = 0; i < array1.length; i++) {
//   count = 1;
//   for (let j = i + 1; j < array1.length; j++) {  // <-- Corrected array1.length
//     if (array1[i] == array1[j]) {
//       count++;
//     }
//   }
//   if (count > max) {
//     max = count;
//     value = array1[i];
//   }
// }

// console.log(`${value} repeated ${max} times`);

// var count = 0
// var max = 0
// var value = 0
// for (let i=0;i<array1.length;i++){
//     for(let j = i+1;j<array1.length;j++){
//         if(array1[i]==array1[j]){
//             count++
//         }
//     }
//     if(count > max){
//         max = count ; 
//         value = array1[i];
//     }
// }
// console.log(`${value} repeated ${max} times`);

// this is wrong

// const arr=['array','aafj','adsh']
// const siwt=arr.unshift('ajakak','asj');
// console.log(arr);




// var array = [4,3,7,2]


//  const obj = {"a":[1,2,3],"b":1,"c":5,"d":[10,20]};
// // let sum = 0
//  let ans  = []
//  for(let i in obj){
//    if(Array.isArray(obj[i])){
//     ans=ans.concat(obj[i])
//    }else{
//     ans.push(obj[i])
//    }
//  }
// let res = ans.reduce((acc,cur)=>{
//   acc = acc+cur
//   return acc
// },0)
// console.log(res);

// let ans= []
// // let sum = 0 
// for(let i in obj){
//    if(Array.isArray(obj[i])){
//     ans = ans.concat(obj[i])
//    }else{
//       ans.push(obj[i])
//    }
// }
// console.log(ans);
//  let sum = ans.reduce((acc,cur)=>{
//    return acc+cur
//  },0)
//  console.log(sum);
// function sumArrayValues(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     const value = obj[key];
//     if(Array.isArray(value)) {
//       sum += value.reduce((acc, curr) => acc + curr, 0);
//     }else {
//       sum +=value
//     }
//   }
//   return sum;
// }

// console.log(sumArrayValues(obj));


// var arr = [4, 3, 7, 2]
// let odd = []
// let evn = []
// for (let num of arr) {
//     if (num % 2 == 0) {
//         evn.push(num)
//     } else {
//         odd.push(num)
//     }
// }
// console.log(evn);
// console.log(odd);



//  let arat = [{apple:1},{jackfruit:2},{bannnana:10}]
//  let sum = arat.reduce((acc,cur)=>acc+Object.values(cur)[0],0)
//  let sum = arat.reduce((acc, obj) => acc + Object.values(obj)[0], 0);
//  let sum = 0 
 
//   for(let i in arat){
//   sum += arat[i]
//   }


  // console.log(sum);

//  let sum = 0
// for(let i of arat){
//   for(let j in i){
//     sum+=i[j]
//   }
// }
// console.log(sum);


//  let array = [{price:10},{price:12},{price:20}]
// let res = array.reduce((acc,cur)=>{
//   acc=acc+cur.price
//   return acc
// },0)
// console.log(res);

// let ans = array.reduce((acc,cur)=>{
//   acc=acc+cur.price
//   return acc
// },0)
// console.log(ans);
// let arr  = array.reduce((accu,curr)=>accu+ Object.values(array),0)
// console.log(arr);




//  const abc = [[2,4,56,7],[true],[100,34,70,90]]
// let sum = 0
//  for(let i of abc){
//   for(let j in i){
//     if(typeof i[j]==='number'){
//       sum+=i[j]
//     }
//   }
//  }
//  console.log(sum);

// let res = [].concat(...abc)
// let ans = res.reduce((acc,cur)=>{
//   if(typeof cur === "number"){
//     acc=acc+cur
//   }
//   return acc
// },0)
// console.log(ans);
//   const a = abc.reduce((accu,curr)=>{
//     return accu.concat(curr)
//   },[]);


// const flatarray = [].concat(...abc);

// let sum = 0 
// for(let i = 0 ;i<flatarray.length;i++){
//     if(typeof flatarray[i] ==="number"){
//         sum += flatarray[i]
//     }
// }
//   console.log(sum);



// const res = [].concat(...abc)
// let sum = 0 
// for(let i = 0 ; i<res.length;i++){
//     if(typeof res[i] === "number"){
//     sum +=res[i]
//     }
// }

// console.log(sum);

//  let a = "hiiii"
//  let res = a.split('').join('*')
//  console.log(res);




// const abc = [[2,4,56,7],[true],[100,34,70,90]]



// let res = [].concat(...abc)


//  let sum = 0 

// for(let i = 0 ;i<res.length;i++){

//     if(typeof res[i]==="number"){
//      sum += res[i]
//     }
// }

// console.log(sum);



//  let s= "leetcode"
//  let value = 0
//  let max = ''
//    for(let i = 0 ;i<s.length;i++){
//     let  count = 1
//     for(let j =i+1;j<s.length;j++){
//       if(s[i]===s[j]){
//         count++
//       }
//     }
//     if(count>max){
//       max = count
//       value = s[i]
//      }
//    }  
//    console.log(`most reperting value ${value}is ${max}`);



//  let fre = {}

//  for(let i of s){
//   if(fre[i]){
//     fre[i]++
//   }else{
//     fre[i]=1
//   }
//  }
//  console.log(fre);


// const count = {};

// for(let i=0;i<s.length;i++){
// if(count[s[i]]){
//   count[s[i]]++;
// } else{ 
//   count[s[i]] = 1
// }
// }
//  console.log(count);
//  for(let j=0;j<s.length;j++){

// if(count[s[j]]==1){
//   console.log(j);
//   break;
//  }
//   }



// for(let i = 0 ; i<s.length;i++){
//     if(count[s[i]]){
//         count[s[i]]++ 
//     }else{
//         count[s[i]] = 1
//     }
// }

// console.log(count);





// function abc(obj1,obj2){
// const array =[]
// for(let value in d1){
//     for(let value1 in d2){
//         if(obj1[value] ===obj2[value1]){
//            array.push(obj1[value])
//         }
//         }
//     }
//     return   array;
// }
// console.log( abc(d1,d2))


let d1 = {'a': 1, 'b': 2, 'c': 3, 'g':9}
let d2 = {'b': 2, 'c': 4, 'd': 5, 'g':9}
let arru = []
// for (let key of Object.keys(d1)) {
//     if (d2[key] === d1[key]) {
//         arru.push(d1[key]);
//     }
// }
// console.log(arru);
// for(let i of Object.keys(d1)){
//   if(d2[i]===d1[i]){
//     arru.push(d1[i])
//   }
// }

// console.log(arru);
// let array = {a:10,b:30}
//  let sum = 0 
//  for(let i in array){
//      sum += array[i]
//  }
//  console.log(sum);
// let res = array.reduce((acc,cur)=>{{
//     return acc = a
// }})
 

// let z = 'leetcode'
//  let z = 'leetcode'
// let count = 1
// for(let i=0; i<z.length; i++){
//     if(z[i]==z[i+1]){
//         console.log(z[i]);
//         count++
//     }
// }
// console.log(count);
// for(let i=0; i<z.length; i++){
//     if(z[i]==z[i+1]){
//         console.log(z[i]);
//     }
// }



// -----------------------------------------------------------------promise async await -----------------------------------------------


// function add(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("resolved")
//     }, 1000);
//   })
// }
// async function go(){
//   console.log("this is here");
//   let res = await add()
//     console.log(res);
// }
// go()


// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data fetched successfully!");
//       }, 2000);
//     });
//   }
  
  
//   async function getData() {
//     try {
//       console.log("Fetching data...");
//       const result = await fetchData();
//       console.log(result); 
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
  
//   getData();



// function data(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve("data resolved")
//         },2000)
//     })
// }
//  async function getdata(){
//     try {
//         console.log("data working");
//         const result = await data();
//         console.log(result);
//     } catch (error) {
//          console.error("error in fecthing");
//     }
// }
  
// getdata()




// function data(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//               resolve("data sucess from the promise")
//         },2000)
//     })
// }

//  async function here(){
//     console.log("hi from the function");
//     const result = await data()
//     console.log(result);
//  }

//  here()


// const array = [-1,-2,-3,4,5,6,7,null,10,67,undefined,-56,0,7,89,0,"king avinadh", ()=>{}]
// let jt=[]
// function isPrime(array)
// {
// for(let i=2;i<=Math.sqrt(array[i]);i++)
//     {
//         console.log(array[i],"hghgf");
//         if(array[i]%i==0)
//             {
             
//             }
//             else{
//                 jt.push(array[i])
//             }
//     }
//     console.log(jt);
// }
// isPrime(array)

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

// function isprime(num){
//   if(num<=1)return false
//   for(let i = 2 ;i<=Math.sqrt(num);i++){
//     if(num%i===0)return false
//   }
//   return true
// }
// for(let i = 0;i< array.length;i++){
//   if(typeof array[i]==="number"&&isprime(array[i])){
//     primes.push(array[i])
//   }
// }
// console.log(primes);

//  const abc = [[2,4,56,7],[true],[100,34,70,90]]
 

// let res = [].concat(...abc)
//  let sum = 0 
// for(let i = 0 ;i<res.length;i++){
//     if(typeof res[i]==="number"){
//      sum += res[i]
//    }
// }


// console.log(sum);
// let res = [].concat(...abc)
// let sum = 0
// for(let i = 0 ;i<res.length;i++){
//     if(typeof res[i]==="number"){
//         sum += res[i]
//     }
// }
// console.log(sum);

// var arrays = [["1", "2", "3"],[true],[4, 5, 6] ];

// let res = [].concat(...arrays)
// console.log(res);
// let sum = 0 
// for(let i = 0 ;i<res.length;i++){
//     if(typeof res[i]==="number"){
//         sum+=res[i]
//     }
   
// }
// console.log(sum);
  
//   let re = arrays.reduce((acc,cur)=>{
//     return acc.concat(cur)
//   })
//   console.log(re);

// let res = [].concat(...arrays)
// console.log(res);

// let res = arrays.reduce((acc,cur)=>{
//     return acc.concat(cur)
// })
// console.log(res);



// let b=[[1,2,3,[[7,8,9]],[[5,4,6]]]]
// let res = b.flat(Infinity)
// // console.log(res);
//  let sum = 0 
//  for(let i = 0 ;i<res.length;i++){
//     sum+=res[i]
//  }
//  console.log(sum);


// function data(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           console.log("data");
//         },2000)
//     })
// }
//  async function getData(){
//    console.log("hiiii");
//     let res = await data()
// }

// getData()


// const users = [
//     { firstName: "Alok", lastName: "Raj", age: 23 },
//     { firstName: "Ashish", lastName: "Kumar", age: 29 },
//     { firstName: "Ankit", lastName: "Roy", age: 29 },
//     { firstName: "Pranav", lastName: "Mukherjee", age:50},
//   ];

//   let result  = users.filter((x)=>x.age<25).map((x)=>x.firstName)`

//   console.log(result);

// const orr=[[{a:1,b:3}]]
// let sum = 0;

// orr.forEach(subArray => {
//   subArray.forEach(obj => {
//     for (let key in obj) {
//       sum += obj[key];
//     }
//   });
// });

// console.log(sum);

// let m = orr[0][0].a
// let b = orr[0][0].b
// console.log(m+b);

//  let obj =  { a :2 , b:{c : { d : 5}}}
// let sum = 0 
// for(let i of Object.keys)





// const obj = {"a":[1,2,3],"b":1,"c":5,"d":[10,20]};

// function sumArrayValues(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     const value = obj[key];
//     if(Array.isArray(value)) {
//       sum += value.reduce((acc, curr) => acc + curr, 0);
//     }else {
//       sum +=value
//     }
//   }
//   return sum;
// }

  // console.log(sumArrayValues(obj));
  // const obj = {"a":[1,2,3],"b":1,"c":5,"d":[10,20]};
  // let sum = 0;
  // for (let key in obj) {
  //   const value = obj[key];
  //   if (Array.isArray(value)) {
  //     for (let num of value) {
  //       sum += num; 
  //     }
  //   } else {
  //     sum += value;
  //   }
  // }

  // console.log(sum); 

  // for(let i in  obj){
  //   const val = obj[i]
  //   if(Array.isArray(val)){
  //     for(j of val){
  //        sum +=j
  //     }
  //   }else{
  //     sum+=val
  //   }
  // }
  // console.log(sum);

//   const arat = [{ apple: 1 }, { mango: 2 }, { green: 10 }];
// let sum = 0 
// arat.forEach(obj=>{
//   for(let i in obj){
//     sum +=obj[i]
//   }
// })
// console.log(sum);
//   let sum = 0
//   arat.forEach(obj => {
//     for (let key in obj) {
//       sum += obj[key];
//     }
//   });
//   console.log(sum);
// // let sum = 0 
//   arat.forEach(obj=>{
//     for(let i in obj){
//       sum+=obj[i]
//     }
//   })
  // console.log(sum);



// let d1 = {'a': 1, 'b': 2, 'c': 3, 'g':9}
// let d2 = {'b': 2, 'c': 4, 'd': 5, 'g':9}

// let sum1 = 0 
// let sum2 = 0
// let sum3 = 0 
// for(let i in d1){
//   sum1+=d1[i]
// }
// for(let j in d2){
//   sum2+=d2[j]
// }
// sum3 = sum1+sum2
// console.log(sum3);

// let s= "leetcode"
// let fre = []
// for(let i of s){
//   if(fre[i]){
//     fre[i]++
//   }else{
//     fre[i]=1
//   }
// }
// // console.log(fre);

// // let ar= [1,2,3,4,5,6]
// // let ara = [1,2,3,4,5,6]

// // let array = []
// for(let i  = 0 ;i<ar.length;i++){
//   array.push(ar[i]+ara[i])
// }
// console.log(array);
//  const obj = {"a":[1,2,3],"b":1,"c":5,"d":[10,20]};
//     let sum = 0 
//  let ans  = obj.flat()
//  console.log(ans);
//  for(let i of ans){
//   if(typeof ans[i]==="number"){
//       sum+=ans[i]
//   }
//  }
//  console.log(ans);

//  const obj = { "a": [1, 2, 3], "b": 1, "c": 5, "d": [10, 20] };
//  let ans = []
//  let sum = 0
//  for(let i in obj){
//   if(Array.isArray(obj[i])){
//     ans=ans.concat(obj[i])
//   }else{
//     ans.push(obj[i])
//   }
//  }
//   sum = ans.reduce((acc,cur)=>{
//     acc=acc+cur
//     return acc
//   },0)

//   console.log(sum);
// let ans = []
// let sum = 0 
// for(let i in obj){
//   if(Array.isArray(obj[i])){
//    ans= ans.concat(obj[i])
//   }else{
//     ans.push(obj[i])
//   }
// }
// sum = ans.reduce((acc,cur)=>{
//   return  acc+cur
//  },0)
//  let ans 
// console.log(sum);
// let sum = 0;
// let ans = [];
// for (let i in obj) {
//     if (Array.isArray(obj[i])) {
//         ans = ans.concat(obj[i]);
//     } else {
//         ans.push(obj[i]);
//     }
// }
// // console.log(ans); 
// sum = ans.reduce((acc, val) => acc + val, 0);
// console.log(sum);

// let array = [8,15,9,8,99]
// let sum = 0
// sum  = array.reduce((acc,cur)=>{
//   return acc+cur
// },0)
// console.log(sum);



// let arr = [{aa:10},{bb:20}]

// let sum  =  arr.reduce((acc,cur)=>{
//   for(let i in cur){
//       acc=acc+cur[i]
//   }
//   return acc
// },0)
// console.log(sum);


// let arr = [{aa:10},{aa:20}]
// let ans = arr.reduce((acc,cur)=>{
//   return acc=acc+cur.aa
// },0)
// console.log(ans);


// let array = [{price:10},{price:12},{price:20}]

// let ans = array.reduce((acc,cur)=>{
//   return acc+cur.price
// },0)
// console.log(ans);

// let array = [{apple:10},{mango:12},{price:20}]


// let sum = 0 
// array.forEach(a =>{
//   for(let i in a){
//     sum+=a[i]
//   }
// })
// console.log(sum);
 
  // const arat = [{ apple: 1 }, { mango: 2 }, { green: 10 }];
  // let sum = 0 
  // arat.forEach(obj => {
  //   for (let key in obj) {
  //     sum += obj[key];
  //   }
  // });
  // console.log(sum);


// const obj = { "a": [1, 2, 3], "b": 1, "c": 5, "d": [10, 20] };
// let ans  = []
// for(let i in obj){
//   if(Array.isArray(obj[i])){
//     ans=ans.concat(obj[i])
//   }else{
//     ans.push(obj[i])
//   }
// }
// let res = ans.reduce((acc,cur)=> acc=acc+cur ,0)
// console.log(res);

// for(let i in obj){
//   if(Array.isArray(obj[i])){
//     ans = ans.concat(obj[i])
//   }else{
//     ans.push(obj[i])
//   }
// }

// let res = ans.reduce((acc,cur)=>{
//   return acc=acc+cur
// },0)
// console.log(res);

//  const abc = [[2,4,56,7],[true],[100,34,70,90]]
//  let ans = abc.flat(Infinity)
//  let sum = 0 
//  for(let i of ans){
//   if(typeof i ==="number"){
//      sum+=i
//   }
//  }
//  console.log(ans);
// // 
// let ans = [].concat(...abc)
//  let ans  = [].concat(...abc)
//  let sum = 0 
//  for(let i of ans){
//    if(typeof ans[i] ==="number"){
//     sum+=ans[i]
//    }
//  }
//  console.log(sum);


//  let z = 'leetcode'
//  let fre = {}
//  for(let i of z){
//   if(fre[i]){
//     fre[i]++
//   }else{
//     fre[i]=1
//   }
//  }

//  let fre = {}

//  for(let i of z){
//   if(fre[i]){
//     fre[i]++
//   }else{
//     fre[i]=1
//   }
//  }
//  console.log(fre);

// let str = "avinadh"

// let ans = str.split("").join("*")
// console.log(ans);


// let array = [2,3,4,7,9]

// let ans = array.map((x)=>{
//   if(x%2===0){
//     console.log("even");
//   }else{
//     console.log("odd");
//   }
// })
// console.log(ans);


// setTimeout(()=>{
//   console.log("hi from setimout");
// },2000)





// let nums = 5
// let i = 0
// do{
//   console.log(i);
//   i++
// } while( i<=nums)
// let num = 5
// let i = 0 
// while(i<=5){
//   console.log(i);
// i++
// }

// let array = [12,6,4,5,10,8,15]
// let arr =[]
// let i=0
// while(i<array.length){
//     if((array[i]%2==0) && (array[i+1]%2==0)){
//      i++
// }else{
//      arr.push(array[i])
//      i++
// }
// }
// console.log(arr);



// let ad = [{a: 3}, {b: [10, 20]}, {c: 5}, {d: [20, 50]}];
// let sum = 0;

// ad.forEach(obj => {
//     for (let key in obj) {
//         if (Array.isArray(obj[key])) {
//             sum += obj[key].reduce((acc, val) => acc + val, 0);
//         } else {
//             sum += obj[key];
//         }
//     }
// });

// console.log(sum);


 // const obj = {"a":[1,2,3],"b":1,"c":5,"d":[10,20]};


  // let sum = 0;
  // for (let key in obj) {
  //   const value = obj[key];
  //   if (Array.isArray(value)) {
  //     for (let num of value) {
  //       sum += num; 
  //     }
  //   } else {
  //     sum += value;
  //   }
  // }

  // console.log(sum);



//   let array = [12,6,4,5,10,8,15]
// let arr =[]
// let i=0
// while(i<array.length){
//     if((array[i]%2==0) && (array[i+1]%2==0)){
//      i++
// }else{
//      arr.push(array[i])
//      i++
// }
// }
// console.log(arr);



// let str = "jehwuhjwgbwh"

// let count  = 0 
// let vow = "aeiou"

// for(let i = 0 ;i<str.length;i++){
//   if(vow.includes(str[i])){
//     count++
//   }
// }
// console.log(count);

// let array = [2,6,8,9]
// let sum = 0
// for(let i = 0 ;i<array.length;i++){
//   if(array[i]%3===0){
//    sum+=array[i]
//   }
// }
// console.log(sum);

// let str = "this is a word"
// let word = str.split(" ")
// for(let i = 0 ;i<word.length;i++){
//   word = word[i].split(" ").reverse().join(" ")
// }

// let reversed = word.join(" ")
// console.log(reversed);
// let str = "this is a word";
// let words = str.split(" "); 

// let reversedWords = words.map(word => word.split("").reverse().join(""));


// let reversedString = reversedWords.join(" ");

// console.log(reversedString); 


// let array = [10,15,100,17,5]
// let ans = array.reduce((acc,cur)=>{
//   if(cur%10===0){
//    if(cur>acc){
//     acc=cur
//    }
//    }
//    return acc
// })
// console.log(ans);