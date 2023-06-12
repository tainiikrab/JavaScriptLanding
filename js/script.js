const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
	popup.classList.toggle('open');
	renderPopup();
	// console.log("click")
}
function renderPopup() {
	popup.appendChild(menu);
	// console.log("popup")
}


const modal = document.getElementById("modal");
const btn = document.getElementById("open");
const closeBtn = document.querySelector(".modal__close");

btn.addEventListener("click", function () {
	modal.classList.add("modal_active");
	// console.log("opened")
	closeBtn.addEventListener("click", closeModal);

	function closeModal() {
		// console.log("closed")
		modal.classList.remove("modal_active");

		closeBtn.removeEventListener("click", closeModal);

		modal.removeEventListener("click", hideModal);
	}

	modal.addEventListener("click", hideModal);


	function hideModal(event) {
		if (event.target === modal) {
			closeModal();
		}
	}
});





let slideIndex = 1,
		slides = document.querySelectorAll(".slider-item"),
		prev = document.querySelector(".prev"),
		next = document.querySelector(".next"),
		dotsWrap = document.querySelector(".slider-dots"),
		dots = document.querySelectorAll(".dot");

	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => (item.style.display = "none"));
		dots.forEach((item) => item.classList.remove("dot-active"));

		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].classList.add("dot-active");
	}
	function plusSlides(n) {
		showSlides((slideIndex += n));
	}
	function currentSlide(n) {
		showSlides((slideIndex = n));
	}
	dotsWrap.addEventListener("click", function (event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (
				event.target.classList.contains("dot") &&
				event.target == dots[i - 1]
			) {
				currentSlide(i);
			}
		}
	});

