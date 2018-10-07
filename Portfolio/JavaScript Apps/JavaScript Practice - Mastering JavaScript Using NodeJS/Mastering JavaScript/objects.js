const obj = {
    name: 'conan',
    age: 22, 
    passwords : [
        {
            password: 'This'
        },
        {
            password: 'is'
        },
        {
            password: 'cool', 
        }
    ],
}


console.log(obj); 
console.log(obj.name);
console.log(obj.age);
console.log(obj.passwords); 

console.log('This is the first password', obj.passwords[0].password); 
console.log('This is the second password', obj.passwords[1].password); 
console.log('This is the third password', obj.passwords[2].password); 

obj.passwords[0].password = 'awesome and amazing!!!!'

console.log(obj.passwords[0].password); 