

function displayNumber(content)
{
  var calString= document.getElementById('calc').value;
  document.getElementById('calc').value=calString+content;
  console.log(calString);
  //if(calString)
  
}


function onClear()
{
  document.getElementById('calc').value='';
}

function onCalculate()
{
  var calculateString= document.getElementById('calc').value;

  if(calculateString.includes('+'))
  {
    var result1= parseInt(calculateString.split('+')[0]);
    var result2= parseInt(calculateString.split('+')[1]);
    document.getElementById('calc').value=result1+result2;
  }
  else if(calculateString.includes('-'))
  {
    var result1= parseInt(calculateString.split('-')[0]);
    var result2= parseInt(calculateString.split('-')[1]);
    document.getElementById('calc').value=result1-result2;
  }
  else if(calculateString.includes('*'))
  {
    var result1= parseInt(calculateString.split('*')[0]);
    var result2= parseInt(calculateString.split('*')[1]);
    document.getElementById('calc').value=result1*result2;
  }
  else if(calculateString.includes('/'))
  {
    var result1= parseInt(calculateString.split('/')[0]);
    var result2= parseInt(calculateString.split('/')[1]);
    document.getElementById('calc').value=result1/result2;
  }


}