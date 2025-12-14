export function showItemTables(dados) {
  const dataUlTables = document.querySelector("[data-ul-schema]");
  const liTables = dataUlTables.querySelectorAll("[data-table-item]");

  const liJs = dataUlTables.querySelectorAll("[data-li-append]");
  liJs.forEach((li) => li.remove());

  const objectKeys = Object.keys(dados[0]);
  objectKeys.forEach((item) => {
    const elemento = document.createElement("li");
    elemento.innerHTML = `
    <li>${item}</li>
    `;
    elemento.setAttribute("data-li-append", "");
    elemento.classList.add("li-menu-lateral", "li-data-item", "li-tables-item");
    dataUlTables.appendChild(elemento);
  });
}
