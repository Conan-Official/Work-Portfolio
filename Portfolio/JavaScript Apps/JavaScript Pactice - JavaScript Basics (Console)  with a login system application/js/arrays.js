/*    Arrays       */


let pets = ["cat", "dog", "bear", "lion"]; 
console.log(pets); 

pets.shift("cat"); 
console.log(pets); 

pets.pop(); 
console.log(pets); 

pets.push("Conan, conan, nanoc, nan, oc"); 
console.log(pets); 

let newPetsList = pets.concat(["ButterFish", "ButterToast"]);
console.log(newPetsList); 

newPetsList.sort(); 
console.log(newPetsList); 

for (let i = 0; i < newPetsList.length; i++) {
    console.log(newPetsList[i]); 
}

let functionArray = [function apples() {

}, function pears() {

}, function blueberries() {

}]; 


console.log(functionArray); 


let mixedArray = [1, "" , false, function apples() {
    console.log("Hello"); 
}]; // Will cause performance issues if used 

console.log(mixedArray); 
console.log(mixedArray[3]); 


let doubleArray = [
    ["Hello", "My", "Name", "is", "Conan"],
]; 

for (let i = 0; i < doubleArray.length; i++) {
    for (let j= 0; j < doubleArray[i].length; j++) {
        console.log(doubleArray[i][j]); 
    }
} 

//Finding the Lowst value
let num1 = [5,4,3,2,1, 20, 40]; 
let findLowest = function(list) {
    let lowest = list[0];
    for (let index = 0; index < list.length; index++) {
        if (list[index] < lowest) {
            lowest = list[index]; 
        }
    }
    console.log(lowest); 
}

findLowest(num1); 

//Searching for a name

let checkArray = ["Conan", "conan", "Lion", "Wolf", "Shark"];
checkArray.forEach(function(value) {
       if (value === "Conan") {
           console.log("We have found " + value + " in our database"); 
           return;
       }
});


// Finding the highest value
let num = [5,4,3,2,1, 20, 40]; 

let findHighest = function(list) {
    let heighest = list[0];
    for (let index = 0; index < list.length; index++) {
        if (list[index] > heighest) {
            heighest = list[index]; 
        }
    }
    console.log(heighest); 
}

findHighest(num); 



//Adding values 

let numbers = [5, 4, 3, 2, 1]; 
let total = 0; 

numbers.forEach(function(item) {
    total+=item;
    console.log(total);  
}); 

/* 

one-dimensional-array: array["","","","",""];
two-dimentsional-array: array[["","","",""]]; 

Array methods 

array.push  .. appends to the array
array.shift(target) ... targets the item in the index and removes it
array.pop ... removes the last item in the array
array.concat  === let newArray = array.concat(["item1", "item2", .. ]);  ... creates a new array with new array items 
array.foreach(function(item)) === goes through every element ('item') in the array to perform a desired function; 






*/ 