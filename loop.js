
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

// ITerate with do while loop

var thisArray = [];
var i=10;

do{
    thisArray.push(i);
    i++;
}while(i < 5)

    console.log(i , thisArray);

    // coding challenge

    contacts=[
        {
            firstName: "Ali",
            lastName: "Rezayi",
            number: "09120000000",
            likes: ["Music", "Football", "Coding"]
        },

                {
            firstName: "Sara",
            lastName: "Ahmadi",
            number: "09350000000",
            likes: ["Books", "Traveling", "Cooking"]
        },
                {
            firstName: "John",
            lastName: "Doe",
            number: "+1-555-123-456",
            likes: ["Movies", "Guitar", "Hiking"]
        },
                {
            firstName: "Mina",
            lastName: "Karimi",
            number: "09130000000",
            likes: ["Photography"]
        }
    ];

    function lookUpProfile(name , prop){

        for(var i=0; i<contacts.length ;i++){
            if(contacts[i].firstName === name){
                return contacts[i][prop] || "No such property";
            } 
        
        }
        return "No such contacts found";
    };

    var data = lookUpProfile("Mina" , "lastName");
    console.log(data);
    var data2 = lookUpProfile("John","number");
    console.log(data2);
    var data3= lookUpProfile("Sara" , "likes");
    console.log(data3);