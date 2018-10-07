//  === equality operator

//  !== not equal operator

// < less than operator

// > greater than operator

// <= less than or equal to 

// >= greater than or equal to 


let bool = false; 
bool = true; 


let temp = 31; 

let isFreezing = temp === 32; 

isFreezing = temp < 32; 

isFreezing = temp !== 32; 

isFreezing = temp >= 31; 

isFreezing = temp <= 32; 

if (temp === 31) {
    console.log('It\'s freezing out here!'); 
}


console.log(isFreezing); 


let age = 7; 

let isChild = age <= 7; 

if (isChild) {
    console.log('You qualify for the child discount'); 
}

console.log(isChild);

let isSenior = age >= 65; 

if (isSenior) {
    console.log('You qualify for the senir discount'); 
}

console.log(isSenior); 

