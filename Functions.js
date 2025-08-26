
// Arguments
function myFuncWithArgs(a, b){
var res1= console.log(a - b);
var res2 = res1+=10;
return res2
}

myFuncWithArgs(10 , 5);
myFuncWithArgs(8 , 2);
myFuncWithArgs(3.9 , 1);
myFuncWithArgs(10.55 , 3.25);

// Global scope and functions

var myGlobal = 10;

function func1(){
 oopsGlobal = 5;
}


function func2(){
var output = "";
if(typeof myGlobal != "undefined"){
    output += "myGlobal: " + myGlobal;
}

if(typeof oopsGlobal != "undefined"){
    output += "oopsGlobal: " + oopsGlobal; 
}

console.log(output);

}

func1();
func2();

// Local scope and Functions
// function myLocalScope(){
//     var myVar = 5;
//     console.log(myVar);
// }

// myLocalScope();
// console.log(myVar);   // error

// Global vs Local scope in functions

var outWear = "T-shirt";

function myFun()
{
 
    var outWear = "sweater";
     return outWear;   
}
console.log(myFun());
console.log(outWear);

// Return a value from a function with return

function minus(num ){
    return 10- num;
}
console.log(minus(20));

function timesFive(num){

    return 5 * num;
}
console.log(timesFive(2.2));

// Understanding undefined value returned from a function

var sum=10;
function addThree(){
    sum+=3;
}

console.log(addThree());


// Stand in Line
function nextInLine(arr , item){
 arr.push(item);
 return arr.shift();
}

var testArr = [1,2,3,4,5,6]

console.log("Before: "+ JSON.stringify(testArr));
console.log(nextInLine(testArr,7));
console.log("After: " + JSON.stringify(testArr));

// returning early pattern from functions

function abTest(a , b){
    if(a<0 || b<0){
        return "undefined"
    }

    return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b),2));
}

console.log(abTest(-2,2));
console.log(abTest(2, 2) );
console.log(abTest(0, 9));

// Random function between 0-1
function randomFraction(){

    return Math.random();
}
console.log(randomFraction());
console.log(randomFraction());
console.log(randomFraction());

var randomNumBetween0_19 =Math.floor(Math.random() * 20);
console.log(randomNumBetween0_19);
var randomNumBetween0_19 =Math.floor(Math.random() * 20);
console.log(randomNumBetween0_19);


function randomWholeNum(){

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());
console.log(randomWholeNum());
console.log(randomWholeNum());

function randomRange(ourMin , ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
};

var randomNumb= randomRange(2,9);

console.log("this is randomNumb: " + randomNumb);
var randomNumb= randomRange(4,9);

console.log("this is randomNumb: " + randomNumb);


// Use the parseInt function

function convertToInteger(str){
return parseInt(str,2);
}
var intNum = convertToInteger("10011");
console.log(intNum);

// function checkSign

function checkSign(num){
return num>0 ? "positive" 
: num < 0 ? "negative" :
 "zero"
}
console.log(checkSign(10));
console.log(checkSign(-10));

// function freezObject
function freezeObject(){
"use strict";

const MATH_CONSTANTS = {
  PI : 3.14
};

Object.freeze(MATH_CONSTANTS);

try {
  MATH_CONSTANTS.PI = 99;
}catch(ex){
  console.log(ex);
}

return MATH_CONSTANTS.PI;
}

const PI= freezeObject();
console.log(PI);

// Anonymous function

// var magic = function(){
//     return new Date();
// };

// // instead function keyword
// var magic = () =>{
//     return new Date();
// };

// // the shortest version
// const magic = () => new Date();


// Arrow functions

var myConst = function (arr1 , arr2){
    return arr1.concat(arr2);

}
console.log(myConst([1,2,3],[4,5]));

var myConst =  (arr1 , arr2) => arr1.concat(arr2);

console.log(myConst([1,6,3],[7,5]));

// filter & map
const realNumberArray = [4, 5.6, -9.8, 42, 6, 8.34, -2];

const squareList = (arr) =>{
    const squareInteger = arr.filter(num => Number.isInteger(num) && num > 0).
    map(x => x * x);

    return squareInteger ;

};

const squareInteger = squareList(realNumberArray);
console.log(squareInteger);

// write higher order arrow function
const increment = (
    function(){
        return function increment(number , value){

            return number + value;
        };
    }
) ();

console.log(increment(2,5));
console.log(increment(5));

// use the rest operator with function parameter
const sum1 = (function(){
return function sum1(x, y, z){
const args = [x,y,z];
return args.reduce((a,b) => a+b , 0);
};
})();

console.log(sum1(1,2,3));


// instead better method
const sum2 = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum2(1, 2, 3));          // → 6
console.log(sum2(5, 10, 15, 20));    // → 50
console.log(sum2());                 // → 0 (بدون ورودی)
console.log(sum2(100)); 

