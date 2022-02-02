/**
 * * START
 * * PROGRAM Pick up Ball
 * * CREATE VARIABLE elbowAngle
 * * CREATE VARIABLE fingersClosed
 * * IF fingersClosed is true
 * *    SET fingersClosed to false
 * * SET elbowAngle to 90 degrees
 * * SET fingersClosed to true
 * * SET elbowAngle to 0 degrees
 * * END
 */



// * let, const
let greatFood = "Kvass and Borsht";
let moreGreatFood = 'Pau Bhaji';
let twoFoodsToTry = `try some ${greatFood} and ${moreGreatFood}`;
console.log(twoFoodsToTry);
// * how many characters are in great food?
console.log(greatFood.length);

// * boolean example
let becomeDesigner = 1;
let stuGrowTentacles = 0;

// * floats and integers
let myFloat = 3.14;
let myInteger = 26;

// * randomness
Math.random();  // * gives us a number between 0 and 1
console.log(Math.random());

// * arrays
let ourCollections = ["Seashells", "Necklaces", "Art Toys", "Stones", "Shoes", "Hats", "Stickers", "Movies", "art supplies", "games"];

ourCollections.push("books")

function printArray(arr){
    console.log(arr.length);
    let myList = document.createElement("ul");
    //* a for loop
    for(let i=0; i<arr.length;i++){
        let myItem = document.createElement("li");
        myList.appendChild(myItem);
        myItem.innerText = arr[i];
        console.log(arr[i]);
    }
    let pageBody = document.querySelector("body");
    pageBody.appendChild(myList);
}
printArray(ourCollections);

//* object
let laptop = {
    manufacturer: "asus",
    hdSizeInTb: 1,
    ramInGb: 16,
    software: ["adobe XD", "microsoft word", "illustrator", "photoshop", "GTFI"],
    madeOfJello: false,
    runGame: function(gameType){
        console.log(`I will now run ${gameType}`);
        if(gameType=="GTFI"){
            console.log("Damn, thats a good game!");
        }
    }
}
/**
 * * = is different from ==
 * * = sets a value
 * * == compares values
 * * === compares value and datatype
 */
console.log(laptop["manufacturer"]);
console.log(laptop.software[1]);
laptop.runGame("Pong");






