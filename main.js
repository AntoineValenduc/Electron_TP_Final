// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const fs = require('node:fs')

const questionsPerRound = 5
const questionsFile = path.join(__dirname, 'questions.json');

const readFile = (jsonFile) => {
    const fileContent = fs.readFileSync(jsonFile, 'utf-8');
    return JSON.parse(fileContent)
}

const getRandomItems = (array, nb) => {
    return array
        .sort(function () { return 0.5 - Math.random() })
        .slice(0, nb);
}

const questions = readFile(questionsFile)

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools({ mode: 'detach' })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  ipcMain.on('questions-request', (event) => { 
    const currentRoundOfQuestions = getRandomItems(questions, questionsPerRound)
    event.sender.send('questions-response', currentRoundOfQuestions)})

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
