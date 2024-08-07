const prompt = require("prompt-sync")();

let i;
let arr=[]
let n=prompt("enter the lenght of the array")
 

  for(i=0;i<n;i++){
  num=prompt("enter the elements ");
  arr[i]=num;
  }
  
   let arr1=[]
let sum;

    for(i=0;i<arr.length-1;i++){
        sum =arr[i]*arr[i+1];
        arr1[i]=sum;
        }
        console.log(arr1.join(" "));
        