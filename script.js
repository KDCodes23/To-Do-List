// Select elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage when the page loads
window.onload = () => {
    loadTasks();
};

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Create the task item element
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-button">Delete</button>
    `;

    // Mark task as completed on click
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
        saveTasks();
    });

    // Delete task on button click
    taskItem.querySelector('.delete-button').addEventListener('click', (e) => {
        e.stopPropagation();
        taskItem.remove();
        saveTasks();
    });

    // Add task to the list and clear input
    taskList.appendChild(taskItem);
    taskInput.value = "";

    saveTasks();
}

// Function to save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(taskItem => {
        tasks.push({
            text: taskItem.querySelector('span').innerText,
            completed: taskItem.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        if (task.completed) taskItem.classList.add('completed');
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-button">Delete</button>
        `;

        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
            saveTasks();
        });

        taskItem.querySelector('.delete-button').addEventListener('click', (e) => {
            e.stopPropagation();
            taskItem.remove();
            saveTasks();
        });

        taskList.appendChild(taskItem);
    });
}

// Add task on button click
addTaskButton.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
