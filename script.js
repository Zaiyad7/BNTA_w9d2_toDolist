
// Adding a todo item on form submission



const handleSubmit = (event) => {
    event.preventDefault();

    const newToDoInput = document.querySelector('#new-todo');
    const newToDoText = newToDoInput.value.trim();

    if (newToDoText !== "") {
        const newListItem = document.createElement('li');
        newListItem.innerText = newToDoText;
    }

    const newToDo = toDoForm.target;
    console.log(newToDo);
    const newListItem = document.createElement('li');
    newListItem.innerText = newToDoText;

    const list = document.querySelector('#list');
    list.appendChild(newListItem);

    

}
const toDoForm = document.querySelector('#todo-form');
console.log(toDoForm);

toDoForm.addEventListener('submit', handleSubmit);

const toDoList = document.querySelector('#list');
