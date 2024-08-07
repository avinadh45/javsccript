
const prompt = require("prompt-sync")();

class calcluation{

    addition(num1,num2){

        return num1+num2;
    }
    substration(num1,num2){

        return num1-num2;
    }
    multiplication(num1,num2){

        return num1*num2;
    }
    division(num1,num2){

        return num1/num2;
    }
    

}
function main(){

const calc=new calcluation();
let choice=prompt("1 for addition   2 for substration  3 for multiplication  4 for division")
let result;
let num1=parseFloat(prompt("enter the first number"));
let num2=parseFloat(prompt("enter the second number"));


switch(choice){
case "1":
    result=calc.addition(num1,num2);
    break;
    case "2":
    result=calc.substration(num1,num2);
    break;
    case "3":
    result=calc.multiplication(num1,num2);
    break;
    case "4":
    result=calc.division(num1,num2);
    break;
    default:
        result="invalid";

}

console.log("result is "+result);
}
main();


