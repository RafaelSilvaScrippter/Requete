import { modal } from "./modal.js";

export function getCaminho() {
  const dataFile = document.querySelector("[data-file]");
  const dataInputs = document.querySelector("[data-erro]");

  let dbSelecionado;
  modal(dbSelecionado);
  dataFile.addEventListener("click", async (e) => {
    const conectou = await window.api.conectarBanco();
    if (!conectou) {
      dbSelecionado = false;
      return;
    }
    dbSelecionado = true;
    modal(dbSelecionado, conectou);
  });
}
