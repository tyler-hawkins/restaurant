import { createFooter } from "./components/footer";
import { createHeader } from "./components/header";

function load() {
	const content = document.getElementById("content");
	content.appendChild(createHeader());
	content.appendChild(createFooter());
}

export { load };