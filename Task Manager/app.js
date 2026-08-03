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
