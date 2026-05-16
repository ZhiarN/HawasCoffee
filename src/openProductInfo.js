import { productData } from "./store/productData.js";
export function openProductInfo(id) {
  const data = productData[id];
  alert(`${data.title} not roasted yet!`);
}
