var m=require('readline-sync')


num = m.question('enter the limit')
let sum=0

for(i=1;i<=num;i++){
    if(i%2!=0){
        sum=sum+i;
    }
}
console.log(sum)