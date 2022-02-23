var count = 0;
var count1, count2;

var myArray = [1, 2, 3, 4, 5];

var myObj = {
  name: "Soumya",
  gender: "Female",
};

function printCount1() {
  // myObj.name="Soumya Dubay"
  // console.log(count1);
  countDis();
}

function printConsole() {
  console.log("I am Javascript Console.");
}

function printAlert() {
  alert("I am Javascript Alert! ");
}

function countDisplay() {
  count = count + 1;
  console.log("The Count Increased Value-> " + count);
}

var countDis = countDisplay;

//////////////////////////////

function displayNumber(num) {
  if (num == 5) {
    console.log("Five");
  } else if (num == 8) {
    console.log("Eight");
  } else {
    console.log("Wrong");
  }
}

function displayNumberCase(num) {
  switch (num) {
    case 1:
      console.log("One");
      break;
    case 2:
      console.log("Two");
      break;
    case 3:
      console.log("Three");
      break;
    case 4:
      console.log("Four");
      break;
    case 5:
      console.log("Five");
      break;
      default:
        console.log("Wrong");
        break;
  }
}


function displayNumberTurnury(num) {
    (num == 5)?console.log("Five"): console.log("Wrong");
    
  }