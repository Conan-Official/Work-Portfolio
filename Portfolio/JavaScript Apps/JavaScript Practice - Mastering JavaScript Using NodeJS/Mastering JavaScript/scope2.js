// Shadowing the Global Scope name

// The global scope of let name is shadowed from the local let name. In other words, the let name in the local scope overrrides the parent scope let name

let name = 'Conan'

if (true) {
    let name = 'conan'; 
    if (true) {
        console.log(name); 
    }
}