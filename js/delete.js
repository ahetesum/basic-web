
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        var carId = localStorage.getItem('SELECTED_ID');
        var carList=JSON.parse(localStorage.getItem('CAR_LIST'));
        var editCar= carList.find(c=>c.id==carId);
        console.log(editCar)
        document.getElementById('carId').value=editCar.id;    
        document.getElementById('carName').value=editCar.name;
        document.getElementById('carDate').value=editCar.manufacture;
        document.getElementById('carCategory').value=editCar.category;
        document.getElementById('carPrice').value=editCar.price;

    }
}//load data

// name:
// category:document.getElementById('carCategory').value,
// manufacture:document.getElementById('carDate').value,
// price:document.getElementById('carPrice').value,


function onSubmitForm()
{
    console.log("I m in delete");

    var carList=JSON.parse(localStorage.getItem('CAR_LIST'));
    var seletedCarId=  localStorage.getItem('SELECTED_ID');
    const tempCarList = carList.filter((item) => item.id != seletedCarId);


    localStorage.setItem('CAR_LIST',JSON.stringify(tempCarList)); 

    console.log(tempCarList);
    window.location.href="index.html";

}


function redirectIndex(){
    window.location.href="index.html";
}