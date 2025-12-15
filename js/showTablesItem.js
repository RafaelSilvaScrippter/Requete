export function showItemTables(dados) {
  const dataUlTables = document.querySelector("[data-ul-schema]");
  const liTables = dataUlTables.querySelectorAll("[data-table-item]");

  liTables.forEach((item) => {
    item.addEventListener("click", () => {
      item.innerHTML = "";
      item.innerHTML = item.dataset.tableItem;
    });
  });

  const objectKeys = Object.keys(dados[0]);
  objectKeys.forEach((item) => {
    const elemento = document.createElement("li");
    elemento.innerHTML = `
    <li>${item}</li>
    `;
    elemento.setAttribute("data-li-append", "");
    elemento.classList.add("li-data-item");
    liTables.forEach((item) => {
      item.addEventListener("click", () => {
        item.append(elemento);
      });
    });
  });
}
