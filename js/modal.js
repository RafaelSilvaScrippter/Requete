import { editorCode } from "./codeEditor.js";
import { temaPreferencia } from "./preferenciaTema.js";
import { showTables } from "./showTables.js";

export function modal(dbSelecionado, caminhoDb) {
  const dataBtnModal = document.querySelector("[data-btn-modal]");
  const dataModalContainer = document.querySelector("[data-modal-container]");
  const dataInputs = document.querySelector("[data-erro]");
  const dataFile = document.querySelector("[data-file]");

  function dbValido() {
    if (dbSelecionado) {
      dataInputs.innerHTML = "";
      mostrarCaminhoDb();
    } else {
      dataFile.classList.remove("db-selecionado");
      dataFile.innerHTML = "Selecionar banco de dados";
    }
  }
  dbValido();

  function mostrarCaminhoDb() {
    dataFile.innerHTML = `${caminhoDb}`;
    dataFile.classList.add("db-selecionado");
  }

  dataBtnModal.addEventListener("click", (e) => {
    if (dbSelecionado) {
      temaPreferencia();
      showTables();
      dataInputs.innerHTML = "";
      dataModalContainer.classList.add("remove-modal");
      editorCode();
    } else {
      messageErro();
    }
  });

  function messageErro() {
    const span = document.createElement("span");
    span.setAttribute("data-erro-span", "");
    span.classList.add("message-error");
    span.innerText = "Você deve selecionar um banco de dados";
    dataInputs.appendChild(span);
  }
}
