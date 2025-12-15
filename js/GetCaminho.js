export function getCaminho() {
  const dataFile = document.querySelector("[data-file]");

  dataFile.addEventListener("click", async (e) => {
    await window.api.conectarBanco();
  });
}
