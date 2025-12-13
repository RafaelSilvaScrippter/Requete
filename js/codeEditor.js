export function editorCode() {
  var myTextArea = document.getElementById("data-editor");

  let valorTema;

  valorTema = window.localStorage.getItem("thema");

  var editor = CodeMirror.fromTextArea(myTextArea, {
    lineNumbers: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
    },

    mode: "text/x-sql",
    theme: valorTema,
    lineWrapping: false,
  });
}
