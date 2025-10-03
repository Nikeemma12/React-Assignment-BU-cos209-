let fruits = ["Grape", "Orange", "Apple", "Banana"];
let [firstFruit, secondFruit, ...remainingFruits] = fruits;
console.log("First fruit: " + firstFruit);
console.log("Second fruit: " + secondFruit);
console.log("Remaning fruit: " + remainingFruits);
[fruits[0], fruits[fruits.length - 1]] = [fruits[fruits.length - 1], fruits[0]];
console.log(fruits);

let person = {
  Name: "Nzube",
  age: 17,
  isStudent: true,
  country: "America",
};
let { Name, age, ...remainingDetails } = person;
console.log(`My Name is  + ${Name}`);
console.log(`I am ${age} years old`);
console.log(remainingDetails);
[person.Name, person.age] = [person.age, person.Name];
console.log(person);
