
var ES5 = 'This is the old EcmaScript variable that can be reassigned'; 
console.log(ES5);


let ES6Let = 'This is the new EcmaScript variable that can be reassigned, the new var';
console.log(ES6Let); 
ES6Let = "This has been reassigned"; 
console.log(ES6Let); 

const ES6Const = 'This is the variable that cannot be reassigned'; 
console.log(ES6Const); 


let firstName = "Conan";
let lastName = "Mafnas"; 

const fullName = firstName + ' ' +  lastName; 

console.log(fullName); 


let city = "Manassas"; 
let country = "United States"; 

const location = city + ", " + country; 

console.log(location); 