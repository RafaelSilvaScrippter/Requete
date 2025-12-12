export function modal() {
  const dataBtnModal = document.querySelector("[data-btn-modal]");
  const dataModalContainer = document.querySelector("[data-modal-container]");
  const fileInput = document.querySelector("[data-file]");

  dataBtnModal.addEventListener("click", (e) => {
    if (fileInput.value.length > 0) {
      dataModalContainer.classList.add("remove-modal");
    }
  });
}
