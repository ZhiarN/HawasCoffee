const products = document.querySelectorAll(".product");
const productGrid = document.getElementById("productGrid");
const activeContainer = document.getElementById("activeContainer");
const activeProduct = document.getElementById("activeProduct");
const activeDescription = document.getElementById("activeDescription");
const goBack = document.getElementById("goBack");
import { openProductInfo } from "./openProductInfo.js";
export function addListener() {
  document.body.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    switch (target.dataset.action) {
      case "CTA":
        alert("NOT OPEN FOR BUSINESS YET");
        break;
      case "open-product-info":
        openProductInfo(target.dataset.id);
        break;
      default:
        break;
    }
  });
  // goBack.addEventListener("click", () => {
  //   activeContainer.classList.add("hidden");
  //   productGrid.classList.remove("hidden");
  //   goBack.style.display = "none";
  // });
}
