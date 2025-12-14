export function getCaminho() {
  const dataBtnModal = document.querySelector("[data-btn-modal]");
  const dataFile = document.querySelector("[data-file]");

  dataFile.addEventListener("change", async (e) => {
    e.preventDefault();
    const file = dataFile.files[0];
    if (!file) return;
    await window.api.conectarBanco(file);
  });
}
