// const values cannot not be reassigned


const obj = {
    name: 'conan',
    age: 22, 
    locations: [
        {
            state: 'Virginia'
        }, 
        {
            state: 'Florida'
        }
    ]
}

const {locations} = obj;

let name = 'Conan'; 
name = 'hi'; 

console.log(name); 

locations[0].state = 'idk';

console.log(locations[0].state);


const updateObj = {
    name: 'Conan',
    age: 22,
    location: 'Virginia' 
}

const update = (objName, name, age, location) => {
    objName.name = name; 
    objName.age = age; 
    objName.location = location; 
    return objName;    
}

update(updateObj, 'conan', 22, 'Florida'); 

console.log(updateObj); 
 
