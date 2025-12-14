export function showDados(dados) {
  const dataTerminal = document.querySelector("[data-terminal]");
  dataTerminal.innerHTML = "";

  if (!dados || dados.length === 0) return;

  const keys = Object.keys(dados[0]);

  let thead = "<tr>";
  keys.forEach((key) => {
    thead += `<th>${key}</th>`;
  });
  thead += "</tr>";
  let tbody = "";
  dados.forEach((item) => {
    tbody += "<tr>";
    keys.forEach((key) => {
      tbody += `<td>${item[key]}</td>`;
    });
    tbody += "</tr>";
  });

  dataTerminal.innerHTML = thead + tbody;
}
