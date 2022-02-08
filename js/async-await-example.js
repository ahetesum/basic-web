//Async Example with promise 

const getData = async() => {
    var data = "Hello World";
    return data;
}
  
getData().then(data => console.log(data));


//Await 

const getData = async() => {
    var y = await "Hello World";
    return y;
}
  
console.log(1);
getData().then(x=>console.log(x));
console.log(2);
