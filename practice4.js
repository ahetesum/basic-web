function getMonth()
{
  var monthInt = parseInt(document.getElementById("enterMonth").value);
  switch (monthInt) {
    case 1:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is January";
      break;
    case 2:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is February";
      break;
    case 3:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is March";
      break;
    case 4:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is Aprail";
      break;
    case 5:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is May";
      break;
    case 6:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is june";
      break;
    case 7:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is July";
      break;
    case 8:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is August";
      break;
    case 9:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is September";
      break;
    case 10:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is October";
      break;
    case 11:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is November";
      break;
    case 12:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is December";
      break;
    default:
      document.getElementById("displayMonth").innerHTML =
        "Enterder Month is Invalid";
      break;
  }
}


