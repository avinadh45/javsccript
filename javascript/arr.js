// empty an array

// const arr = [21,43,65,32,54,]
// //  arr.length=0
// //  console.log(arr);






// const arr1 = [21,43,5,76,89]
//  arr1.length=0
// //  console.log(arr1);


// x=56
// y=78
// h=x+y
// console.log(h);



// const arr1 = [32,65,98,12,54]
// const arr2 = [45,54,1,78,4,]
// let sumarr=[];

// for(let i=0;i<arr1.length;i++){
//     sumarr.push(arr1[i]+arr2[i])
// }
// console.log(sumarr);

//  const arr71= [[[[[[[[[[20],[10],[10],[2],[3],10],30,40,70,[40,50,30],[30]]]]]]]]]


//  let result = arr71.flat(Infinity).reduce((acc,cur)=>{
//     acc = acc+cur
//     return acc
//  })
//  console.log(result);


// var x = 10;
// function foo() {
//    console.log(x);
//    var x = 20;
// }
// foo();




function add(obj){
    let sum = 0
   for(let i in obj){
    if(typeof obj[i]==="object"){
        sum +=add(obj[i])
    }else{
       sum += obj[i]
    }
   }
   return sum
}

let obj =  { a :2 , b:{c : { d : 5}}}
let sum = add(obj);
console.log(sum);


function add(obj){
    let sum = 0
   for(let i in obj){
    if(typeof obj[i]==="object"){
        sum +=add(obj[i])
    }else{
       sum += obj[i]
    }
   }
   return sum
}
// let sum = 0;

// // Sum the value of `a`
// sum += obj.a;

// // Traverse into `b` object
// let b = obj.b;

// // Traverse into `c` object inside `b`
// let c = b.c;

// // Sum the value of `d` inside `c`
// sum += c.d;

// console.log(sum);