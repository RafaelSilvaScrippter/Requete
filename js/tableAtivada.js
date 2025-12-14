export function tabletivada() {
  const dataTableItem = document.querySelectorAll("[data-table-item]");
  dataTableItem.forEach((item) => {
    console.log(dataTableItem);
    item.addEventListener("click", addClass);
  });

  function addClass() {
    dataTableItem.forEach((item) => {
      item.classList.remove("ativo");
    });
    this.classList.add("ativo");
  }
}
