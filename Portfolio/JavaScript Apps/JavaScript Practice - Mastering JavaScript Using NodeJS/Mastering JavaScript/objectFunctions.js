const Person = {
    name: '',
    age: '', 
    location: '',
}

//updating values to a object
let adjustObject = (name, age, location) => {
    Person.name = name; 
    Person.age = age; 
    Person.location = location; 
    return Person; 
}

console.log(adjustObject('Conan', 22, 'Virginia')); 

const {name,age,location} = Person; 

let message = (name, age, location) => {
    return console.log(`Hello my name is ${name} and I am ${age}. I currently live in ${location}`); 
}

message(name, age, location); 

let mainNumber = 12; 

//Creating a object within a function; 

let displayObj = (mainNumber) => {
    return {
        mainNumber1:  mainNumber,
        output() {
            console.log('Hello');
            console.log(`The Main Number is ${this.mainNumber1}`); 
        }
    }
}


console.log(displayObj(mainNumber).mainNumber); 
displayObj(mainNumber).output(); 