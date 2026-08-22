const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');
const cors = require('cors');

// 1. INITIALIZE BACKEND SERVER
const expressApp = express();
const BACKEND_PORT = 5500;

// Enable CORS and JSON body parsing
expressApp.use(cors());
expressApp.use(express.json());

// 2. DEFINE YOUR BACKEND ROUTE (Example: Notes Storage)
let notesData = []; // Temporary in-memory data array

// Get all notes
expressApp.get('/api/notes', (req, res) => {
  res.json({ success: true, notes: notesData });
});

// Save a new note
expressApp.post('/api/notes', (req, res) => {
  const newNote = req.body;
  notesData.push(newNote);
  res.status(201).json({ success: true, message: 'Note saved!', notes: notesData });
});

// 3. START EXPRESS SERVER
expressApp.listen(BACKEND_PORT, () => {
  console.log(`Backend server running internally on http://localhost:${BACKEND_PORT}`);
});

// 4. ELECTRON WINDOW MANAGEMENT
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false 
    }
  });

  win.loadFile('http://localhost:5500');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Standard Windows behavior: Close the app when the window is closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
