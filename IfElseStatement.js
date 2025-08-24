
function testSize(num){

    if(num < 5){
        return "Tiny";
    }
    else if(num < 10){

        return "Small";
    }
    else if(num < 15){
        return "Medium";
    }
    else if(num < 20){
        return "Large";
    }
    else if(num >= 20){
        return "Huge";
    }
}

console.log(testSize(19));


let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// خروجی: Grade: B


// switch case

function caseInSwitch(val){

    var answer = "";

    switch(val){
        case 1:
            answer = "alpha";
            break;
         case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(3));

function testStrictNotEqual(val){
if(val !== 17){
    return "Not equal";
}
return "equal";
}
console.log(testStrictNotEqual(17));

function testElseIf(value){

    if(value  > 10){
        return "Greater than 10";
    }
    else if (value < 5){

        return "smaller than 5";
    }
    else{

        return "between 5  and 10";
    }
}
console.log(testElseIf(7));

function caseInSwitch(val) {
    let answer = "";

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "Not Found";  // وقتی هیچ caseی match نشه
            break;
    }
    return answer;
}

console.log(caseInSwitch(3));  // → gamma
console.log(caseInSwitch(7));  // → Not Found

function chainToSwitch(val) {
    switch (val) {
        case "bob":
            val = "marley";
            break;
        case 42:
            val = "answer";
            break;
        case 1:
            val = "there is no #1";
            break;
        case 99:
            val = "Missed me by this much";
            break;
        default:
            val = "Not found";  
    }
    return val;
}

console.log(chainToSwitch(42)); 
