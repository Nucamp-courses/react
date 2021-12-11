// Arrays have built-in higher order methods such as:
// forEach, map, filter, reduce, find, findIndex, some, every, etc.

// forEach: Calls a function on each element of an array: returns undefined
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const toppings = ['Mushrooms', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chilles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

function logTopping(topping, index) {
    console.log(`${index}: ${topping}`);
}

// calling a separate function 
toppings.forEach(logTopping)

// defining the function in-place:
toppings.forEach(function(topping, index) {
    console.log(`${index}: ${topping}`);
});

// map: Creates a new array with the results of calling a function on every element of the original array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6];

const multipliedBy5 = numbers.map(function(num, index) {
    return num * index
});

console.log(multipliedBy5); // [0, 12, 8, 54, 36, 35, 66, 21, 400, 45, 60]

// filter: Returns a new array that contains a subset of the original array. 
//          Items will be added to the new array if you return a truthy expression.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const grades = [89, 85, 74, 93, 78, 81]
const greaterThan85 = grades.filter(function(grade) {
  return grade > 85
})

console.log(greaterThan85); // [89, 93]

// reduce: Reduces the array to a single value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// reducing an array into an object:

const fruits = ['apple', 'banana', 'banana', 'apple', 'orange', 'pear', 'apple', 'orange'];

const tally = fruits.reduce((accumulator, fruit) => {
    
    if (accumulator[fruit]) { // if the fruit is already in the accumulator
        accumulator[fruit] = accumulator[fruit] + 1 // increment the value
    } else {
        accumulator[fruit] = 1 // if the fruit is not in the accumulator
    }

    return accumulator

  }, {})

console.log(tally); // { apple: 3, banana: 2, orange: 2, pear: 1 }

// Chainable methods: 
const parks = [
    {
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    },
    {
      name: "Crater Lake",
      areaInSquareKm: 741.5,
      location: { state: "Oregon" },
    },
    {
      name: "Zion",
      areaInSquareKm: 595.9,
      location: { state: "Utah" },
    },
];

// Return array with park names that have a size greater than minSize
//   1) filter returns a new array with all the park data that pass the filter
//   2) map returns a new array with just the park names
function getBigParkNames(parks, minSize) {
    
    // let found = parks.filter((park) => park.areaInSquareKm > minSize)
    // let result = found.map((park) => park.name)
    
    // let result = parks
    //                    .filter((park) => park.areaInSquareKm > minSize)
    //                    .map((park) => park.name)  
    
     let result = parks.filter(function(park) {
                                 return park.areaInSquareKm > minSize})
                                   .map(function(park) {
                                        return park.name
                                   });   
    return result;
}

console.log(getBigParkNames(parks, 740)); // ["Canyonlands", "Zion"]