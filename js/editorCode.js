export default function editorDeCodigo() {
  const dataEditor = document.querySelector("[data-editor]");
  const divContador = document.querySelector("[data-div-contador]");
  dataEditor.addEventListener("input", criarElementos);

  function criarElementos() {
    divContador.innerHTML = "";
    const divChilds = dataEditor.querySelectorAll("div");
    for (let i = 1; i <= divChilds.length; i++) {
      const criarSpans = document.createElement("span");
      divContador.appendChild(criarSpans);
      criarSpans.classList.add("contador-linhas");
      criarSpans.innerText = i;
    }
  }
}
