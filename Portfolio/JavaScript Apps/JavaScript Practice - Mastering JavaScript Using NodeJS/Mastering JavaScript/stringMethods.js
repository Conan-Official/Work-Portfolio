let name = 'Conan'; 
let trimName= '   Conan';
let age = 22;

//String length method (array)
console.log(name.length);

// Changes a string to uppercase
console.log(name.toUpperCase()); 

//Changes a string to lowercase
console.log(name.toLowerCase()); 

//Parses number to string

console.log(age.toString());

console.log(name.includes('Co')); 


console.log(trimName.trim()); 

//Challenge

 

const checkValid = function(name1) {
    name1.trim(); 
    if (name1.length <= 9 && !name1.includes('password')) {
        return true; 
    } else {
        return false; 
    }
}

console.log(checkValid(name)); 
console.log(checkValid ? 'Password Passes' : 'Invalid Password, please create a new one please');

