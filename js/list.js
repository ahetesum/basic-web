//GLOBAL Function
fetch('../assets/cars.json') 
.then(response => response.json())
.then(jsonCars =>{
    if(localStorage.key('CAR_LIST'))
    {
        jsonCars=JSON.parse(localStorage.getItem('CAR_LIST')); 
    }
    else{
        console.log('Loaded......');
        localStorage.setItem('CAR_LIST',JSON.stringify(jsonCars)); 
    }
    let initPosition=1;
    var table = document.getElementById("carsTable");
    for(let car of jsonCars)
    {
        var row = table.insertRow(initPosition);
        row.insertCell(0).innerHTML= car.id;
        row.insertCell(1).innerHTML= car.name;
        row.insertCell(2).innerHTML= car.category;
        row.insertCell(3).innerHTML= car.manufacture;
        row.insertCell(4).innerHTML= car.price;
        row.insertCell(5).innerHTML='<div class="btn-group"><button type="button" onclick="editCar('+car.id+')" class="btn-xs btn-warning">Edit</button><button type="button" class="btn-xs btn-danger" data-toggle="modal" data-target="#myModal">Delete</button></div>';
        initPosition++;
    } 
} );

function createCar()
{
     window.location.href='create.html';
}

function deleteCar(id)
{
    localStorage.setItem('SELECTED_ID',id);
    window.location.href="delete.html";
}
function editCar(id)
{
    localStorage.setItem('SELECTED_ID',id);
    window.location.href="edit.html";
}


