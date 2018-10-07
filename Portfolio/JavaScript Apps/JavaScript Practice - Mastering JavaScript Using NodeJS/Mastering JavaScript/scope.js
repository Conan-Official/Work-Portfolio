// JavaScript uses lexical scoping  (Static Scope)

//Global Scope - Contains the code that is defined outside of codeblocks

//Local Scope = Contains the code inside a code black; 

//Note: You can use any code that is within the same scope or any parent or ancestor scope 



let var1 = 'var1'; //Global Scope

if (true) {
    //Local Scope
    console.log(var1); // Var1 is int the Parent Scope 
    let var2 = 'var2';
    let var4 = 'var4'; 
    console.log(var2); 
    
    if (true) { // New Local Scope (Parent = var 1 / var 2 scape)
        console.log(var4); 
    }
}

//console.log(var2);  This wouldn't work beacuse var 2 is in a local scope and cannot be accessed within the global scope
// because there isn't a glabal var2 variable 