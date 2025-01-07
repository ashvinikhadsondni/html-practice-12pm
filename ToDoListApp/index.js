const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

function addTask(e) {
  e.preventDefault();
  const todoInput = document.getElementById("todoInput");
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  todoList.appendChild(taskItem);
  todoInput.value = "";

  // local storage
  const Task = { task: taskText };
  saveToLocalStorage(Task);
}

addTaskBtn.addEventListener("click", addTask);

document.getElementById("todoList").addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-btn")) {
    const taskText = e.target.parentElement.querySelector(".task-text");
    const newTask = prompt("Edit your task:", taskText.textContent);
    if (newTask !== null) {
      taskText.textContent = newTask.trim();

      // Update local storage
      updateLocalStorage();
    }
  } else if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();

    // Update local storage
    updateLocalStorage();
  }
});

function saveToLocalStorage(Task) {
  const existingRecords = JSON.parse(localStorage.getItem("Tasks")) || [];
  existingRecords.push(Task);

  localStorage.setItem("Tasks", JSON.stringify(existingRecords));
  console.log("Task added to local storage");
}

function updateLocalStorage() {
  const tasks = [];
  document.querySelectorAll(".task-text").forEach((taskElement) => {
    tasks.push({ task: taskElement.textContent });
  });
  localStorage.setItem("Tasks", JSON.stringify(tasks));
  console.log("Local storage updated");
}


function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  storedTasks.forEach((storedTask) => {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span class="task-text">${storedTask.task}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(taskItem);
  });
}

loadTasks();
