
function addFruits() {
  var favFruitText = document.getElementById("enteredText").value;
  var favFruitLi = document.createElement("li");
  favFruitLi.textContent = favFruitText;
  document.getElementById("fruitList").append(favFruitLi);
  document.getElementById("enteredText").value = "";
}
