/**
 * Selectors
 */
const todoInput = document.querySelector('.todo-input'),
      todoButton = document.querySelector('.todo-button'),
      // this is where all items are aggregated
      todoList = document.querySelector('.todo-list');

/**
 * Event listeners
 */
todoButton.addEventListener('click', addTodo);

/**
 * Functions
 */
function addTodo(e) {
  // don't refresh upon submit
  e.preventDefault(); 

  /* this goes inside the ul
  <div class="todo">
    <li></li>
    <button>complete</button>
    <button>delete</button>
  </div>
  */

  // div for each entry 
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // create the li
  const newTodo = document.createElement('li');
  newTodo.innerText = 'yea boi';
  newTodo.classList.add('todo-item');

  // item goes inside the div
  todoDiv.appendChild(newTodo);

  // ------
  // add the 'complete' button
  const completeButton = document.createElement('button');
  // button will have an icon from font-awesome
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  // add the 'delete' button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("complete-btn");
  todoDiv.appendChild(deleteButton);
}