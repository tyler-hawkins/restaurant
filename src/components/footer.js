import "../style.css";

function createFooter() {
	const footer = document.createElement("footer");

	const title = document.createElement("p");
	title.innerHTML = "&copy; 2021 &nbsp; | &nbsp; Tyler Hawkins";
	footer.appendChild(title);
	return footer;
}

export { createFooter };