let database1 = [
    {
        username: "Conan",
        password: "password"
    },

    {
        username: "Billy", 
        password: "passwrod123",
    }, 

    {
        username: "Katie",
        password: "pass"
    }
];


let feed1 = [
    {
        username: "Conan",
        feed: "This is my feed", 
    },

    {
        username: "Billy",
        password: "The is my feed 1",
    }, 

    {
        username: "Katie",
        password: "This is my feed 2"
    }
]


let usernameInput = prompt("Please enter your username"); 
let passwordInput = prompt("Please enter your password"); 


let checkisValid = (username1, password) => {
    for (let i = 0; i < database1.length; i++) {
        if (database1[i].username === username1 && database1[i].password === password) {
            return true;
        } 
    }
        return false;
}

let signIn1 = (username, password) => {
    let check = checkisValid(username, password); 
    if (check === true) {
        console.log(feed1);
    } else {
        console.log("Sorry you have entered the wrong username and password");
    }
} 

signIn1(usernameInput, passwordInput);




