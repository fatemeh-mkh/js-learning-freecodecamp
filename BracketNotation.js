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

// find last letter in the string

var firstName = "Ada";
var lastLetter = firstName[firstName.length - 1];

console.log(lastLetter);

// get last letter with length
let word = "JavaScript";
let lastChar = word[word.length - 1];
console.log(lastChar);  // "t"

// use slice method for getting last letter of string
// (ارگومان منفی یعنی از اخر بشمره)
let word2 = "JavaScript";
let lastChar2 = word.slice(-1);
console.log(lastChar2); // "t"

// use charAt method
let word3 = "JavaScript";
let lastChar3 = word.charAt(word.length - 1);
console.log(lastChar3); // "t"

