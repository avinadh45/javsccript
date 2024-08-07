var m=require('readline-sync')


mark =m.question(' enter your mark')


if(mark>90){
    console.log("A")
}
else if(mark>80){
    console.log("B")
}
else if(mark>70){
    console.log("c")
}
else if(mark>60){
    console.log("D")
}
else if(mark>50){
    console.log("E")
}
else if(mark<50){
    console.log(" you are failed")
}