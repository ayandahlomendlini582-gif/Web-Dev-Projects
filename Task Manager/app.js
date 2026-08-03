const form = document.getElementById('taskForm');
const result = document.getElementById('resultContainer');
const list = document.getElementById('taskList');

//Listening for button submission
form.addEventListener('submit', function(event){
    //Prevents the page from reloading(LOSING DATA) after cliking submit
    event.preventDefault();

    //Assigning the data from the form
    const taskTitle = document.getElementById('taskName').value;
    const taskPriority = document.getElementById('taskPriority').value;

    //Displaying the data in HTML page
    document.getElementById('displayTask').textContent = taskTitle;
    document.getElementById('displayPriority').textContent = taskPriority;

    //This hides the form for input
    form.classList.add('hidden');
    result.classList.remove('hidden');

    
})


//Listening for button submission
form.addEventListener('submit', function(event){
    //Prevents the page from reloading(LOSING DATA) after cliking submit
    event.preventDefault();

    //Assigning the data from the form
    const taskTitle = document.getElementById('taskName').value;
    const taskPriority = document.getElementById('taskPriority').value;

    //Displaying the data in HTML page
    document.getElementById('displayTask').textContent = taskTitle;
    document.getElementById('displayPriority').textContent = taskPriority;

    //This hides the form for input
    form.classList.add('hidden');
    result.classList.remove('hidden');


})
/*
// script.js
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// 1. LOAD TASKS: Get saved tasks from localStorage, or start with an empty array []
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

// 2. LOOP & DISPLAY: A function to clear the screen and loop through the array to display items
function renderTasks() {
  taskList.innerHTML = ''; // Clear the current list layout to avoid duplicates

  // This is your loop! It runs once for every single item inside the array
  tasks.forEach((taskText) => {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
  });
}

// 3. ADD TASK EVENT: Runs whenever the user submits the form
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop the page from refreshing automatically

  const newTaskText = taskInput.value.trim();
  
  if (newTaskText !== '') {
    tasks.push(newTaskText); // Add the new text string to our memory array
    
    // 4. SAVE TO LOCALSTORAGE: Turn the array into text and save it
    localStorage.setItem('myTasks', JSON.stringify(tasks));
    
    renderTasks(); // Run our loop function to update the visible screen list
    taskInput.value = ''; // Reset the input box so it is empty again
  }
});

// 5. INITIAL RUN: Run the display loop immediately when the user first opens or refreshes the page
renderTasks();

*/
