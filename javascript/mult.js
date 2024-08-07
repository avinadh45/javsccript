var m = require('readline-sync')


num =m.question('enter the number')

for(i=1;i<=10;i++){
    let result=i*num;

    console.log( `${num} * ${i} = ${result} `);

}