
const promis = require('promise')

function h(num1,num2){

return new promis( (resolve,reject) =>{

if(num1<num2){
    reject("error")
}
  resolve(num1+num2)

})

}
  h(20,10).then( (sum)=>{
    console.log(sum)
  }).catch( (err)=>{
    console.log(err)
  })