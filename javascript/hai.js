// const users = [
//     { firstName: "Alok", lastName: "Raj", age: 23 },
//     { firstName: "Ashish", lastName: "Kumar", age: 29 },
//     { firstName: "Ankit", lastName: "Roy", age: 29 },
//     { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
//     ];

//     let jog=users.filter((a)=>a.age<30).map((a)=>a.firstName)
//     console.log(jog);

//     const users = [
//     { name: 'John', age: 25 },
//      { name: 'Alice', age: 10 },
//    { name: 'Bob', age: 56 },
// {name:'abin',age:17}
//    ];

//    let jomi=users.filter((a)=>a.age>18).map((a)=>a.name)
//    var [hamsa,jom]=jomi
//    console.log(hamsa,jom);


// const array1 = [1, 2, 3, 4, 5, 2, 4, 5, 1, 7, 9, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

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
const array1 = [1, 2, 3, 4, 5, 2, 4, 5, 1, 7, 9, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

let countMap = {};
let maxCount = 0;
let mostRepeatedValue;

for (let i = 0; i < array1.length; i++) {
    let num = array1[i];
    countMap[num] = (countMap[num] || 0) + 1;
    if (countMap[num] > maxCount) {
        maxCount = countMap[num];
        mostRepeatedValue = num;
    }
}

console.log(`${mostRepeatedValue} repeated ${maxCount} times`);


// let ma = {}
// let max = 0
// let repeated
// for(let i=0;i<array1.length;i++){
//     let nums =array1[i]
//     ma[nums]=(ma[nums]||0)+1
//     if(ma[nums]>max)
// }
