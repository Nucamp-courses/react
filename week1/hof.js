// callback: is a function passed as an argument to another function
// higher order function: function that takes a function as an argument OR returns a function
// Having a function as an argument is very powerful because we can define new behavior
//    in each new function (e.g. greater control)

let callback = function() {
    console.log('callback');
}
// anotherFunction is a higher order function
let anotherFunction = function(cb) {
  // executing the callback function 3 times
  cb();
  cb();
  cb();
}

anotherFunction(callback);

// another callback example:

function add10(num) {
    return num + 10;
}

function multiplyBy20(num) {
    return num * 20;
}
  
function stringify(num) {
    return num.toString();
}

function update(cb, arr) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
      const updated = cb(arr[i]);
      output.push(updated);
    }
  
    return output;
}

console.log(update(add10, [1, 2, 3])) // returns [11, 12, 13]
console.log(update(multiplyBy20, [1, 2, 3])) // returns [20, 40, 60]
console.log(update(stringify, [1, 2, 3])) // returns [‘1’, ‘2’, ‘3’]