const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  showItemTables: (tableName) => ipcRenderer.invoke("show-data", tableName),
  tablesDb: () => ipcRenderer.invoke("show-tables"),
  conectarBanco: () => ipcRenderer.invoke("conectar-banco"),
  getDados: (query) => ipcRenderer.invoke("db-query", query),
});
