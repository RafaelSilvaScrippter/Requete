export function palavrasChave() {
  const dataEditor = document.querySelector("[data-editor]");
  let valoresQuery;
  let divsInserir;
  dataEditor.addEventListener("input", insertValues);
  function insertValues() {
    valoresQuery = dataEditor.innerText.split("\n");
  }
  dataEditor.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      limparTextNodes(dataEditor);
      valoresQuery = dataEditor.innerText.split("\n");
      const transformarArray = Array.from(valoresQuery);
      const separar = transformarArray.map((item) => item.split(" "));
      divsInserir = dataEditor.querySelectorAll("div");
      separar.forEach((query, index) => {
        if (!divsInserir[index]) return;
        divsInserir[index].innerHTML = "";
        query.forEach((palavra) => {
          divsInserir[index].innerHTML += `<span>${palavra}</span>`;
        });
      });
    }
  });

  function criarDiv() {
    const criarDiv = document.createElement("div");
    dataEditor.appendChild(criarDiv);
  }
  criarDiv();

  function limparTextNodes(elemento) {
    [...elemento.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        console.log(elemento);
      }
    });
  }
}
