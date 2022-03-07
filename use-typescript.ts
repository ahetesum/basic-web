console.log("JS loaded");

const button=document.getElementById("add") ;
const numb1=document.getElementById("num1")as HTMLInputElement ;
const numb2=document.getElementById("num2")as HTMLInputElement ;

function add(num1:number,num2:number)
{
    return num1+ num2
}

button.addEventListener('click',function(){
    console.log(add(parseInt(numb1.value),parseInt(numb2.value)))
})