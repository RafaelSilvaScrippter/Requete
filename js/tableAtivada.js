export function tabletivada() {
  const dataTableItem = document.querySelectorAll("[data-table-item]");
  dataTableItem.forEach((item) => {
    item.addEventListener("click", addClass);
    item.innerHTML = "";
    item.innerHTML = item.dataset.tableItem;
  });

  async function addClass() {
    this.innerHTML = "";
    this.innerHTML = this.dataset.tableItem;
    const dados = await window.api.showItemTables(this.dataset.tableItem);
    if (dados.length === 0) return;
    const objectKeys = Object.keys(dados[0]);

    objectKeys.forEach((item) => {
      const elemento = document.createElement("li");
      elemento.innerHTML = `
    <li>${item}</li>
    `;
      elemento.setAttribute("data-li-append", "");
      elemento.classList.add("li-data-item");
      this.append(elemento);
    });

    dataTableItem.forEach((item) => {
      item.classList.remove("ativo");
    });
    this.classList.add("ativo");
  }
}
