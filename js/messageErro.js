export function erroMessageQuery(err) {
  const dataTerminalContainer = document.querySelector(
    "[data-terminal-container]"
  );
  const tabalaDados = document.querySelector("[data-terminal]");
  tabalaDados.innerHTML = "";
  dataTerminalContainer.classList.remove("remove-beffore");
  const stringErr = err.message;
  const indexMessage = stringErr.indexOf("SQLITE_ERROR");
  const mensagem = stringErr.substring(indexMessage);
  console.log(mensagem);
  dataTerminalContainer.innerText = mensagem;
  dataTerminalContainer.classList.add("erro-message");
}
