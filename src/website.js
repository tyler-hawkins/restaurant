import { createFooter } from "./components/footer";
import { createHeader } from "./components/header";
import { createHome } from "./components/home";

function load() {
	const content = document.getElementById("content");
	content.appendChild(createHeader());
	content.appendChild(createHome());
	content.appendChild(createFooter());
}

export { load };