

var mainObject = {
    name: 'Conan',
    age: 22, 
    description: 'This is is my object',     
};

console.log(mainObject.name); 
console.log(mainObject.age); 
console.log(mainObject.description); 


class Player {
    constructor(name, age, content) {
        this.name = name; 
        this.age = age; 
        this.content = content; 
    }

    sayHello() {
        console.log('Hello friend!'); 
    }
}


class RealPlayer extends Player {
    constructor(name, age, content, skillLevel) {
        super(name, age, content); 
        this.skillLevel = skillLevel; 
    }

    sayName() {
        console.log("Hello my name is " + name); 
    }

    sayAge() {
        console.log('I am ' + age + ' years old')
    }

    sayContent() {
        console.log(content); 
    }

    saySkillLevel() {
        console.log('My skill level is ' + skillLevel); 
    }

}

var Conan = new RealPlayer("Conan", 22, 'yoooo', 400);

if (mainObject.name.toLowerCase() === Conan.name.toLowerCase()) {
    mainObject.name = 'conan'; 
} else {
    console.log("I'm sorry your not Conan"); 
}

console.log(mainObject.name);




