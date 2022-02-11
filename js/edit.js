
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
    console.log("I m in Edit");

    var carList=JSON.parse(localStorage.getItem('CAR_LIST'));
    var editingCar= carList.find(c=>c.id==document.getElementById('carId').value);
    editingCar.name= document.getElementById('carName').value;
    editingCar.category=document.getElementById('carCategory').value;
    editingCar.manufacture=document.getElementById('carDate').value;
    editingCar.price=document.getElementById('carPrice').value;
    localStorage.setItem('CAR_LIST',JSON.stringify(carList)); 

    console.log(carList);
    window.location.href="index.html";

}


function redirectIndex(){
    window.location.href="index.html";
}