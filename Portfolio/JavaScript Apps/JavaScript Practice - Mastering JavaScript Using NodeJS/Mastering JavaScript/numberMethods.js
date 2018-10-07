let num = 103.533; 

let luckyNumbers = {
    luckyNumber: 0, 
}

console.log(num.toFixed(1)); //toFixed method removes decimal places 

console.log(Math.round(num)); 

console.log(Math.ceil(num)); 

console.log(Math.floor(Math.random() * num)); 

const generateNumber = (num) => {
    return {
        num: num, 
        randomNumber: () => (Math.floor(Math.random() * num)), 
    }
}

console.log(generateNumber(num).randomNumber()); 

luckyNumbers.luckyNumber = generateNumber(num).randomNumber(); 
console.log(`Your lucky Number is: ${luckyNumbers.luckyNumber}`); 

let start = 1 
let end = 8; 

let getRand = Math.floor(Math.random() * (end - start + 1) + 1); 

console.log(getRand);