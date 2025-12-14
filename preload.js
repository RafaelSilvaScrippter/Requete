const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  tablesDb: () => ipcRenderer.invoke("show-tables"),
  conectarBanco: () => ipcRenderer.invoke("conectar-banco"),
  getDados: (query) => ipcRenderer.invoke("db-query", query),
});
