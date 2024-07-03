
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    requestQuestions: () => ipcRenderer.send('questions-request'),
    onQuestionsReceived: (callback) => ipcRenderer.on('questions-response', (_event, value) => {callback(value)}),
    
})
