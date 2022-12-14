"use strict";


let slideIndex = 1;

function plusSlides(n) {
	showSlides(slideIndex += n);
};

let prev = document.getElementById("prev-btn");

prev.addEventListener('click', () => {plusSlides(-1)});

let next = document.getElementById('next-btn');

next.addEventListener('click', () => { plusSlides(1)});


function showSlides(n) {
	
	let slides = document.getElementsByClassName("slide");

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
};

showSlides(slideIndex);