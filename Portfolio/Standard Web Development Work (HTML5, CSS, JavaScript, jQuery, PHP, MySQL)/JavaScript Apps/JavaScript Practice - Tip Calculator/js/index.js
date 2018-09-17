/* JavaScript Fundamentals/Principles*/


/* JavaScript DataTypes 

    1. Number (int, floats)
    2. String  "" 
    3. Boolear True/False
    4. Undefined
    5. NULL 
    6. Symbol < ---- ES6 ----- >  
    7. Object

/*  JAVASCRIPT COMPARISONS 
    1. <! ---
    2. !==
    3. ===
    4. >=
    5. <=
    6. >
    7. <
    8. -->

/* Varables ::  (Containers that Contain Memory)
    1.var
    2. let (ES6)
    3. const (ES6)




*/ 


/* Functional / Procedural Programming */

const tipCalc = function() {

    let val = 0; 

    this.renderCalcData = function() {
        val10();
        val20();
        val30();
        val40();
        val50();
        val60();
        val70();
        val80();
        val90();
        valCust();
        
    }

   

    const val10 = function() {
        let button = document.getElementById("per10");
        let perBox = document.querySelector(".percentageBox"); 
            button.addEventListener("click", function() {
                val = 10; 
                perBox.innerText=val + "%";
                getVal(val); 
               
            }); 
    }
    
    const val20 = function() {
        let button = document.getElementById("per20");
        let perBox = document.querySelector(".percentageBox"); 
            button.addEventListener("click", function() {
                val = 20; 
                perBox.innerText=val + "%";
                console.log(val);
                getVal(val);  
            }); 
    }
    
    const val30 = function() {
        let button = document.getElementById("per30");
        let perBox = document.querySelector(".percentageBox"); 
            button.addEventListener("click", function() {
                val = 30;
                perBox.innerText=val + "%";
                console.log(val); 
                getVal(val); 
            }); 
    }
    
    const val40 = function() {
        let button = document.getElementById("per40");
        let perBox = document.querySelector(".percentageBox"); 
            button.addEventListener("click", function() {
                val = 40;
                perBox.innerText=val + "%";
                console.log(val); 
                getVal(val); 
            }); 
    }
    
    const val50 = function() {
        let button = document.getElementById("per50");
        let perBox = document.querySelector(".percentageBox"); 
            button.addEventListener("click", function() {
                val= 50;
                perBox.innerText=val + "%";
                console.log(val); 
                getVal(val); 
            }); 
    }
    
    const val60 = function() {
        let button = document.getElementById("per60");
        let perBox = document.querySelector(".percentageBox"); 
            button.addEventListener("click", function() {
                val=60;
                perBox.innerText=val + "%";
                console.log(val); 
                getVal(val); 
            }); 
    }
    
    
    const val70 = function() {
        let button = document.getElementById("per70");
        let perBox = document.querySelector(".percentageBox"); 
            button.addEventListener("click", function() {
                val=70;
                perBox.innerText=val + "%";
                console.log(val); 
                getVal(val); 
            }); 
    }
    
    
    const val80 = function() {
        let button = document.getElementById("per80");
        let perBox = document.querySelector(".percentageBox"); 
            button.addEventListener("click", function() {
                val = 80;
                perBox.innerText=val + "%";
                console.log(val); 
                getVal(val); 
            }); 
    }
    
    const val90 = function() {
        let button = document.getElementById("per90");
        let perBox = document.querySelector(".percentageBox"); 
            button.addEventListener("click", function() {
                val = 90;
                perBox.innerText=val + "%";
                console.log(val); 
                getVal(val); 
            }); 
    }

    const valCust = function() {
        let button = document.getElementById("custom");
        let perBox = document.querySelector(".percentageBox"); 
        button.addEventListener("click", function() {
            let val = prompt("Please enter your custom tip amount"); 
            if (val <=0 || val >= 1) {
                return (alert("Invalid tip Amount")); 
            }
            perBox.innerText=(val * 100) + "%";
            console.log(val); 
            getCustomVal(val); 
        }); 
    }

 

}

let perTip = new tipCalc(); 



let calculateTip = function(percent) {
    
    let submit = document.getElementById("submit");
    
    submit.addEventListener("click", function() {
        let x = document.getElementById("num1").value;
        let perBox = document.querySelector(".percentageBox"); 
        let y = (percent * .01) 
        let percentage = (y * x);
        let finalAmt = (percentage + (x * 1));
        perBox.style.background="rgba(230, 216, 22, 0.45);"; 
        perBox.innerText= "$" + finalAmt;

       return (console.log(finalAmt)); 
    });
}

let calculateCustomTip = function(percent) {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", function() {
        let x = document.getElementById("num1").value;
        let perBox = document.querySelector(".percentageBox");  
        let percentage = (percent * x);
        let finalAmt = (percentage + (x * 1));
        perBox.innerText= "$" + finalAmt;

       return (console.log(finalAmt)); 
    });
}


let getVal = function(number) {
    calculateTip(number); 
    return number; 
}

let getCustomVal = function(number) {
    calculateCustomTip(number); 
    return number; 
}
 
const display = true; 
const displayStrTemp = true;

const focusNum1 = function() {
    document.getElementById("num1").addEventListener("focusin", function() {
        this.removeAttribute("placeholder"); 
    });
    document.getElementById("num1").addEventListener("focusout", function() {
        this.setAttribute("placeholder", "Please enter your Total"); 
    });
}




var message = function(message, arg) { //ES5 Function Structure
    if (display === false || arg === false) {
        return; 
    } else {
        return console.log(message); 
    }
}

var message2 = (message, arg) => {
    if (displayStrTemp === false || arg !== true || arg !== false) {
        return;
    }
    promptUser(message, arg); 
}

var promptUser = (message, arg) => {
    if (arg === false || arg !== true || arg !== false) {
        return;
    }
    prompt(message); 
}

var promptQuestion = (message, arg) => {
    if (arg === false) {
        return;
    }
    let val = prompt(message);
    alert(val);
}

var calcPrompt = (activate) => {
    if (activate === false || acitvate === NULL) {
        return; 
    }
    let a = prompt("Please enter your first number"); 
    let b = prompt("Please enter your second number"); 
    let operator = prompt("Please enter your arthimetic operator you would like to use"); 

    switch(operator) {
        case "add": 
        case "addition":
        case "Add": 
        case "+":
            alert(a + b); 
            return; 
        case "subtract":
        case "subtraction":
        case "Subtract":
        case "-":
            alert(a-b); 
            return;
        case "divide":
        case "division":
        case "Divide":
        case "/": 
            alert(a/b);
            return; 
        case "multiply":
        case "multi":
        case "*": 
            alert(a*b); 
            return; 
        default: 
            alert("Invalid Value, Please try again"); 
    }
}




let loader = () => { //ES6 Function Structure
    if (true) {
        console.log("Window Fully loaded and is operational"); 
    }
    message("Addition Operator: " + (3+4) + " Subtraction Operator: " + (3-4) + " Multiplication Operator: " + (3/2) + " Division Operator:  " + (3%3) + " Modulus Operator: " + (3%1), true); 
    message("Hello World -- String with double quotes", true);    
    message('Hello There World\'s --- String with single quotes', true); 
    message("(5 > 6) : boolean operator output: " + (5 > 6), true); 
    message("(5 > 6) : boolean operator output: " + (5 < 6), true); 
    message("(3 === 3) output: " + (3===3), true)
    message ("(3!==3) " +  (3!==3));
    message(`----------String Template--------------
    Hello we are testing the ES6
    String template, yayyyyyyyyy
    yyyyyyyyyyyyyyyyyyyyyyyyyyyy`, true);
    message2(`What is your username?`, false);
    promptQuestion("What is your name?", false); 
    calcPrompt(false); 
    focusNum1();
    perTip.renderCalcData();
    
}


window.addEventListener("load", loader, false); 



