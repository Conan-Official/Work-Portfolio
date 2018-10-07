// const notes = ['Note 1', 'Note 2', 'Note 3']; 

// console.log(notes); 
// console.log(notes.length); 
// console.log(notes[0]); 
// console.log(notes[notes.length - 1]); 


// const todos = ['Learn JavaScript', 'Learn NodeJS', 'Learn ReactJS', 'Learn AngularJS']; 
// todos[3] = 'This is the new note 3'; 
// console.log(todos); 
// // console.log(todos[0]); 
// // console.log(todos[todos.length - 2]); 
// // todos.push('Learn Java', 'Learn Python', 'Learn GraphQL', 'Learn Databases'); 
// // console.log(todos); 
// // console.log(todos.pop()); 
// // console.log(todos);
// // console.log(todos.shift()); 
// // console.log(todos); 
// // todos.unshift('Learn JavaScript'); 
// // console.log(todos);

// //shift beginning of the array

// //pop / push end of the array 

// todos.splice(1, 1);
// console.log(todos);

// todos.splice(1, 0, 'Learn Databases');

// console.log(todos); 

// todos.splice(1, 1, 'Replacing Learn Databases'); 
// console.log(todos);


// //Challenge Time Arrays


// const list = ['t' , 'e', '3', 3, 5, 6]; 

// console.log(list.splice(2, 1)); 
// console.log(list);

// list.push(678);
// console.log(list); 

// list.shift(); 
// console.log(list);

const refresherTodos = []; 

refresherTodos.push('Learn JavaScript', 'Learn NodeJS', 'Learn ReactJS', 'Learn Python'); 
console.log(refresherTodos);

refresherTodos.pop(); 
console.log(refresherTodos);

refresherTodos.shift(); 
console.log(refresherTodos); 

refresherTodos.unshift('Learn JavaScript'); 
console.log(refresherTodos);

refresherTodos.splice(2, 1); 
console.log(refresherTodos);

refresherTodos.splice(2, 0, 'Learn ReactJS');
console.log(refresherTodos);

console.log(refresherTodos[refresherTodos.length - 1]); 

refresherTodos[3] = 'Learn Python';
console.log(refresherTodos);


refresherTodos.forEach((item, index) => {
    console.log(item, index); 
});


//Challenge 

const challenge = []; 

challenge.push('This is the first item', 'This is the second item'); 

challenge.forEach((item, index) => {
    console.log(`${index}. ${item}`); 
});

challenge.splice(0, 0, 'This is the new first item');
console.log(challenge); 
challenge.push('This is the last item')
console.log(challenge); 





