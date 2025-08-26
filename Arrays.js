
var ourArray = ["John" , 23];
var newArray = ["Ali" , 24];

// با داده‌ها
let arr2 = [1, 2, 3, 4, 5];

// ترکیب داده‌ها (عدد، رشته، بولین، شیء...)
let arr3 = ["Ali", 25, true, { city: "Tehran" }, [10, 20]];


let fruits = ["Apple", "Banana", "Mango"];
fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Mango"]

let colors = ["red" , "orange" , "pink"];

colors.push("green");
colors.push("yellow");

console.log(colors);

colors.pop();
colors.pop();

console.log(colors);

// add at first
colors.unshift("blue");
console.log(colors);

// delete from first

colors.shift();
console.log(colors);

// Nested Array

var myArray = [["the universe",42],["everything",101010]];

// Access array data with indexes
let nums = [10, 20, 30];
console.log(nums[0]); // 10
console.log(nums[2]); // 30
console.log(nums.length); // 3

// Modify array data with indexes
var ourArray2 = [18, 29 , 37];
ourArray2 [2] = 47;
ourArray2[0] = 16;

console.log(ourArray2);

// Access Multi-Dimensional Arrays
var newOne = [[1,2,3],[4,5,6],[[7,8],9,10]];
var mydata = newOne[2][0];
console.log(mydata);

let shoppingList = [
  ["cereal", 3, 5.5],
  ["eggs", 12, 0.5],
  ["milk", 2, 2],
  ["bread", 1, 1.5],
  ["apple", 6, 0.8]
];

let shoppingListObj = [
  { name: "cereal", quantity: 3, price: 5.5 },
  { name: "eggs", quantity: 12, price: 0.5 },
  { name: "milk", quantity: 2, price: 2 },
  { name: "bread", quantity: 1, price: 1.5 },
  { name: "apple", quantity: 6, price: 0.8 }
];

// Mutate an Array declared with const

const s = [2,5,7];

function editInPlace(){
  "use strict";

  s[0]=7;
  s[1]=5;
  s[2]=2;

}

editInPlace();
console.log(s);

