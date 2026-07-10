import { toggleModal } from "./toggleModal.js";
export function addListener() {
	document.body.addEventListener("click", (event) => {
		const target = event.target.closest("[data-action]");
		if (!target) return;
		switch (target.dataset.action) {
			case "cta":
				alert("NOT OPEN FOR BUSINESS YET");
				break;
			case "open-product-info":
				toggleModal(target.dataset.id, "open");
				break;
			case "close-modal": {
				const inside = event.target.closest(".modal");
				const closeButton = event.target.closest(".modal__close");
				if (closeButton || !inside) toggleModal(target.dataset.id, "close");
				break;
			}
			default:
				break;
		}
	});
}
