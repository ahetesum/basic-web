
function onSubmitForm()
{
    console.log("I m in Cretae");
    var car={
        id:document.getElementById('carId').value,
        name:document.getElementById('carName').value,
        category:document.getElementById('carCategory').value,
        manufacture:document.getElementById('carDate').value,
        price:document.getElementById('carPrice').value,

    };
    console.log(car);

    var carList=JSON.parse(localStorage.getItem('CAR_LIST'));
    carList.push(car);
    localStorage.setItem('CAR_LIST',JSON.stringify(carList)); 

    console.log(carList);
    window.location.href="index.html";

}

function redirectIndex(){
    window.location.href="index.html";

}



