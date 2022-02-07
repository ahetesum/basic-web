function calculateAdd(){
    var num1= parseInt(document.getElementById('firstNum').value);
    var num2= parseInt(document.getElementById('secondNum').value);
    var sum = num1+num2;
    document.getElementById('outPut').innerHTML="The Add Result is : "+ sum;
}