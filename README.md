🚀 100 Days of Code - Full Stack Challenge
Welcome to the 100 Days of Code - Full Stack Challenge! This journey is all about coding every day and building projects using HTML5, CSS3, JavaScript, Dart/Flutter, and Java to become a better full-stack developer.

📅 Project Log
Day 1 - Project: To-Do List (HTML, CSS, JavaScript)
For the first day of the challenge, I built a To-Do List application to kick things off with core web technologies.

Project Overview
Description: A simple, interactive to-do list that allows users to add, remove, and mark tasks as completed. It’s built with HTML5 for the structure, CSS3 for styling, and JavaScript to handle interactivity.

Key Features
Add New Task: Users can type a new task into an input field and add it to the list.
Mark as Completed: Click on a task to toggle its completed state with a strikethrough effect.
Delete Task: Each task has a delete button to remove it from the list.
Key Learnings
JavaScript DOM Manipulation: Practiced using JavaScript to create elements, add event listeners, and update the DOM dynamically.
CSS Flexbox & Styling: Used Flexbox to align items and create a simple, clean layout for the task list.
User Interaction Handling: Added event listeners to handle task completion and deletion.
Code Highlights

Here's a short code snippet for adding a new task:
## JavaScript Code for To-Do List Functionality


```javascript
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

```
Challenges
Handling empty tasks and preventing them from being added.
Ensuring the UI was responsive and the styles looked consistent across different screen sizes.
