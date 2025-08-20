
// because of string immutability we cant just change an individual letter like that
var string = "jello world";
string[0] = "H"; 
console.log(string);
// error

string = "Hello world";
console.log(string);

let word = "Hello";

// making new string like bottom
word = "Y" + word.slice(1);
console.log(word);  // "Yello"

var text = "I love JavaScript";
var newText = text.replace("JavaScript" , "Java");

console.log(text);
console.log(newText);




