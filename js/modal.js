import { editorCode } from "./codeEditor.js";
import { temaPreferencia } from "./preferenciaTema.js";
import { showTables } from "./showTables.js";

export function modal() {
  const dataBtnModal = document.querySelector("[data-btn-modal]");
  const dataModalContainer = document.querySelector("[data-modal-container]");
  const fileInput = document.querySelector("[data-file]");
  const dataInputs = document.querySelector("[data-inputs]");
  let errorFile = false;

  fileInput.addEventListener("change", () => {
    if (errorFile) {
      const spanErro = document.querySelector("[data-erro-span]");
      spanErro.remove();
    }
  });

  dataBtnModal.addEventListener("click", (e) => {
    const terminaComSqlite = fileInput.value.endsWith(".sqlite");
    if (!terminaComSqlite) return;
    if (fileInput.value.length > 0) {
      temaPreferencia();
      showTables();
      dataModalContainer.classList.add("remove-modal");
      editorCode();
    } else {
      const spanErro = document.querySelector("[data-erro-span]");
      if (spanErro) {
        spanErro.remove();
      }
      messageErro();
    }
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
