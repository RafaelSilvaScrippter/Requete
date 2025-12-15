import { editorCode } from "./codeEditor.js";
import { temaPreferencia } from "./preferenciaTema.js";
import { showTables } from "./showTables.js";

export function modal() {
  const dataBtnModal = document.querySelector("[data-btn-modal]");
  const dataModalContainer = document.querySelector("[data-modal-container]");
  const dataInputs = document.querySelector("[data-inputs]");
  let errorFile = false;

  dataBtnModal.addEventListener("click", (e) => {
    temaPreferencia();
    showTables();
    dataModalContainer.classList.add("remove-modal");
    editorCode();
  });

  function messageErro() {
    errorFile = true;
    const span = document.createElement("span");
    span.setAttribute("data-erro-span", "");
    span.classList.add("message-error");
    span.innerText = "Você deve selecionar um banco de dados";
    dataInputs.appendChild(span);
  }
}
