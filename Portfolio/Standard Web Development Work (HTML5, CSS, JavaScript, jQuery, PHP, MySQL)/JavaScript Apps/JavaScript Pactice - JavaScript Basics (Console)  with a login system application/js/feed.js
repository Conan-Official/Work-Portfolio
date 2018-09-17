let database = [
    {
        username: "Conan", 
        password: "password"
    }
];


let feed = [
    {
        username: "conan", 
        feed: `Woooo I'm having funnnn!!!!!!!XD`,
    }, 

    {
        username: "nanoc", 
        feed: `creating a feed and a sign in is fun`, 
    },
];



let signIn = (username, password) => {
    let usernameInput = prompt("Please enter your username");
    let passwordInput = prompt("Please enter your password");

    if (usernameInput != username && passwordInput != password) {
        console.log("I'm sorry either your username or password is incorrect "); 
        return;
    } else if (usernameInput === username && passwordInput != password) {
        console.log("Invalid password");
        return; 
    } else {
        console.log("Welcome " + username); 
        console.log(feed[0].username); 
        console.log(feed[0].feed); 
        console.log(feed[1].username); 
        console.log(feed[1].feed); 
    }
    
}

//signIn(database[0].username, database[0].password);