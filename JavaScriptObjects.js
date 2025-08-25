
var ourDog ={
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything!"]
};

var HerDog ={
    "name" : "Bobby",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["nothing!"]
};
var myDog = {
    "name": "Buddy",
    "legs": 3,
    "tails": 1,
    "friends": ["children", "other dogs"]
};
var ourCat = {
    "name": "Milo",
    "legs": 4,
    "tails": 1,
    "friends": ["sleeping", "yarn balls", "milk"]
};
var myRabbit = {
    "name": "Snowy",
    "legs": 4,
    "tails": 1,
    "friends": ["carrots", "grass", "kids"]
};

console.log(myDog);
console.log(HerDog);
console.log(myRabbit);

// accessing object properties with dot notation

var testObject = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObject.hat;
var shirtValue = testObject.shirt;
var shoesValue = testObject.shoes;

console.log(hatValue);


// accessing object properties with bracket notation
var book = {
    "title": "1984",
    "author": "George Orwell",
    "pages": 328
};

var titleValue = book["title"];
var authorValue = book["author"];
var pagesValue = book["pages"];

console.log(titleValue);
console.log(authorValue);
console.log(pagesValue);

//  accessing object properties with variables

var testObj ={
    12:"NaMath" ,
    16:"Montana",
    19: "Unitas"
}

var playerNum = 16;
var player = testObj[playerNum];
console.log(player);

// Updating object properties

var car = {
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2020
};

car.brand = "Benz";
console.log(car.brand);

// add new properties to an object
var car = {
    "brand": "BMW",
    "model": "X3"
};


car.year = 2024;  
car["color"] = "black";

console.log(car);

delete car.brand;
console.log(car);

// Using objects for lookup
function getFruitColor(fruit) {
    switch (fruit) {
        case "apple":
            return "red";
        case "banana":
            return "yellow";
        case "grape":
            return "purple";
        case "orange":
            return "orange";
        default:
            return "unknown";
    }
}

console.log(getFruitColor("banana")); // → yellow
console.log(getFruitColor("grape"));  // → purple
console.log(getFruitColor("pear"));   // → unknown

function getFruitColor(fruit) {
    const fruitColors = {
        "apple": "red",
        "banana": "yellow",
        "grape": "purple",
        "orange": "orange"
    };

    return fruitColors[fruit] || "unknown"; 

}

console.log(getFruitColor("banana")); // → yellow
console.log(getFruitColor("grape"));  // → purple
console.log(getFruitColor("pear"));   // → unknown

// testing objects for properties

var myObject = {
    "gift" : "pony" ,
    "pet" : "kitten",
    "bed" : "sleigh"
};

function checkObj(checkProp){

    if(myObject.hasOwnProperty(checkProp)){

        return myObject[checkProp];
    }
    else{
        return "NotFound";
    }

}
console.log(checkObj("gift"));
console.log(checkObj("hello"));

// Manipulating complex object

var onlineStore = {
    user: {
        id: 101,
        name: "Fatima",
        email: "fatima@example.com"
    },
    cart: {
        items: [
            { productId: 1, name: "Laptop", price: 1200, qty: 1 },
            { productId: 2, name: "Headphones", price: 200, qty: 2 }
        ],
        total: 1600
    },
    orders: []
};

// Add a new item to the cart
onlineStore.cart.items.push({ productId: 3, name: "Mouse", price: 50, qty: 1 });
onlineStore.cart.total += 50;

//  Update quantity (increase headphones from 2 → 3)
onlineStore.cart.items[1].qty = 3;
onlineStore.cart.total += 200; // add extra cost for 1 more headphone

//  Remove an item (remove Laptop from the cart)
onlineStore.cart.items = onlineStore.cart.items.filter(item => item.productId !== 1);
onlineStore.cart.total -= 1200;

//  Checkout: move cart items to orders
onlineStore.orders.push({
    orderId: 5001,
    items: onlineStore.cart.items,
    total: onlineStore.cart.total,
    date: new Date().toISOString()
});

//  Clear the cart after checkout
onlineStore.cart.items = [];
onlineStore.cart.total = 0;

console.log(onlineStore);


// other example
var MyMusic =[
{
    "artist" : "Inna",
    "title" : "piano",
    "release_year" : 1980,
    "formats" : [
        "CD",
        "8T",
        "LP"
    ],
    "gold" : true
},
 {
    "artist": "Daft Punk",
    "title": "Random Access Memories",
    "release_year": 2013,
    "formats": [
        "CD",
        "Vinyl",
        "Digital"
    ],
    "gold": true
}
];

var kindOfFormat = MyMusic[0].formats[1];  
console.log(kindOfFormat);

// accessing nested array
var myPlants = [
    {
        "type" : "flower",
        list : [
            "rose",
            "tulip",
            "dandelion"
        ]
    },

    {
     "type": "tree",
       "list": [
        "oak",
        "pine",
        "maple"
       ]
    }

];

console.log(myPlants[0].list[1]);


// Record collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
        // artist and tracks not defined yet
    }
};

console.log(collection["2548"].artist);     // → Bon Jovi
console.log(collection["2468"].tracks[1]); // → Little Red Corvette
console.log(collection["1245"].tracks);    // → []


// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy["2548"].artist); 

function updateRecords(id , prop , value){
    if (value === "") {
        // If value is empty string → delete the property
        delete collection[id][prop];
    } else if (prop === "tracks") {
        // If property is 'tracks' → ensure it's an array and push the value
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        // Otherwise → just set/update the property
        collection[id][prop] = value;
    }
    return collection;
}


console.log(updateRecords(1245,"artist" , "Prince"));
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(5439, "tracks", "Dancing Queen"));
console.log(updateRecords(1245, "artist", ""));
 // this deletes artist

console.log(collection);