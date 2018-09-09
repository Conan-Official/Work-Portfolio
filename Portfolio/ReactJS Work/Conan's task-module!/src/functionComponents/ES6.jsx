import React from "react"; 




//Const
const AGE = {
    years: ["20", "21", "22"], 
};

AGE.years.push("23", "24", 25, 26); 
console.log(AGE); 


//let
function doSmth() {
    age = 22; 
    console.log(age); 
}

let age; 
doSmth(); 

if (true) {
    let age; 
    age = 44; 
    console.log(age);
}

//Arrow Function Arguments
const ADD = (x,y) => {
    return console.log(x + y); 
}; 

ADD(4, 4);

const DIVIDE = (x , y) => console.log(x/y); 

DIVIDE(5, 5); 


let subtract = a => a - 5; 

console.log(subtract(5));

setTimeout(() => console.log("Hello"), 1000); 

//paramters

let compare = (number, compare) => {
    return number === compare; 
};


console.log(compare(10,10)); 

//parameters with defaults

const COMPARE = (number = 0, compare = 5) => {
    return console.log(number === compare);
};

COMPARE();

//object literals 
 
    // defaults to name and years
let name = "Conan"; 
let years = 22; 
let letter = "letter"; 

const INFO = {
    name, 
    years,
    [letter]: "C", 
    log() {
        console.log(this.name, this.years); 
    },
    "log2"() {
        console.log(this.name + "!", this.years); 
    }
};

console.log(INFO); 
INFO.log(); 
INFO["log2"](); 
console.log(INFO["letter"]); 

//arrays with the rest operator

let numbers = [1, 2, 3, 4, 5];

let addNumbers = (numbers) => {
    let result = 0; 
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i]; 
    }
    return result;
}

console.log(addNumbers(numbers)); 


let subNumbers = (...numbers) => {
    let result = 0; 
    for(let i = 0; i < numbers.length; i++) {
        result -= numbers[i]; 
    }
    return result;
}

console.log(subNumbers(2,2,2,2));


//arrays with the seperator operator 

let newNumbers = [5,4,3,2,1];

console.log(Math.max(...newNumbers));
console.log(...newNumbers); 

/*
// for of loop : creates a shorcut to display a single array
let testResults = [10, 50, 30, 90];

for (let testResult of testResults) {
    console.log(testResult); 
}

*/

//template literals (Allows us to write multiline strings)
let namme = "Conan"; 
let more = "more"; 
let description = `This is a string
and I am loving ${namme}
:) ${more + '!!!!!'}
`;


//Destructuring Arrays

let num = [1,2,4]; 

let [a, b, c] = num; 

console.log(a, b, c); 

console.log(description); 

let restNum = [1,2,3]; 

let [aa, ...bb] = restNum; 

console.log(aa, bb, "Hi"); 
console.log(bb); 

//Destructuring Variables

let an = 5; 
let bn = 6; 

[bn, an] = [an, bn]; 

console.log(an);
console.log(bn);


//Ignoring a desturctred array

let nb = [1, 2, 3]; 

let [aaa, ,bbbb ] = nb; 

console.log(aaa,bbbb); 

//Declaring your array 

let [aaaa, bbb] = [12,2]; 

console.log(aaaa,bbb);



//Destructuring objects

let location = "location"; 

let obj = {
    namee: "Conan", 
    agee: 22, 
    [location]: "Virginia", 
};


let {namee, agee, [location]: location1} = obj; 

console.log(namee,agee, location1); 
console.log(obj[location]);
















let ES6 = () => {
    return(<React.Fragment>
        <p>Hi</p>
        </React.Fragment>);
}

export default ES6; 