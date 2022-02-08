const cars = [
  { category: "BMW", name: "BMW X1" },
  { category: "Volvo", name: "Volvo x60" },
  { category: "Mini", name: "Countryman" },
];
const updatedCars = cars.map((car) => {
  car.type = "Sedan";
  return car;
});
console.log(updatedCars);

const organization = new Set();
organization.add("org1");
organization.add("org2");
organization.add("org3");
organization.add("org1");
organization.add("org3");
organization.add("org1");
for (let org of organization) {
  console.log(org);
}
