/**
 * Selectors
 */
const todoInput = document.querySelector('.todo-input'),
      todoButton = document.querySelector('.todo-button'),
      // this is where all items are aggregated
      todoList = document.querySelector('.todo-list'),
      filterOption = document.querySelector('.filter-todo');

/**
 * Event listeners
 */
// on the + button
todoButton.addEventListener('click', addTodo);

// on the 'complete' and 'delete' buttons - 
// functionality can be added based on where we're clicking
todoList.addEventListener('click', deleteCheck);

// on the filter dropdown
filterOption.addEventListener('input', filterTodo);

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
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');

  // item goes inside the div
  todoDiv.appendChild(newTodo);

  // add the 'complete' button
  const completeButton = document.createElement('button');
  // button will have an icon from font-awesome
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);

  // add the 'delete' button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('trash-btn');
  todoDiv.appendChild(deleteButton);

  // append to the list and clear the input
  todoList.appendChild(todoDiv);
  todoInput.value = '';
}

function deleteCheck(e) {
  const item = e.target, // the target is the button itself
        todo = item.parentElement;

  // delete todo
  if (item.classList[0] === 'trash-btn') {
    // trigger the falling animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }

  // mark complete
  if (item.classList[0] === 'complete-btn') {
    // toggle the crossed-out look
    todo.classList.toggle('completed');
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;

  // filter based on HTML "value" for each option
  todos.forEach(todo => {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'complete': // make sure we're only showing complete
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else { // others will be hidden
          todo.style.display = 'none';
        }
        break;
      case 'incomplete': // only showing incomplete
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}

// TODO: sanitize input