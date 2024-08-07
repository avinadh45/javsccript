var  r = require("readline-sync")


let wt=r.questionFloat("enter the mark of writtern text")

let lt=r.questionFloat("enter the mark of  text")

let ass=r.questionFloat("enter the mark of  text")

let avg=((wt*70)+(lt*20)+(ass*10))/100;

console.log("average is "+avg);