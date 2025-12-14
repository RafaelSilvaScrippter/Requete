import { showItemTables } from "./showTablesItem.js";

export function tabletivada() {
  const dataTableItem = document.querySelectorAll("[data-table-item]");
  dataTableItem.forEach((item) => {
    item.addEventListener("click", addClass);
  });

  async function addClass() {
    dataTableItem.forEach((item) => {
      item.classList.remove("ativo");
    });
    const dados = await window.api.showItemTables(this.dataset.tableItem);
    console.log(dados);
    showItemTables(dados);
    this.classList.add("ativo");
  }
}
