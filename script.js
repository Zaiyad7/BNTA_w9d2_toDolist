
// Adding a todo item on form submission



const handleSubmit = (event) => {
    event.preventDefault();

    const newToDoInput = document.querySelector('#new-todo');
    const newToDoText = newToDoInput.value.trim();

    if (newToDoText !== "") {
        const newListItem = document.createElement('li');
        newListItem.innerText = newToDoText;
    }

    // creating list item

    const newToDo = toDoForm.target;
    console.log(newToDo);
    const newListItem = document.createElement('li');
    newListItem.innerText = newToDoText;

    const list = document.querySelector('#list');
    list.appendChild(newListItem);

    // delete items from list

    const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function() {
            newListItem.remove();
        });

    newListItem.appendChild(deleteButton);

  

}
const toDoForm = document.querySelector('#todo-form');
console.log(toDoForm);

toDoForm.addEventListener('submit', handleSubmit);

const toDoList = document.querySelector('#list');


// show date button

const showDateButton = document.querySelector('#show-date');

showDateButton.addEventListener('click', function() {
    const currentDate = new Date();
    const dateDisplay = document.createElement('p');
    dateDisplay.innerText = `Today's date: ${currentDate.toDateString()}`;

    const container = document.querySelector('.container');
    container.appendChild(dateDisplay);
});



