export function tolltip() {
  const dataSettingsIcone = document.querySelector("[data-settings-icone]");

  dataSettingsIcone.addEventListener("mouseenter", criarTollTip);
  function criarTollTip() {
    let div = document.createElement("div");
    div.classList.add("config-tooltip");
    div.innerHTML = "<p>Abrir configurações</p>";
    dataSettingsIcone.appendChild(div);
    div.addEventListener("mouseleave", removerAppend);
  }

  function removerAppend() {
    this.remove();
  }
}
