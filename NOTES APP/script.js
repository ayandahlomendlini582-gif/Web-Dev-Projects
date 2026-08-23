// ==========================================
// 1. SELECT THE ELEMENTS (Variables)
// ==========================================
const save_btn = document.querySelector('#save_btn');
const download_btn = document.querySelector('#download_btn');
const share_btn = document.querySelector('#share_btn');
const home_btn = document.querySelector('#home_btn');




// ==========================================
// 2. DEFINE THE INDIVIDUAL FUNCTIONS
// ==========================================
function saveNotes() {
    console.log('This is SAVING NOTES!');
    // Future backend step: Request user profile details from the server
}

function shareNotes() {
    console.log('This is SHARING NOTES!');
    // Future backend step: Request user profile details from the server
}

function downloadNotes() {
    console.log('This is DOWNLOADING NOTES');
    // Future backend step: Request user profile details from the server
}

function backToHomePage() {
    console.log('WELCOME ABCK TO THE HOME PAGE!');
    // Future backend step: Request user profile details from the server
}

// ==========================================
// 3. ATTACH THE SEPARATE LISTENERS
// ==========================================
home_btn.addEventListener('click', backToHomePage);
download_btn.addEventListener('click', downloadNotes);
share_btn.addEventListener('click', shareNotes);
save_btn.addEventListener('click', saveNotes);



// ==========================================
// GETTING DATA FROM FRONTEND TO BACKEND
// ==========================================
/*
To send text from your screen to a backend server you need three main pieces: 
1.a frontend input to type the text, 
2.an API endpoint on the server to catch the data, and 
3.an HTTP request method to carry the text safely between them.
*/

   const API_URL = 'http://localhost:5500/api/notes';

        // 1. Function to fetch notes from backend and show them on screen
        async function loadNotes() {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                
                const listElement = document.getElementById('notesList');
                listElement.innerHTML = ''; // Clear the old list
                
                // Loop through notes and add them to the screen
                data.notes.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.text;
                    listElement.appendChild(li);
                });
            } catch (error) {
                console.error('Error loading notes:', error);
            }
        }

        // 2. Function to send a new note to the backend
        async function saveNote() {
            const input = document.getElementById('noteInput');
            const noteText = input.value.trim();
            
            if (!noteText) return alert("Please type something first!");

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: noteText }) // Matches req.body on backend
                });

                if (response.ok) {
                    input.value = ''; // Clear the input box
                    loadNotes();      // Refresh the list to show the new note
                }
            } catch (error) {
                console.error('Error saving note:', error);
            }
        }

        // Load existing notes automatically when the app opens
        loadNotes();
                                                                            

function downloadNotes() {
    console.log('This is DOWNLOADING NOTES');
    // Future backend step: Request user profile details from the server
}

function backToHomePage() {
    console.log('WELCOME ABCK TO THE HOME PAGE!');
    // Future backend step: Request user profile details from the server
}

// ==========================================
// 3. ATTACH THE SEPARATE LISTENERS
// ==========================================
home_btn.addEventListener('click', backToHomePage);
download_btn.addEventListener('click', downloadNotes);
share_btn.addEventListener('click', shareNotes);
save_btn.addEventListener('click', saveNotes);

/*
HOW DOES THIS NOTES WORK
*/

