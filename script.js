
// Adding a todo item on form submission



const handleSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoForm.target;
    console.log(newToDo);
    const newListItem = document.createElement('li');
    newListItem.innerText = newToDo;

    const list = document.querySelector('#list');
    list.appendChild(newListItem);

}
const toDoForm = document.querySelector('#todo-form');
console.log(toDoForm);

toDoForm.addEventListener('submit', handleSubmit);