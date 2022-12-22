


function createTooltip(element, text) {

	let note = document.createElement("div");
	note.innerHTML = text;
	document.body.append(note);

	let coords = element.getBoundingClientRect();

	note.style.position = "absolute";
	note.style.left = coords.left + "px";
	note.style.top = coords.top - element.offsetHeight + "px";
	note.classList.toggle("tool");

};


let button = document.getElementById("example");

createTooltip(button, 'example text bla bla bla! ');