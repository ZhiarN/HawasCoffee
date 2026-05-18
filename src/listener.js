import { openProductInfo } from "./openProductInfo.js";
export function addListener() {
  document.body.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    switch (target.dataset.action) {
      case "cta":
        alert("NOT OPEN FOR BUSINESS YET");
        break;
      case "open-product-info":
        openProductInfo(target.dataset.id);
        break;
      default:
        break;
    }
  });
}
