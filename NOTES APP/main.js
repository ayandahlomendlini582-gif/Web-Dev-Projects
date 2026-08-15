const { app, BrowserWindow } = require('electron');

function createWindow() {
  // This creates the actual desktop window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // These settings allow your web page to talk to your computer
      nodeIntegration: true,
      contextIsolation: false 
    }
  });

  // This loads your existing notes app HTML file into the window
  win.loadFile('index.html');
}

// Tells Electron to open the window once it is fully initialized
app.whenReady().then(createWindow);

// Standard Windows behavior: Close the app when the window is closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
