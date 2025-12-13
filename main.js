const { app, BrowserWindow, ipcMain } = require("electron");
const { servidor } = require("./server/uploadArquivo.mjs");
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./db/db.sqlite");

console.log(db);
ipcMain.handle("db-query", async (event, query) => {
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
});

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
