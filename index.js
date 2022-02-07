//alert("I am Javascript");
console.log("This is also javascript");

var count = 0;

// count=count+1;

// console.log('The value of count is ->'+count);

// count++;

// console.log('The value of count is ->'+count);

//document.write('Filally from Here!')

function countDisplay() {
  count = count + 1;

  console.log("The value of count is ->" + count);

  count++;

  console.log("The value of count is ->" + count);
}

//countDisplay();


var isPrint= false;

if(isPrint)
{
    document.getElementById('writeCondition').innerHTML= "We are not allowed to print"
}
else
{
    document.getElementById('writeCondition').innerHTML= "We are allowed to print"
}

(isPrint)?document.getElementById('writeCondition').innerHTML= "We are not allowed to print Turnury":
    document.getElementById('writeConditionTurnury').innerHTML= "We are allowed to print Turnury"

