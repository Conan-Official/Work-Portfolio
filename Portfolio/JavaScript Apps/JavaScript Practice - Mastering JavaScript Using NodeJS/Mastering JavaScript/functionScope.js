let timer = 0; 


const runTimer = (timer) => {
    while (timer !== 100) {
        timer++;
        console.log(timer);  
    }
    if (timer <= 100) {
        console.log('Done!'); 
    }   
}

runTimer(timer);


let age = 22; // Global Variable

const checkAge = function(age) { //Global Function
    if (true) { // Local condition
        age = 22;
        if (true) { // Child of the Local condition
            age = 23;
            console.log(age);
        }
    }
}

checkAge(age); // Calling or invoking the global function check Age; 

