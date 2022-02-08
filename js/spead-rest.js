//spread****VVI

let arr = ['a','b'];
let arr2 = [arr,'c','d'];

console.log(arr2); // [ [ 'a', 'b' ], 'c', 'd' ]

let arr3= [...arr,'c','d'];

console.log(arr3); // [ 'a','b' , 'c', 'd' ]


//rest operator
function addition(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(addition(1,2)); //3
console.log(addition(1,2,3)); //6
console.log(addition(1,2,3,4,5)); //15   
