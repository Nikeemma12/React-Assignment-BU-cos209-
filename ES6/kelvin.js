// ES6 FEATURES (WITH DIFFERENT EXAMPLES)

// 1. CLASSES
// Classes provide a cleaner way to create objects with properties and methods.
// The constructor sets up the properties for each instance.

class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  speak() {
    return `${this.species} makes a ${this.sound} sound.`;
  }
}

const dog = new Animal("Dog", "bark");
console.log(dog.speak());

// ====================================================================================================================
// 2. ARROW FUNCTIONS
// Arrow functions give a shorter way to write functions and automatically bind "this".

// Arrow function to calculate the perimeter of a rectangle
const rectanglePerimeter = (length, width) => {
  const perimeter = 2 * (length + width);
  console.log(
    `The perimeter of a ${length}x${width} rectangle is ${perimeter}`
  );
};

rectanglePerimeter(5, 8);

// ====================================================================================================================
// 3. VARIABLES
// ES6 introduced "let" and "const" instead of "var".
// let = can be reassigned but not redeclared
// const = cannot be reassigned or redeclared

let city = "Lagos";
city = "Abuja";
console.log(`Current city: ${city}`);

const earthRadius = 6371;
// earthRadius = 6400; // ❌ This will throw an error
console.log(`Earth radius: ${earthRadius} km`);

// ====================================================================================================================
// 4. ARRAY METHODS
// ES6 added powerful array helper methods such as map, filter, reduce, etc.

let fruits = ["mango", "orange", "kiwi"];

// .push - add to end
fruits.push("pineapple");
console.log(fruits);

// .pop - remove last
fruits.pop();
console.log(fruits);

// .shift - remove first
fruits.shift();
console.log(fruits);

// .unshift - add to start
fruits.unshift("grape");
console.log(fruits);

// .map - transform each item
let upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);

// .filter - keep items that match a condition
let longNamedFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longNamedFruits);

// .reduce - combine values into one
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(`Sum of numbers: ${sum}`);

// .sort - order items
let sortedNumbers = [...numbers].sort((a, b) => b - a); // descending
console.log(`Sorted in descending order: ${sortedNumbers}`);

// ====================================================================================================================
// 5. DESTRUCTURING
// A quick way to unpack arrays or objects into variables.

// Array destructuring
let colors = ["red", "green", "blue", "purple", "orange"];
[colors[2], colors[3]] = [colors[3], colors[2]];
console.log(colors);
let [firstColor, secondColor, ...remaining] = colors;
console.log("First color: " + firstColor);
console.log("Second color: " + secondColor);
console.log("Remaining color through rest operator " + remaining);

// Object destructuring
let person = {
  name: "Ada",
  age: 25,
  country: "Nigeria",
  inSchool: "false",
  height: "180cm",
  weight: "78.6kg",
};
let { name, age, country, ...otherInfo } = person;
console.log(`${name} is ${age} years old and lives in ${country}. ${person}`);

// ====================================================================================================================
// 6. MODULES
// Modules let you split your code into multiple files and import/export them.
// Example (this part assumes you have another file exporting a function):

// ---- main.js ----
let nums = [2, 6, 7, 9, 15, 22, 15];
import { findMaximum } from "./kelvin impExp.js";
console.log(findMaximum(nums));

// ====================================================================================================================
// 7. TERNARY OPERATOR
// A shorter way to write if/else statements.

let score = 75;
let grade = score >= 50 ? "Pass" : "Fail";
console.log(`You ${grade} the test.`);

// ====================================================================================================================
// 8. SPREAD OPERATOR
// The spread operator (...) expands arrays or objects into individual elements.

// Array example
let vegetables = ["tomato", "onion"];
let moreVegetables = [...vegetables, "spinach", "cucumber"];
console.log(moreVegetables);

// Object example
let laptop = { brand: "HP", ram: "8GB" };
let updatedLaptop = { ...laptop, storage: "512GB SSD", color: "Silver" };
console.log(updatedLaptop);
