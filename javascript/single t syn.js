console.log("x"); //sync




promise = new Promise((res,rej)=>{
    res("success")
})
promise.then((response)=>{
    console.log(response);
})
console.log("confusion");

setImmediate(()=>{
    console.log("immidiate");
}
)


console.log("z");  //sync

process.nextTick(()=>{
    console.log("joel");
})


setTimeout(() => {
    console.log("timeout");  
  },1000);


  console.log("y");  //sync