import "../style.css";

function createHome() {
	const header = document.createElement("div")
	header.classList.add("home");

	return header;
}

export { createHome };