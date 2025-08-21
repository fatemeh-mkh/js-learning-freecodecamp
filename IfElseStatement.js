
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
