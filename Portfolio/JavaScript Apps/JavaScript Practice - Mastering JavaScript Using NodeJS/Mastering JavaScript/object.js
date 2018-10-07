const Book = {
    title: 'Harry Potter', 
    author: 'J J Abrham', 
    publisher: 'Harry Potter Corp',
    year: 1972, 
}

console.log(Book); 

console.log(Book.title);
console.log(Book.author); 
console.log(Book.publisher); 
console.log(Book.year); 

let checkObjEntries = Object.entries(Book).map((book) => { // book = keys and values of Book
    return book[0] + ' - ' +  book[1]; // book [0] = key //  book[1] = values
})

let checkObjValues = Object.values(Book).map(values => values); 

console.log(checkObjEntries); 
console.log(checkObjValues);


//Challenge 

let person = {
    name: 'Andrew', 
    age: 27, 
    location: 'Philidephia',
    country: 'United States'
}

console.log(person); 

person.name = 'Conan' 
person.age = 22 
person.location = 'Virginia'
person.country = 'United States'

console.log(person); 