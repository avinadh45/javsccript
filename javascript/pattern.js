var p=require('readline-sync')

var i,j;
var num=1;
var pa ="";
for(i=1;i<=4;i++)
{
     for(j=1;j<=i;j++)
    {
      pa += num;
      num++
    }
       pa += "\n";
}
console.log(pa);
