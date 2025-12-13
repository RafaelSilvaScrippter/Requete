const { app, BrowserWindow } = require("electron");
const { servidor } = require("./server/uploadArquivo.mjs");

const createWindow = () => {
  servidor();
  const win = new BrowserWindow({
    width: 1000,
    height: 900,
    webPreferences: {
      preload: "preload.js",
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile("index.html");
  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});
