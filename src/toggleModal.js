import { ModalConstructor } from "./ModalConstructor.js";
import { productData } from "./store/productData.js";

let currentModal = null;
export function toggleModal(id, action) {
	if (action === "close") {
		if (currentModal) {
			currentModal.close();
			currentModal.remove();
			currentModal = null;
		}
		return;
	}
	const data = productData[id];
	if (!data) {
		console.error(`There is no product with id ${id}.`);
		return;
	}
	const {
		title,
		img,
		description,
		notes,
		roastLevel,
		body,
		acidity,
		caffeine,
		origin,
	} = data;

	currentModal = ModalConstructor(
		title,
		img,
		description,
		notes,
		roastLevel,
		body,
		acidity,
		caffeine,
		origin,
	);
	try {
		document.querySelector("#modal-root").replaceChildren(currentModal);
		currentModal.showModal();
	} catch (error) {
		console.error("Show moda failed:", error);
	}
}
