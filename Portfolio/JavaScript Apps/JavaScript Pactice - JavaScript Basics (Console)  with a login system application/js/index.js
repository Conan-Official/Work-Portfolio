/* JavaScript Fundamentals/Principles*/


/* JavaScript DataTypes 

    1. Number (int, floats)
    2. String  "" 
    3. Boolear True/False
    4. Undefined
    5. NULL 
    6. Symbol < ---- ES6 ----- >  
    7. Object

/*  JAVASCRIPT COMPARISONS 
    1. <! ---
    2. !==
    3. ===
    4. >=
    5. <=
    6. >
    7. <
    8. -->

/* Varables ::  (Containers that Contain Memory)
    1.var
    2. let (ES6)
    3. const (ES6)




*/ 


// Message System


var message = function(message, arg) { //ES5 Function Structure
    if (display === false || arg === false) {
        return; 
    } else {
        return console.log(message); 
    }
}

var message2 = (message, arg) => {
    if (displayStrTemp === false || arg !== true || arg !== false) {
        return;
    }
    promptUser(message, arg); 
}

var promptUser = (message, arg) => {
    if (arg === false || arg !== true || arg !== false) {
        return;
    }
    prompt(message); 
}

var promptQuestion = (message, arg) => {
    if (arg === false) {
        return;
    }
    let val = prompt(message);
    alert(val);
}

//case statement

var calcPrompt = (activate) => {
    if (activate === false || acitvate === NULL) {
        return; 
    }
    let a = prompt("Please enter your first number"); 
    let b = prompt("Please enter your second number"); 
    let operator = prompt("Please enter your arthimetic operator you would like to use"); 

    switch(operator) {
        case "add": 
        case "addition":
        case "Add": 
        case "+":
            alert(a + b); 
            return; 
        case "subtract":
        case "subtraction":
        case "Subtract":
        case "-":
            alert(a-b); 
            return;
        case "divide":
        case "division":
        case "Divide":
        case "/": 
            alert(a/b);
            return; 
        case "multiply":
        case "multi":
        case "*": 
            alert(a*b); 
            return; 
        default: 
            alert("Invalid Value, Please try again"); 
    }
}



// Conditional Executions & Statements
let name = "Conan"; 
let age = 22; 
if (name === "Conan") {
    console.log("Welcome Conan")
} else {
    console.log("I'm sorry you're not Conan.");
}

name = "conan"; 

if (name === "Conan") {
    console.log("Right on Conan!");
} else if (name === "conan") {
    console.log("Right on! conan with a loowwwerrr Case!!!")
}


name = "Conannnn";

//Logical Operators 

if (name === "Conan" || name === "conan") {
    console.log("Your name is " + name); 
}

if (name === "Conan" || name === "conan" && age === 22) {
    console.log("We are on a row " + name + " you are " + age + " Sweeeetttt!!!!!"); 
}

if (!(name === "Conan") || !(name === "conan")) {
    console.log("I see, I see, so your not Conan XD"); 
}

console.log(!true);
console.log(!false); 

// Function Declaration 

function sayHello(message) {
    console.log(message);
}

function sayHi() {
    console.log("hi! :)"); 
}


//Function Expression 
 
var sayBye = function() { // Anonymous Function
    console.log("Goodbye :(");
}

let sing = function(song) {
    console.log(song); 
}

let calc = function(a ,b) {
    let multiply = a * b; 
    console.log(multiply); 
}

//Using return statments with function declarations and function expressions with anynomymus functions

function add(a , b) {
    return a + b; 
}

let subtract = function(a, b) {
    return a - b; 
} 


let finalAmt = add(5,5); 
let finalAmt2 = subtract(10,10); 

let check = (a,b) => {
    if (a >= 10 || b >=10) {
        return "This task is quite difficult";  
    } else {
        return ("This task is fairly easy " + a * b); 
    }
}

let functionList = [function apples() {
    console.log("apple"); 
}]; 

let animals = ["cat", "dog", "lion", "cheetah"];

let array1 = [
    ["apples", "bananas", "oranges", "peaches"], 
];

let displayDoubleArray = () => {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1[i].length; j++) {
            console.log(array1[i][j] + "!!!!"); 
        }
    }
}

let person = {
    name: "Conan",
    age: 22, 
    minding: false, 
    starting: 1, 
}; 




let loader = () => { //ES6 Function Structure
    if (true) {
        console.log("Window Fully loaded and is operational"); 
    }
 /*   message("Addition Operator: " + (3+4) + " Subtraction Operator: " + (3-4) + " Multiplication Operator: " + (3/2) + " Division Operator:  " + (3%3) + " Modulus Operator: " + (3%1), true); 
    message("Hello World -- String with double quotes", true);    
    message('Hello There World\'s --- String with single quotes', true); 
    message("(5 > 6) : boolean operator output: " + (5 > 6), true); 
    message("(5 > 6) : boolean operator output: " + (5 < 6), true); 
    message("(3 === 3) output: " + (3===3), true)
    message ("(3!==3) " +  (3!==3));
    message(`----------String Template--------------
    Hello we are testing the ES6
    String template, yayyyyyyyyy
    yyyyyyyyyyyyyyyyyyyyyyyyyyyy`, true);
    message2(`What is your username?`, false);
    promptQuestion("What is your name?", false); 
    ---------------------------------------------------------------------------------------------------------*/
    sayHello("Hello");
    sayHi();
    sayBye();
    sing("Dessssssssppaaaaaacccciiiiitttoooo");
    sing("Querio Respirar tu cuello despacito");
    sing("Deja que de digas cosas al oido");
    sing("para que quieras si no estas conmigoooooo");
    calc(10,10); 
    console.log(finalAmt);
    console.log(finalAmt2);  
    console.log(check(5,5)); 
    console.log(animals[1]); 
    console.log(animals);
    console.log(functionList); 
    displayDoubleArray();
    animals.shift("cat"); 
    console.log(animals);
    animals.pop(); 
    console.log(animals);
    animals.push("Conan", "conan"); 
    console.log(animals);
    console.log(animals);
    animals.sort(); 
    console.log(animals); 
    let myNewAnimals = animals.concat(["money", "funny", "bunny"]);
    console.log(myNewAnimals);
    myNewAnimals.sort();
    console.log(myNewAnimals);
    console.log(person);  
    
    
   
}


window.addEventListener("load", loader, false); 



