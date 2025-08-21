
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