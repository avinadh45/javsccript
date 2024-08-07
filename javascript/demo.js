const prompt = require("prompt-sync")();

let s=prompt("enter the size of the array ")


let arr=[];

console.log("enter the elements ")
for(let i=0;i<s;i++){
arr[i]=prompt("");
}
console.log(arr.join(" "))