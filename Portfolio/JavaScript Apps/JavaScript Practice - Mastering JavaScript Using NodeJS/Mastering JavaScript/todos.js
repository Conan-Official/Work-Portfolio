const todos = [
    {
        title: 'Note 1',
        completed: true,
    }, 
    {
        title: 'Note 2',
        completed: false,
    }, 
    {
        title: 'Note 3',
        completed: false, 
    },
]


const sortTodos = (todos) => {
    return todos.sort((a, b) =>{
        if (!a.completed && b.completed){
            return -1; 
        } else if (!b.completed && a.completed) {
            return 1; 
        } else {
            return 0;
        }
    })
}

sortTodos(todos); 
console.log(todos); 


// const deleteTodo = (list, text) => {
//     const find = list.findIndex(item => {
//         return item.title.toLowerCase() === text.toLowerCase();    // compares the search values to the title  --- [title === searchValues] -> index
//     })
//     if (find === -1) {
//         return console.log(`${text} has not been found in the list`); // or if(index > -1) {  return list.splice(find, 1); }
//     } else {
//          return list.splice(find, 1);
//     } 
// }

// deleteTodo(todos, 'Note 3');

// console.log(todos); 

// const getThingsTodo = (todoList) => {
//     return find = todoList.filter(item => {
//         return item.completed;
//     }) 
// }

// console.log(getThingsTodo(todos, true)); 



//console.log(todos);