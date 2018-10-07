
let greetUser = function() {
    console.log("Welcome User!"); 
}

let greetUsername = function(name) {
    console.log('Welcome' + ' ' + name + '! '); 
}

let greetPerson = (name) => {
    console.log('Welcome' + ' ' + name + '! '); 
}

let squareRT = (num) => {
    return Math.sqrt(num); 
}

let square = (num) => {
    return num **2; 
}

let convertCelsius = farienheit => ((farienheit - 32) * (6/9)); 


greetUser();
greetUsername('Person'); 
greetPerson('Conan'); 
console.log(squareRT(81));
console.log(square(9));  
console.log(convertCelsius(32)); 


