var myFullName = "Fatemeh Mokhatri";
var firstLetterOfName ="";

firstLetterOfName = myFullName[0];
console.log(firstLetterOfName);

// other example for array

let fruits = [ "Apple" , "Orange" , "Banana"];

console.log(fruits[2]);
console.log(fruits[0]);

fruits[1] = "Cherry";
console.log(fruits);

let person = {
  name: "Fatemeh",
  age: 22,
  "favorite color": "blue"
};

console.log(person.name);
console.log(person["favorite color"]);
console.log(person.age);

// مقدار داخل متغیر
let prop = "name";
console.log(person[prop]); // Fatemeh

// other example
let car = { "car-brand": "Toyota" };
console.log(car["car-brand"]);