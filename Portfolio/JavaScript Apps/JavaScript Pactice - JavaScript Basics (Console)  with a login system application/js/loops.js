

let opacity = 0; 
let testtt = setInterval(function() {
    if (opacity > 1.0) {
        clearInterval(testtt);
    }
    opacity = opacity + .05; 
    console.log(opacity); 
}, 10);



let todoList = [
    "Wake Up",
    "Brush Teeth",
    "Make Bed", 
    "Eat Breakfast", 
    "Go to Work", 
]; 

let numberss = [1,1,1,1,1];
let numbersss= [2,2,2,2,2]; 


// for loop testing what i does (loops from 0 to 4)(5 items)
for (let i = 0; i < todoList.length; i++) {
    console.log(i);
}

//for loop that outputs every item within the array
for (let i = 0; i < todoList.length; i++) {
    console.log(todoList[i]); 
    
}

//for loop that adds a value/datatype to each item 
for (let i = 0; i < todoList.length; i++) {
    console.log(todoList[i] + "!");
}

let sum = 0;

//for loop that adds each number within the array
for (let i=0; i < numberss.length; i++) {
   console.log(sum += numberss[i]); 
}

console.log("------------------------------------------------------");

//ex2::

 sum = 0;

for (let i =0; i < numbersss.length; i++) {
  
   console.log(sum += parseInt(numbersss[i]));
}


//Removing data from an array 
let removeTodoList = todoList.length;
for (let i = 0; i < removeTodoList; i++) {
    todoList.pop();
    console.log(todoList); 
}


//whileloop 

let counter = 0; 

while (counter <= 10) {
    console.log(counter); 
    counter++; 
}

counter = 10

while (counter >= 0) {
    console.log(counter); 
    counter--; 
}


//do while 


let counterDoWhile = 0; 

do {
    console.log("This counter is starting"); 
    console.log(counterDoWhile);
    counterDoWhile++; 
} while(counterDoWhile < 10); 


 counterDoWhile = 10; 

do {
    console.log("This counter is starting"); 
    counterDoWhile--; 
} while(counterDoWhile > 0); 

let itemsss = ["Home", "About", "Portfolio", "Contact"];

//for each loop method (ECMAScript 5 Update); 

//Outputing every items within a list
itemsss.forEach(function(items) {
    console.log(items); 
});

let calcData = 0; 
let data = [5, 5, 3, 3, 2]; 

//Adding each number in the the foreach loop method

data.forEach(function(items) {
   console.log(calcData += items);
});

//Creating a seperate function for the for eacch function.

let logTodos = (items) => {
    console.log(items); 
}

itemsss.forEach(logTodos);

