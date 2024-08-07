// const arr = [1, 2, 3, 2, 4, 1, 5, 2];
// const frequency = {};

// arr.forEach(element => {
//     frequency[element] = (frequency[element] || 0) + 1;
// });

// console.log(frequency);




// const arr = [1, 2, 3, 2, 4, 1, 5, 2];
// const frequency = {};

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (frequency[element]) {
//         frequency[element]++;
//     } else {
//         frequency[element] = 1;
//     }
// }

// console.log(frequency);




// const arr = [1, 2, 3, 2, 4, 1, 5, 2];

// const frequency = arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {});

// console.log(frequency);



// const arr = [1, 2, 3, 2, 4, 1, 5, 2];

// const frequency = {};

// arr.map(element => {
//     frequency[element] = (frequency[element] || 0) + 1;
// });

// console.log(frequency);


// const array = [21,32,5,3,21,6,7,1,1,32]
// const frequency={}
// array.map(element => {
//     frequency[element] = (frequency[element] || 0)+1;

// })

// console.log(frequency);



// const array = [1,1,2,2,3,3,4,4,]
// const fre = {}
// array.forEach(Ele => {
//     fre[Ele] = (fre[Ele] || 0 )+1
// })
// console.log(fre);

// const fre = {}
//  array.forEach((ele)=>{
//     fre[ele]=(fre[ele]||0)+1
// })
// console.log(fre);

// const fre = {}
// array.forEach((ele)=>{
//     fre[ele]=(fre[ele]||0)+1
// })
// console.log(fre);

// const fre = {}
// const result = array.forEach((ele)=>{
//     fre[ele]=(fre[ele]||0)+1
// })
// console.log(fre);

// const array = [1,1,2,2,3,3,4,4,]
// let res = array.reduce((acc,cur)=>{
//     if(acc[cur]){
//         acc[cur]++
//     }else{
//         acc[cur]=1
//     }
//     return acc
// },{})
// console.log(res);

// const res = array.reduce((acc,cur)=>{
//     if(acc[cur]){
//         acc[cur]++
//     }else{
//         acc[cur]=1
//     }
//     return acc
// },{})
// console.log(res);

let str = "thisss"
let max = 0 
let maxxtring = ''
for(let i = 0 ;i<str.length;i++){
  let  count = 1
    for(let j = i+1 ;j<str.length;j++){
        if(str[i]===str[j]){
            count++
        }
    }
    if(count>max){
        max = count
        maxxtring = str[i]
    }
}
console.log(maxxtring);