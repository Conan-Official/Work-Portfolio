
let oldString = () => {
    return 'Hello this is the old String type' + 'with single quotes'
}

console.log(oldString()); 

let templateString = (name) => {
    return (
    `Hello ${name} this is the new String type using
     the backtick key`); 
}

console.log(templateString('Conan')); 

let totalAmt = 1000; 

const calculateTip = (totalAmt, tipAmt = .25) => {
    let finalTipAmt = totalAmt * tipAmt; 
    return `A 25% tip on $1000 is $${finalTipAmt}`; 
} 

console.log(calculateTip(totalAmt)); 