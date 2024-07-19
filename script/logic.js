let local_data = JSON.parse(localStorage.getItem("todos"));
let data = local_data ? [...local_data] : [];

const createTodoItem = ({ completed, id, task, deadline }) => {
  let todoItem = document.createElement("li");
  todoItem.className = "animate__animated animate__pulse";
  let labelInput = document.createElement("label");
  let labelDate = document.createElement('label')
  labelInput.className = completed ? "done" : "";
  labelDate.className = completed ? "done" : "";
  let taskTxt = document.createTextNode(`${task}`);
  let deadlineTxt = document.createTextNode(`${deadline}`)
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;
  checkbox.id = `${id}`;
  // checkbox.setAttribute("checkedId", id);
  checkbox.addEventListener("change", onDone);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  deleteBtn.className = "deleteBtn";
  deleteBtn.id = `${id}`;
  deleteBtn.addEventListener("click", onDelete);

  let span = document.createElement("span");
  let iconTag = document.createElement("i");
  deleteBtn.append(span)
  deleteBtn.append(iconTag)
  todoItem.append(labelInput);
  todoItem.append(labelDate);
  labelInput.append(taskTxt);
  labelDate.append(deadlineTxt);
  todoItem.append(checkbox);
  todoItem.append(deleteBtn);

  list.append(todoItem);
};

function renderTodos() {
  list.innerHTML = "";
  data.map((todoItem) => {
    createTodoItem(todoItem);
  });
}
let lastId =
  local_data && local_data.length && local_data[local_data.length - 1].id + 1;
let counter = local_data ? lastId : 0;

function onAdd() {
  let newItem = textIn.value;

  if (textIn.value != "") {
    data.push({
      id: counter++,
      task: newItem,
      deadline: inputDate.value,
      completed: false,
    });

    renderTodos();
    localStorage.setItem("todos", JSON.stringify(data));
  } else {
    // alert("Type something....!");
    openModalWindow()
  }

  textIn.value = "";
}

function onDelete(event) {
  let currentId = Number(event.target.parentElement.id);
  let newArr = data.filter((todo) => todo.id !== currentId);
  data = newArr;
  localStorage.setItem("todos", JSON.stringify(data));
  renderTodos();
}

function onDone(event) {
  let checkedId = Number(event.target.id);
  let newArr = data.map((todo) => {
    if (todo.id === checkedId) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  data = newArr;
  renderTodos();
}

addBtn.addEventListener("click", onAdd);

textIn.addEventListener &&
  inputDate.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      onAdd();
    }
  });
renderTodos();