var p = require('readline-sync')

mark=p.question('enter your mark');

if(mark>49){
    console.log('you are passed')
}
else{
    console.log('you are failed')
}