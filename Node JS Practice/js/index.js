
/* 
 --@author Conan Mafnas
 -- Node.js Works
    
 -- Node is a C++ Program
        Includes Chromes V8 JavaScript Engine

 --- 'USE THE COMMANDS PROMPT!!!!'
        - Executes the JS CODE!!!

    Node.js = Asychronus archritecture 
        - As a request is received by the server 
         Single Thread is allocated to mutiple request
            - This thread then goes to the event event queue to 
              queue the data from the request then move on to another
              request  

    Installing Node -- > 
        
    Check node version: node --version

        Install Node from the Node.js Website

    Asynchronous archritecture 
        -- Where a thread can do multiple work
            Ex: Server serving/allocate  multiple clients / customers
    
    Sychronous archritecture
        -- Where a thread can only serve one client at a time
            Ex: Server can only server or be allocated to one customer/client
            at one time

    Note: 'Window' || 'Document' Objects are not valid
        Reason: Node.js is a runtime environment that doesn't use the
                Browser to run the code
    Object: 'Global' replaces the window && document syntax

    Imp Note:  Every Node application has at least one file as the 
    main module/class file




    
    */

// Procedural / Functional Programming 
    // ---  object literal

let information = {
    name: "Conan", 
    more: {
        Location: "Virginia", 
        age: 22, 
    }, 
}; 

let name = information.name;
let location = information.more.Location; 
let age = information.more.age; 

function displayMessage() {
    console.log("My name is ", name, " " + "and I am ", age, " years old " + 
    "I am from", location, "and will be moving to Tampa, Fl soon!"); 
}

/* -------------------------------
    
    Defining a function
    Ex: 
    const 'name' = function() {
    
    }
-------------------------------------  */



/* <  ----------  Setting a Interval ---------->

    = Global.setInterval || let name = setInterval(function(){}); 
       
     ** Note: Always use a check of either a counter or a css property
              that is transforming
    <-------------------------- ------------------> */


const initialize = function() {
    
    let counter = 10;
    
    this.render = function() {
        startInterval();
    }

    let startInterval = function() {
        let timer = setInterval(function() {
            if (counter <= 0) {
                clearInterval(timer);
            }
            counter = counter - 1; 
            displayMessage(); 
        }, 1000);
    }
}

let initializeInterval = new initialize();







    /*---------------------------*/

    //Adding a module/class in another js doc in node.js

    const printer = require('./module.js');
    const functions = require('./function.js'); 

    //-----------------------------------------//


function run() {
    console.log("Working!");
    printer.log("This is the logger function coming from the module.js module!"); 
    functions(); 
    initializeInterval.render();
    
}

run(); 




