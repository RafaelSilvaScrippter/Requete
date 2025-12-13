export function temaPreferencia() {
  const dataTemaSelect = document.querySelector("[data-tema]");
  const dataBtnModal = document.querySelector("[data-btn-modal]");
  function temaSetar() {
    const valorTema = dataTemaSelect.value;
    window.localStorage.setItem("thema", valorTema);
  }
  temaSetar();
}
