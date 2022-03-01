console.log("JS loaded");

const button=document.getElementById("add");
const numb1=document.getElementById("num1");
const numb2=document.getElementById("num2");

function add(num1,num2)
{
    return num1+ num2
}

button.addEventListener('click',function(){
    console.log(add(numb1.value,numb2.value))
})