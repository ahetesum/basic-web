function calculateAdd(){
    var num1= parseInt(document.getElementById('firstNum').value);
    var num2= parseInt(document.getElementById('secondNum').value);
    var sum = num1+num2;
    document.getElementById('outPut').innerHTML="The Add Result is : "+ sum;
}


var i=20;

while(i<30)
{
    console.log("The value of i is: "+i);
    i++;
}

console.log("----------------------------------");


for(var j=5;j<15;j++)
{
    console.log("The value of j is: "+j);

}