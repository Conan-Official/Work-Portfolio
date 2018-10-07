isVegan = true; 
isNotVegan = true; 

if (isVegan === true && isNotVegan === true) {
    console.log('Serve Meat and Vegietables')
} else if (isVegan === true && isNotVegan === false) {
    console.log('Serve only Vegetables')
} else {
    console.log('These are meat eaters serve them meat!!!!!!!!!!!!!!'); 
}

let isNum = 6; 

if (isNum < 6) {
    console.log('I\'m sorry but the number is too low');
} else if (isNum > 6) {
    console.log('I\'m sorry but the number is too high');
} else {
    console.log('You have entered the correct number. The number is ' , isNum); 
}