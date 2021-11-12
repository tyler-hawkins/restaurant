import { createHeader } from "./components/header";

function load() {
	const content = document.getElementById("content");
	content.appendChild(createHeader());
}

export { load };