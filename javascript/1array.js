const prompt = require("prompt-sync")();
let elm = prompt("Enter numbers of array");

var arr = [];
var arr1 = [];


 
for(let i=0;i<elm;i++){
arr[i] = prompt("enter the elements");
}


for(let i=0;i<elm;i++){
    arr1[i] =  prompt("enter the elements of 2nd array");
    }

    let temp = arr
    arr=arr1
    arr1=temp

    for( let value of arr){
        console.log(value)
    }
    
    for( let value of arr1){
        console.log(value)
    }