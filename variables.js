// تعریف متغیرها
let name = "Ehsan";
const age = 22;
var city = "Tehran";
var myname= "Fatemeh";
let ourName = "freecodeCamp";
const pi = 3.14;
myOld = 8;
var country = "Iran"; 


// Reassigning values
let color = "red";
color = "blue"; 
console.log("Color is:", color);

let temp;
console.log("Temp:", temp); // undefined


// Initializing variables
var a;
console.log(a);

var b=10; 
a = b ;

console.log(b)

// Uninitialized variables

var m = 10;
var l = 5;
var c = "Hello ";

m = m + 2;
l = l - 3;
c = c + "From Here!";

console.log(m);
console.log(l);
console.log(c);

// Scape Character '\'

var myStr = "hello \"this is me\" everybody";
console.log(myStr);

// String can surrounded by 'single quotes' or "double quotes".

myStr = "hello \"this is me\" everybody";
var str3 = 'hello "everybody"';

console.log(str3);


// Single quote inside string
let text1 = 'It\'s a beautiful day';
console.log(text1); // It's a beautiful day

// Double quote inside string
let text2 = "He said: \"JavaScript is fun!\"";
console.log(text2); // He said: "JavaScript is fun!"

// Backslash in file path
let path = "C:\\Users\\Fatemeh\\Documents";
console.log(path);  // C:\Users\Fatemeh\Documents

// New line
let text3 = "Hello\nWorld";
console.log(text3);
/*
Hello
World
*/

// Tab space
let text4 = "Name:\tFatemeh";
console.log(text4); // Name:    Fatemeh


// concatenating Strings

var str5 = "I come first. ";
str5 += "I come second."

console.log(str5);

var str6 = "Fatemeh";
var str7 = "hello my name is " + str6 + " how is it going?"; 

console.log(str7); 

// find string length

var length =0 ;
var  colorName = "yellow";

length = colorName.length;

console.log(length);