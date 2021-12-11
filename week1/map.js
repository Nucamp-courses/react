// Creating our own map function
// note: Helps us learn about callbacks and higher order functions better

// callback function (modifies values in each array element)
function subtractTwo(num) {           
    return num - 2                     
}

// our own map function (takes callback to return new array with modified values)
function map(arr, callbackFunc) {
    
    const newArr = [];
    
    /// iterates through each element in the array and executes callback function on each element
    for( let i = 0; i < arr.length; i++) {
        newArr.push(callbackFunc(arr[i]));
    }

    // returns new array with modified values
    return newArr;
}
  
console.log(map([3,4,5], subtractTwo)); // [1,2,3]