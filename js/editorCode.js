export default function editorDeCodigo() {
  const textArea = document.querySelector("[data-text-area]");
  const dataDivContador = document.querySelector("[data-div-contador]");

  textArea.addEventListener("input", atualizarLinhas);

  function atualizarLinhas() {
    const linhas = textArea.value.split("\n").length;

    // limpa todos os spans
    dataDivContador.innerHTML = "";

    // recria todos os números
    for (let i = 1; i <= linhas; i++) {
      const span = document.createElement("span");
      span.classList.add("linhas-text-area");
      span.innerText = i;
      dataDivContador.appendChild(span);
    }
  }

  atualizarLinhas();
}
