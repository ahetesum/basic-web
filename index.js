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

var isPrint = false;
//var isPrint;

if (isPrint) {
  document.getElementById("writeCondition").innerHTML =
    "We are not allowed to print";
} else if (isPrint == undefined) {
  document.getElementById("writeCondition").innerHTML = "Something is Wrong";
} else {
  document.getElementById("writeCondition").innerHTML =
    "We are allowed to print";
}

isPrint
  ? (document.getElementById("writeCondition").innerHTML =
      "We are not allowed to print Turnury")
  : (document.getElementById("writeConditionTurnury").innerHTML =
      "We are allowed to print Turnury");

//var caseNo = 0;
//var caseNo = 1;
var caseNo = 7;


switch (caseNo) {
  case 0:
    document.getElementById("writeSwitch").innerHTML = "We are allowed to print Switch :" + caseNo;
    break;
  case 1:
    document.getElementById("writeSwitch").innerHTML = "We are allowed to print Switch :" + caseNo;
    break;
  default:
    document.getElementById("writeSwitch").innerHTML ="We are allowed to print Switch : Default";
    break;
}
