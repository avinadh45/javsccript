
// const arr=[8,2,6,9,7,6,1]


// // let reult=arr.slice(1,4,)
// // console.log(reult)
// const res=arr.splice(1,4)
// console.log(res);

// let result=arr.slice(2,6)
// console.log(result);

// const fruit=['apple','orange','banna','painapple','garpe']

// let result=fruit.splice(2,0,'mango','chaka')
// console.log(result);
// console.log(fruit);


// const fruits=['mango','pazham','chaka','coconut','kolli']

// let res=fruits.splice(2,3,'paraka','mulak')

// console.log(res);
// console.log(fruits);


// const fruit = ['mango','apple','elephant','lion']

// const result = fruit.splice(1,2,'cow','tree')
// console.log(result);
// console.log(fruit);


// const fruit = ['mango', 'apple', 'elephant', 'lion'];

// const result = fruit.splice(1, 2, 'orange', 'banana');
// console.log(result); // Outputs the removed elements: ['apple', 'elephant']
// console.log(fruit); // Outputs the modified array: ['mango', 'orange', 'banana', 'lion']





const arr1 = ["akhildas","avinadh","jOElhuhijhu","zzzz","xxxx","yyyy"]
let greater = arr1[0]
arr1.forEach((ele)=>{
if(greater.length < ele.split('').length){
    greater = ele
}
})

console.log(greater)