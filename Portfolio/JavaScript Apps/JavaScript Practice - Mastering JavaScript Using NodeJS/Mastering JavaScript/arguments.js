// Multiple arguments
const calculate = (a, b, c) => a + b + c; 

console.log(calculate(5,6,7));  

//Default arguments 

const defaultCalc = (a = 5, b = 6, c= 7) => a + b + c; 

console.log(defaultCalc());

console.log(defaultCalc(1, 2, 3)); 

let getScoreText = (name ="Conan", score = 100000) => name + score; 

console.log(getScoreText()); 

console.log(getScoreText('conan', 100000)); 



const tipCalc = (total, tip = .2) => total * tip; 

console.log('Please tip the waiter', tipCalc(10), 'dollars'); 