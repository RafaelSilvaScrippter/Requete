const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

let db;

ipcMain.handle("conectar-banco", async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [{ name: "SQLite", extensions: ["sqlite", "db"] }],
  });

  if (canceled || !filePaths.length) return null;

  const caminho = filePaths[0];

  db = new sqlite3.Database(caminho, (err) => {
    if (err) console.error("Erro ao abrir banco:", err);
  });

  return caminho;
});

ipcMain.handle("db-query", async (event, query) => {
  return new Promise((resolve, reject) => {
    if (!db) return reject("Banco não conectado");

    db.all(query, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
});

ipcMain.handle("show-tables", async () => {
  console.log("db", db);
  if (!db) return;
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT "name" FROM sqlite_schema WHERE type='table'`,
      (err, rowes) => {
        if (err) reject(err);
        else resolve(rowes);
      }
    );
  });
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  win.webContents.openDevTools();

  win.loadFile("index.html");
};

app.whenReady().then(createWindow);
