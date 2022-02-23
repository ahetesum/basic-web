function getAddedValue()
{
    var num1= document.getElementById('num1').value;
    var num2= document.getElementById('num2').value;

    var sum= parseInt(num1) +parseInt(num2);
    console.log(sum);
    document.getElementById('addNum').value=sum;

}