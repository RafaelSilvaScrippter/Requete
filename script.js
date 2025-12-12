import { editorCode } from "./js/codeEditor.js";
import { modal } from "./js/modal.js";
import { tolltip } from "./js/tooltip.js";
window.addEventListener("DOMContentLoaded", () => {
  editorCode();
  tolltip();
  modal();
});
