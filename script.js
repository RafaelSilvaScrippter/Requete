import { getCaminho } from "./js/GetCaminho.js";
import { modal } from "./js/modal.js";
import { tabletivada } from "./js/tableAtivada.js";
import { tolltip } from "./js/tooltip.js";
window.addEventListener("DOMContentLoaded", () => {
  tolltip();
  modal();
  getCaminho();
  tabletivada();
});
