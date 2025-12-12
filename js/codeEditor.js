export function editorCode() {
  var myTextArea = document.getElementById("data-editor");

  var editor = CodeMirror.fromTextArea(myTextArea, {
    lineNumbers: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
    },

    mode: "text/x-sql",
    theme: "darcula",
    lineWrapping: false,
  });
}
