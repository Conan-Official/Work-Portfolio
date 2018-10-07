let number = 5; 
let maxInt = 10; 

const luckyNumber = {
    luckyNumbers: [], 
}

const addLuckyNumber = (... num) => {
    return luckyNumber.luckyNumbers.push(num); 
}

addLuckyNumber(number, 5, 6);

const generateRandomNumber = (num) => {
    return {
        num: num, 
        randomNumber: Math.floor(Math.random() * num + num), 
    }
}

const newArray = luckyNumber.luckyNumbers.reduce((acc, array) => {
  return acc + array;   
},[]); 


console.log(`This is the new randomized value ${generateRandomNumber(newArray[0]).randomNumber}`); 

const newNumber = generateRandomNumber(newArray[0].randomNumber); 

const checkMax = (max, newNum) => {
    if (newNum <= max) {
        return `This number is perfect for use!`; 
    }
}

console.log(checkMax(maxInt, number));


