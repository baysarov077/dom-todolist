const todoAddButton = document.querySelector(".list__header-button");
const inputValue = document.querySelector(".list__header-input");
const listItemsContainer = document.querySelector(".list__items");
const errorMessage = document.querySelector(".list__error-message");

const createTodo = (text) => {
  const todosContainer = document.createElement("div");
  todosContainer.className = "list__item";

  const todoText = document.createElement("div");
  todoText.className = "list__item-text";
  todoText.textContent = text;

  const todoCheckbox = document.createElement("input");
  todoCheckbox.className = "list__item-checkbox";
  todoCheckbox.type = "checkbox";

  const deleteTodoButton = document.createElement("button");
  deleteTodoButton.className = "list__item-button";
  deleteTodoButton.textContent = "delete";

  todosContainer.append(todoCheckbox, todoText, deleteTodoButton);
  listItemsContainer.append(todosContainer);
  inputValue.value = "";
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("list__item-button")) {
    e.target.parentElement.remove();
  }
};

const toggleTodoComplete = (e) => {
  if (e.target.classList.contains("list__item-checkbox")) {
    const todosContainer = e.target.parentElement;
    todosContainer.style.opacity = e.target.checked ? "0.5" : "1";
  }
};

const displayErrorMessage = (message) => {
  errorMessage.textContent = message;
};

const addTodo = () => {
  const taskText = inputValue.value.trim();
  if (!taskText) {
    displayErrorMessage("Please enter a task");
    return;
  }
  displayErrorMessage("");
  createTodo(taskText);
};

todoAddButton.addEventListener("click", addTodo);

listItemsContainer.addEventListener("click", deleteTodo);
listItemsContainer.addEventListener("change", toggleTodoComplete);
