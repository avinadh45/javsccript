// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = [];

// Loop through each element in the original array
// for (let i = 0; i < array.length; i++) {
//   // Check if the current element is not already present in uniqueArray
//   if (uniqueArray.indexOf(array[i]) === -1) {
//     // If not present, add the current element to uniqueArray
//     uniqueArray.push(array[i]);
//   }
// }

// // // Print the uniqueArray
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]



// const array = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArray = [...new Set(array)];

// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// const uniquearr=[...new Set(array)]
// console.log(uniquearr);

// const result = [...new Set(array)];
// console.log(result);


// const result = [...new Set(array)]

// const result = [...new Set(array)]
// console.log(result);




// const array  = [21,4,6,12,4,5,9]

// var result = [...new Set(array)]
// console.log(result)
// var result = [...new Set(array)]
// console.log(result);

// var result = [...new Set(array)]
// console.log(result);

// var result = [...new Set(array)]
// console.log(result);

// var result = [...new Set(array)]
// console.log(result);

// const array  = [21,21,4,4,6,6,12,4,5,9]

// let res = [...new Set(array)]
// console.log(res);

// let res = [...new Set(array)]
// console.log(res);
// const array = [1, 2, 2, 3, 4, 4, 5, 6, 6 ,7];
// //  let bad = []
// // let good = []
// for(let i=0;i<array.length;i++){
//     for(let j = i+1 ; j<array.length;j++){
//         if(array[i]==array[j]){
//             array.splice(i,1)
//             array.splice(i,1)
//             // i--
//         }
//     }
// }
// console.log(array)
//   console.log(bad);
// console.log(array)
// const array = [1, 2, 2, 3, 4, 4, 5];
// let bad = [];
// for(let i = 0; i < array.length; i++) {
//     for(let j = i + 1; j < array.length; j++) {
//         if(array[i] !== array[j]) {
//             if(!bad.includes(array[i])) { // Check if the number is not already in the bad array
//                 bad.push(array[i]);
//             }
//         }
//     }
// }
// console.log(bad);
// const array = [1, 2, 2, 3, 4, 4, 5];
// let bad = []
// // let good = []
// for(let i=0;i<array.length;i++){
//     if(array.indexOf(array[i])== array.lastIndexOf(array[i])){
//         bad.push(array[i])
//     }
// }
// console.log(bad);


// let array = [1,1,5,8,5,6,9,13,9,5]


// for(let i = 0;i<array.length;i++){
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]===array[j]){
//            array.splice(i,1)
//            array.splice(i,1)
//         }
//     }
// }
// console.log(array);


// let array = [1,3,3,1,2]

// let uniqueNumbers = array.filter((nums)=>{
//     return array.indexOf(nums)===array.lastIndexOf(nums)
// })
// console.log(uniqueNumbers);

// function odi(){

//     for(let i =0;i<array.length;i++){
//         if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
//             return array[i]
//         }
//     }
// }
// console.log(odi())



// let uniqueNumbers = array.filter(num => {
//     return array.indexOf(num) === array.lastIndexOf(num);
// });
// console.log(uniqueNumbers);


// let array = [1, 1, 5, 8, 5, 6, 9, 13, 9, 5];
// let uniqueNumbers = [];


// for (let i = 0; i < array.length; i++) {
//     let isUnique = true;

    
//     for (let j = 0; j < array.length; j++) {
//         if (i !== j && array[i] === array[j]) {
//             isUnique = false;
//             break; 
//         }
//     }

  
//     if (isUnique) {
//         uniqueNumbers.push(array[i]);
//     }
// }

// console.log(uniqueNumbers); 


// let uniq = []
// for(let i =  0 ;i<array.length;i++){
//    let  isUnique = true
//    for(let  j = 0 ;j<array.length;j++){
//     if(i!=j&&array[i]===array[j]){
//         isUnique false;
//         break;
//     }
//    }
//    if(isUnique)
// }



// // let array = [1,5,8,1,8,6,2,5,2,100]
// let uniqueNumbers = []
// for(let i = 0 ;i<array.length;i++){
//     let isUnique = true
//     for(let j = 0 ;j<array.length;j++){
//         if(i!=j&&array[i]===array[j]){
//             isUnique = false;
//             break;
//         }
//     }
//     if(isUnique){
//         uniqueNumbers.push(array[i])
//     }
// }
// let res = Math.max(...uniqueNumbers)
// console.log(res);

// console.log(uniqueNumbers);

// let array = [1,5,8,1,8,6,2,5,2,100]
// let uniqueArray = []
// for(let i = 0 ; i<array.length; i++){
//    let isuniqe = true
//    for(let j = 0; j<array.length; j++){
//     if(i!=j&&array[i]===array[j]){
//         isuniqe = false
//         break;
//     }
//    }
//    if(isuniqe){
//     uniqueArray.push(array[i])
//    }
// }
// let res = Math.max(...uniqueArray)
// console.log(res);
// console.log(uniqueArray);


// let array = [1,5,8,1,8,6,2,5,2,100]
// let uniquenumber = []
// for(let i = 0;i<array.length;i++){
//     let isuniqe=true
//     for(let j = 0;j<array.length;j++){
//         if(i!=j&&array[i]===array[j]){
//             isuniqe=false
//             break;
//         }
//     }
//     if(isuniqe){
//         uniquenumber.push(array[i])
//     }
// }
// console.log(uniquenumber);