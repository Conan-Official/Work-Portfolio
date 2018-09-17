
let active = true;

let person = {
    position: "Front End Web Developer",
    age: 22 + " ",
    location: "United States"

};

const edit = (s, t, r) => {
    let position = s; 
    let age = t; 
    let location = r; 
    position = prompt("Please enter your new job position"); 
    console.log(position);
    age = prompt("Please enter your new age");
    console.log(age);
    location = prompt("Please enter your new location"); 
    console.log(location); 
    displayEditedVal(position, age, location , false); 

}

let displayVal = (s, t, r, active) => {
    if (this.active === false) {
        console.log("User is editing his profile"); 
        return;
    }
    let positionContent = document.querySelector("#position");
    let ageNum = document.querySelector("#ageNum");
    let locationContent = document.querySelector("#locationContent");
    positionContent.innerText = s;
    ageNum.innerText = t; 
    locationContent.innerText= r; 

}

let displayEditedVal = (s, t, r, active) => {
    if (this.active === true) {
        console.log("Editing Mode is not Enabled"); 
    }
    let positionContent = document.querySelector("#position");
    let ageNum = document.querySelector("#ageNum");
    let locationContent = document.querySelector("#locationContent");
    positionContent.innerText = s;
    ageNum.innerText = t; 
    locationContent.innerText= r; 
    
}

let editProfileBtn = () => {
    let editt = document.querySelector("#edit");
    editt.addEventListener("click", function() {
        edit(); 
    });
}


const loader = () => {
    console.log(displayVal(person.position, person.age, person.location, active));
    editProfileBtn();
}



window.addEventListener("load", loader , false); 
