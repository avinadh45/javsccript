function main(){
    var read=require("readline-sync");

function getarrya(){
   num=read.questionInt();
   arr.push(num)
    
}
function displayarray(){

    console.log(" array elements are" +arr.join(" "))
}
let i,j;
let arr=[];
let n=read.questionInt("enter the array limit");

console.log("entered array elements are");
for(i=0;i<n;i++){
    getarrya();
}

displayarray();

}
main();