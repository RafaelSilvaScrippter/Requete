export function editorCode() {
  var myTextArea = document.getElementById("data-editor");

  var editor = CodeMirror.fromTextArea(myTextArea, {
    lineNumbers: true,
    mode: "javascript",
    theme: "material",
    lineWrapping: false,
  });
}
