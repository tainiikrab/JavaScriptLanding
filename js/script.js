const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(true);

hamb.onclick = function () {
    popup.classList.toggle('open');
    popup.appendChild(menu);
}


const modal = document.getElementById("modal");
const btn = document.getElementById("open");
const closeBtn = document.querySelector(".modal__close");

btn.onclick = function() {
    modal.classList.add("modal_active");

    function closeModal() {
        modal.classList.remove("modal_active");

        closeBtn.removeEventListener("click", closeModal);
        modal.removeEventListener("click", hideModal);
    }

    function hideModal(e) {
        if (e.target === modal) closeModal();
    }

    closeBtn.onclick = closeModal;
    modal.onclick = hideModal;
}




let slideIndex = 1;
const slides = document.querySelectorAll(".slider-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsWrap = document.querySelector(".slider-dots");
const dots = document.querySelectorAll(".dot");

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    hideAllSlides();
    showSlideAndDot();
}

function hideAllSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot-active");
    }
}

function showSlideAndDot() {
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

dotsWrap.addEventListener("click", (event) => {
    for (let i = 0; i < dots.length + 1; i++) {
        if (
            event.target.classList.contains("dot") &&
            event.target == dots[i - 1]
        ) {
            currentSlide(i);
        }
    }
});







let tab = document.querySelectorAll(".info-header-tab"),
info = document.querySelector(".info-header"),
tabContect = document.querySelectorAll(".info-tabcontent");
  
  function hideTabContect(a) {
	for (let i = a; i < tabContect.length; i++) {
	  tabContect[i].classList.remove("show");
	  tabContect[i].classList.add("hide");
	}
  }
  
  hideTabContect(1);
  
  function ShowTabContect(b) {
	if (tabContect[b].classList.contains("hide")) {
	  tabContect[b].classList.remove("hide");
	  tabContect[b].classList.add("show");
	}
  }
  
  info.onclick = function(event) {
	let target = event.target;
	if (target && target.classList.contains("info-header-tab")) {
		if (target == tab[4]) {
		hideTabContect(0);
		tab.forEach((item) => {
		  item.classList.remove("active");
		});
		target.classList.add("active");
  
		for (let i = 0; i < 4; i++) {
		  ShowTabContect(i);
		}
	  } else {
		for (let i = 0; i < tab.length; i++) {
		  if (target == tab[i]) {
			hideTabContect(0);
			tab.forEach((item) => {
			  item.classList.remove("active");
			});
			target.classList.add("active");
			ShowTabContect(i);
			break;
		  }
		}
	  }
	}
  };