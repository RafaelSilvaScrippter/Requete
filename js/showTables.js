import { tabletivada } from "./tableAtivada.js";

export async function showTables() {
  const ulSetTables = document.querySelector("[data-ul-schema]");
  const result = await window.api.tablesDb();
  result.forEach((table) => {
    const li = document.createElement("li");
    li.innerText = table.name;
    li.setAttribute("data-table-item", table.name);
    li.classList.add("li-menu-lateral", "li-tables-item");
    ulSetTables.appendChild(li);
    tabletivada();
  });
}
