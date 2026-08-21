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

/*
HOW DOES THIS NOTES WORK
*/

