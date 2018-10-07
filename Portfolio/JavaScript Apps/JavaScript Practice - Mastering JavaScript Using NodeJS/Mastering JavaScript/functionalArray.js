// const notes = ['Note 1', 'Note 2', 'Note 3'];
// notes.push('Note 4', 'Note 5', 'Note 6'); 

// console.log(notes);

// console.log(notes.pop()); 
// console.log(notes); 

// console.log(notes.shift());

// console.log(notes);

// notes.unshift('Note 1'); 
// console.log(notes);

// notes.splice(4, 1);
// console.log(notes);

// notes[4] = 'Note 5';
// console.log(notes);

// //Use the for each function when you want to find the values in order 
// notes.forEach((item, index) => {
//     const newIndex = index + 1; 
//     console.log(`${newIndex}. ${item}`);
// });

// // Use the for loop if you need to be more flexible with your counter, ie: counting the index backwards ---- for(initalizer, condition, expression De/Inecrementer)

// for (i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (i = 2; i >= 0; i--) {
//     console.log(i);
// }

// for (i = notes.length - 1; i >= 0; i--) {
//     let values = notes[i]; 
//     let newIndex = i + 1; 
//     console.log(`${newIndex}. ${values}`);
// }

// // Finds the Index/Position where the value your trying to search for is located
// console.log(notes.indexOf('Note 1'));

const notes = [
    {
        title: 'Note 1',
        description: '1',
    },
    {
        title: 'Note 2',
        description: '2',

    },
    {
        title: 'Note 3',
        description: '3', 
    }
]

// const findNote = (note, noteTitle) => {
//     const find = note.findIndex(item => {
//         return item.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return note[find];
// }

// const note = findNote(notes, 'Note 3');

// console.log(note); 


// const filter = notes.filter(item => {
//     const checkTitle = item.title.toLowerCase().includes('Note 3');
//     const checkDescription = item.description.toLowerCase().includes('3');
//     return checkTitle || checkDescription; 
// })

//Searches a existing array for a value and places the filtered values into a new Array

const filterNotes = (array, searchText) => {
    return array.filter(item => {
        const title = item.title.toLowerCase().includes(searchText.toLowerCase());
        const description = item.description.toLowerCase().includes(searchText.toLowerCase()); 
        return title || description;
    })
}

console.log(filterNotes(notes, 'note 3'));