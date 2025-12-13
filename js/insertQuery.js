const { ipcRenderer } = require("electron");

export async function getDados(query) {
  const insertQuery = query;
  if (!query) return;
  try {
    const dados = await ipcRenderer.invoke("db-query", insertQuery);
    console.log(dados);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
