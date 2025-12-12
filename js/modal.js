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
    if (fileInput.value.length > 0) {
      dataModalContainer.classList.add("remove-modal");
    } else {
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
