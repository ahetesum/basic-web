console.log("JS loaded");
var button = document.getElementById("add");
var numb1 = document.getElementById("num1");
var numb2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(parseInt(numb1.value), parseInt(numb2.value)));
});
