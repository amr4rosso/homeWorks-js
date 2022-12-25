"use strict";

const slides = document.querySelectorAll('.slide');

slides.forEach((slide, index) => {
	slide.style.transform = `translate(${index * 100}%)`;
});

let position = 0;

let maxPosition = slides.length - 1;

const nextSlide = document.getElementById("btn-next");

nextSlide.addEventListener("click", function() {

	if (position === maxPosition) {
		position = 0;
	} else {
		position++;
	}
	

	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(${100 * (index - position)}%)`;
	});
});

const prevSlide = document.getElementById("btn-prev");

prevSlide.addEventListener("click", function() {

	if (position === 0) {
		position = maxPosition;
	} else {
		position--;
	}

	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(${100 * (index - position)}%)`;
	});

});