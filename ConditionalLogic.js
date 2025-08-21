
function trueOrFalse(isItTrue){

    if(isItTrue){
        return "Yes , Its true";
    }
    return "No , Its False";
}

function trueOrFalseFunc(isItTrue){

    if(thatWasTrue){
        return "Yes , it was true";
    }
    return "No , It was False";
}

console.log(trueOrFalse(true));

// Equality Operators

function testEqual(value){

    if(value == 12){
        return "Its equal";
    }
    return "Not equal";
}

console.log(testEqual(10));

function testEqual( val){
    if(val == 12){
        return "Equal";
    }
    return "Not equal";
}

testEqual(20);

// Loose Equality (==) → نوع داده‌ها رو تبدیل می‌کنه
console.log(5 == '5');      // true
console.log(0 == false);    // true
console.log(null == undefined); // true

// Strict Equality (===) → هم مقدار و هم نوع باید یکی باشه
console.log(5 === '5');     // false
console.log(0 === false);   // false
console.log(null === undefined); // false
console.log(5 === 5);       // true
