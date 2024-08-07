let r=require("readline-sync");


let e=r.question("enter the string");
let length=e.length-1;
let flag=0;
for(let i=0;i<e.length;i++){
    if(e[i]!=e[length-i]){
        flag=1;
        break;
    }
}
if(flag===0){
    console.log(" the string is paliogram")
}
else{
    console.log("the string is not a paliogram")
}