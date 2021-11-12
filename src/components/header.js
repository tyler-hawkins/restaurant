import "../style.css";

function createHeader() {
	const header = document.createElement("div")
	header.classList.add("header");

	const title = document.createElement("h2");
	title.innerHTML = "Restaurant";
	header.appendChild(title);
	return header;
}

export { createHeader };