import { dom } from "./dom.js";
export function ModalConstructor(
	title,
	img,
	description,
	notes,
	roastLevel,
	body,
	acidity,
	caffeine,
	origin,
) {
	const template = dom.TEMPLATE;
	if (!template) {
		console.error("Modal template not defined.");
	}
	const clone = template.content.firstElementChild?.cloneNode(true);

	const el = {
		root: clone,
		titleEl: clone.querySelector("[data-fill=title]"),
		imageEl: clone.querySelector("[data-fill=image]"),
		descriptionEl: clone.querySelector("[data-fill=description]"),
		notesEl: clone.querySelector("[data-fill=notes]"),
		caffeineEl: clone.querySelector("[data-fill=caffeine]"),
		bodyEl: clone.querySelector("[data-fill=body]"),
		originEl: clone.querySelector("[data-fill=origin]"),
		roastEl: clone.querySelector("[data-fill=roast]"),
		acidityEl: clone.querySelector("[data-fill=acidity]"),
	};
	el.imageEl.src = img;
	el.titleEl.textContent = title;
	el.descriptionEl.textContent = description;
	el.originEl.textContent = `Origin: ${origin}`;
	el.notesEl.textContent = `Notes: ${notes.join(" - ")}`;
	el.roastEl.textContent = `Roast Level: ${roastLevel}`;
	el.caffeineEl.textContent = `Caffeine: ${caffeine}`;
	el.bodyEl.textContent = `Body Profile: ${body}`;
	el.acidityEl.textContent = `Acidity: ${acidity}`;
	return el.root;
}
