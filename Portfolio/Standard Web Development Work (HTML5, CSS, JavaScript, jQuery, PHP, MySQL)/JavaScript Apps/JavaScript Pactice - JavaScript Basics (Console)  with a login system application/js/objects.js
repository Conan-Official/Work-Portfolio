/*  objects  */


// object literals 


let human = {
    name: "Conan", 
    age: 22, 
    location: {
        state: "Virgina", 
        country: "United States", 
    }, 
    powers: ["fly", "superstrength", "everythingproof"],
    action: () => {
        console.log("Letttssss GOooOOOOOoooOOOOOOoooooOOOO!!!!!");
    }
};


//Accessing properties within an object

console.log(human); 
console.log(human.name + " " + human.location.state); 

human.favoriteFood = "Hibachi Steak"; 
human.location.state = "Florida"; 

console.log(human.favoriteFood); 
console.log(human.location.state); 
console.log(human); 

console.log(human.powers[2]); 
human.action(); 

let list = [
    {
        username: "Conan", 
        passord: "mafnas"
    }, 
    {
        username: "conan", 
        password: "Mafnas", 
    }, 
];

//Accessing items of an object within an Array
console.log(list); 
list[0].password = "Mafnasxd"; 
console.log(list[0].password); 



let obj = {
    name: "Conan", 
    favoriteFoods: ["Apple", "Banana", "Orange"],
    age: 22, 
    sayHello: function() {
        console.log("Hello");
    }, 
}

let objArray = [
    
    {
        name: "Conan", 
        age: 22, 
    }, 

    {
        name: "conan", 
        age: 22, 
    }

]; 


let testArray = [["Home"]]; 






console.log(obj.name); 
console.log(obj.favoriteFoods[0], obj.favoriteFoods[1]); 
console.log(obj.sayHello()); 
console.log(objArray[0].name, objArray[1].name); 
console.log(testArray[0][0]);