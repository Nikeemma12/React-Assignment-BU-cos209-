//ES6 Models
//1. Classes
//This is a better way of working with objects. They have their own properties and methods/functions
//It has a constructor method, It is used to set up the object properties
//Each object you create from a class is called an "instance"
class Car {
  constructor(model, color, year) {
    //The "this" keyword refers to the object currently in use
    this.model = model;
    this.color = color;
    this.year = year;
  }
  carDetails() {
    return `This is ${this.year} ${this.color} ${this.model} car`;
  }
}
const car1 = new Car("BMW", "Blue", 2023);
console.log(car1.carDetails());

//_______________________________________________________________________________________________________________________________________________________________________
//2. Arrow functions

//This is the ES6 model of writing functions
//Write an Arrow function to calculate Area of a Circle
const areaCircle = (radius) => {
  const area = (Math.PI * radius * radius).toFixed(2);
  console.log(`The area of the circle with radius ${radius} cm is ${area} cm2`);
};
areaCircle(7);

//_______________________________________________________________________________________________________________________________________________________________________
//3. Variables

//The ES6 model changed the way variables were declared from var to let or const
//The variable declared with let can be changed but can't be re-declared
let firstName = "Nzube";

//I can update this to another value
firstName = "Emma";
console.log(firstName);

//The variable declared with const can be neither be changed nor can't be re-declared
const gravityAccelertion = 9.8;

//If i try updating the variable it flags an error
//gravityAccelertion = 10;

//_______________________________________________________________________________________________________________________________________________________________________

//4. Array Methods

//This methods are an important aspect in React Project especailly map. In react Map is used for rendering list

let foods = ["bread", "apple", "egg", "carrot", "banana"];
//.push- This is used to add another element to the back of the array
let newFood = "rice";
foods.push(newFood);
console.log(foods);

//.pop- This is used to remove the last element of the array
foods.pop();
console.log(foods);

//.shift -This is used to remove first element of the array
foods.shift();
console.log(foods);

//.unshift- This is used to add element to the start of the array
foods.unshift("bread");
console.log(foods);

//.map -This is an array method that returns the list of all values/elements in that array
//It can take two arguments item and index
foods.map((element, index) => {
  console.log(`item at index ${index} is ${element}`);
});

//.filter -This method returns a new list based on a specific condition. It can also takes arguments
let numbers = [10, 2, 7, 13, 6, 3, 12, 1];

//It will only return even numbers
let evenNumbers = numbers.filter((item) => item % 2 == 0);
//It will only return odd numbers
let oddNumbers = numbers.filter((item) => item % 2 == 1);

console.log(`Filter of even numbers ${evenNumbers}`);
console.log(`Filter of odd numbers ${oddNumbers}`);

//.reduce -This reuces the element in an array to one value
//Let me say you want to find the product of all the values in an array, you wil use this

let productOfArrayValues = numbers.reduce((previous, current) => {
  return previous * current;
});

console.log(
  `The product of all element in the numbers array is ${productOfArrayValues}`
);

//.sort -This element sorts out the array in ascending or descenging order
//Sort numbers
//Ascending
let ascendingNumbers = numbers.sort((first, second) => first - second);
console.log(`The sorted numbers array in ascending order: ${ascendingNumbers}`);
//Descending
let descendingNumbers = numbers.sort((first, second) => second - first);
console.log(
  `The sorted numbers array in descending order: ${descendingNumbers}`
);

//Sort words
let sortedWords = foods.sort((first, second) => first.localeCompare(second));
console.log(`The foods array in alphabetical order: ${sortedWords}`);

//_______________________________________________________________________________________________________________________________________________________________________

//5. Destructuring -This is like extrcting variables from an array and storing it in seperte variables

//Array destructuring
let arrays = ["garden egg", "apple", "pear"];
let [one, two, three] = arrays;
//This will store each element of the array in different variables
console.log(one);
console.log(two);
console.log(three);

//Object Destructuring
let car = {
  model: "bmw",
  color: "orange",
  year: 2024,
};
//This will store each element of the object in different variables
let { model, color, year } = car;
console.log(model);
console.log(color);
console.log(year);

//_______________________________________________________________________________________________________________________________________________________________________

//6. Modules -This are in two forms export and import
//They allow you to split your code in seperate files. You export your code from one file then import it to another file
//Import
import { productArray } from "./import export.js";
let nums = [2, 4, 6, 23];
let product = productArray(nums);
console.log(`The sum of ${nums} array is ${product}`);
//
//_______________________________________________________________________________________________________________________________________________________________________

//7. Ternary OPerator - This is used instead of an if/else statements
let age = 10;
let isAdult = age > 18 ? true : false;
//This checks if age is greater than 18 then assign a boolean value to either true or false based on the condition
console.log(isAdult);

//_______________________________________________________________________________________________________________________________________________________________________

//8. Spread Operator

//Array
//This is used in spreading out the elements of an array
const cars = ["BMW", "Lamborghini", "Ferrari"];
//You can add the element to the array by using spread opertor
const newCars = [...cars, "Rolls-Royce", "Chevrolette"];
console.log(newCars);

//Object
//This is used in spreading out the elements of an objects
const student = {
  name: "Nzube",
  cgpa: 5.0,
  level: "200lvl",
};
//You can add the element to the objects by using spread opertor
const newStudent = { ...student, department: "S.E", group: "Group B" };
console.log(newStudent);
