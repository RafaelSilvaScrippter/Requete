import { erroMessageQuery } from "./messageErro.js";
import { showDados } from "./showDados.js";

let myTextArea = document.getElementById("data-editor");
let editor;
let valorDoEditor;
export function editorCode() {
  let valorTema;

  valorTema = window.localStorage.getItem("thema");

  editor = CodeMirror.fromTextArea(myTextArea, {
    lineNumbers: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
    },

    mode: "text/x-sql",
    theme: valorTema,
    lineWrapping: false,
  });
  editor.on("change", function (cm) {
    valorDoEditor = cm.getValue();
  });

  document
    .querySelector("[data-btn-run]")
    .addEventListener("click", async () => {
      try {
        const dados = await window.api.getDados(valorDoEditor);
        showDados(dados);
      } catch (err) {
        erroMessageQuery(err);
      }
    });
}
