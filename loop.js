
var myArray = [];

var i=0;
while(i <5){
    myArray.push(i);
    i++;
}

console.log(myArray);

// Iterate odd number with a for loop

var ourArray = [];
for(var i = 0 ; i<10 ; i+=2){
    ourArray.push(i);

}
console.log(ourArray);

// count backward with a for loop

var newArray = [];

for(i=10 ; i>0 ; i-=2){
    newArray.push(i);
}
console.log(newArray);

var myArr = [2, 3, 4, 5, 6];
var myTotal = 0;

for (var i = myArr.length - 1; i >= 0; i--) {
    myTotal += myArr[i];
}

console.log("Backward total:", myTotal);

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}


var result = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(result); 

