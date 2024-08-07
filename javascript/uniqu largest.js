//  const arr = [32,5,32,7,8,5,90,8,90]
//  var ar2 = [... new Set(arr)]
//  var result = ar2.reduce((acc,cur)=>{
//     if(acc<cur){
//         acc=cur
//     }
//     return acc
//  },ar2[0])
//  console.log(result);

// const arr=[2,2,2,2,24,5,6,7,8,24]
// var a=new Set(arr)
// console.log(a)
// var b=[...a].reduce((acc,cur)=>{
//      if(acc<cur)
//      {
//         return cur
//      }
//      else
//      return acc
// })
// console.log(b)



// const a=[2,3,4,2,5,6,1,6,61,61];
// var l=0;

// for(var i=0;i<a.length;i++)
// {
//     var count=0;
//     for(var j=0;j<a.length;j++)
//     {
//         if(a[i]===a[j])
//         {
//             count++;
//         }

//     }
//     if(count==1)
//     {
//         if(l<a[i])
//         {
//             l=a[i];
           
//         }

//     }
    
// }
// console.log("LARGEST:",l)


// const array = [21,21,4,5,45,54]
// var a = [...new Set(array)]
// console.log(a);
// var b = [...a].reduce((acc,cur)=>{
//     if(cur>acc){
//         acc=cur
     
//     }
// return acc

// },a[0])
// console.log(b);


// const array = [21, 21, 4, 5, 45, 54];
// var a = [...new Set(array)];
// console.log(a);
// var b = [...a].reduce((acc, cur) => {
//   if (cur > acc) {
//     acc = cur;
//   }
//   return acc;
// }, a[0]); // Initialize reduce with an initial value
// console.log(b);



// const array = [21,34,65,12,34,56,87]
// var a = [...new Set(array)]

// var result = [...a].reduce((acc,cur)=>{
//     if(cur>acc){
//         acc=cur
//     }
//     return acc
// },a[0])
// console.log(result);

// var a = [... new Set(array)]
// var b = [...a].reduce((acc,cur)=>{
//     if(cur>acc){
//         acc=cur
//     }
//     return acc
// },a[0])
// console.log(b);


// var  a = [...new Set(array)]
// console.log(a);
// var b = [...a].reduce((acc,cur)=>{
//     if(cur>acc){
//         acc = cur
//     }
//     return acc
// })
// console.log(b);

// var a= [...new Set(array)]
// console.log(a);
// var b = [...a].reduce((acc,cur)=>{
//     if(cur>acc){
//         cur = acc
//     }
//     return acc
// })
// console.log(b);

// const array = [21,34,65,12,34,56,87,87]

// let a = [...new Set(array)]
// // console.log(a);
// let r = [...a].reduce((acc,cur)=>{
//     if(cur>acc){
//         acc=cur
//     }
//     return acc
// },a[0])
// console.log(r);




// let uniqueNumbers = array.filter(num => {
//     return array.indexOf(num) === array.lastIndexOf(num);
// });
// // console.log(uniqueNumbers);

// let  result = Math.max(...uniqueNumbers)
// console.log(result);

let array = [1,1,5,8,5,6,9,13,9,5,8]
let unique = []
for(let i = 0 ;i<array.length;i++){
    let isUnique = true
    for(let j = 0 ; j <array.length;j++){
        if(i!=j&&array[i]===array[j]){
            isUnique=false;
            break;
        }
    }
    if(isUnique){
        unique.push(array[i])
    }
}
let result = Math.max(...unique)
console.log(result);