const hmenu = document.querySelector("#hmenu");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(true);

hmenu.onclick = function () {
    popup.classList.toggle('open');
    popup.appendChild(menu);
}


const modal = document.getElementById("modal");
const btn = document.getElementById("open");
const clbtn = document.querySelector(".modal__close");

btn.onclick = function() {
    modal.classList.add("modal_active");

    function closeModal() {
        modal.classList.remove("modal_active");

        clbtn.removeEventListener("click", closeModal);
        modal.removeEventListener("click", hideModal);
    }

    function hideModal(e) {
        if (e.target === modal) closeModal();
    }

    clbtn.onclick = closeModal;
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







let htab = document.querySelectorAll(".info-header-tab"),
hinfo = document.querySelector(".info-header"),
tabc = document.querySelectorAll(".info-tabcontent");
  
  function hide(a) {
	for (let i = a; i < tabc.length; i++) {
	  tabc[i].classList.remove("show");
	  tabc[i].classList.add("hide");
	}
  }
  
  hide(1);
  
  function show(b) {
	if (tabc[b].classList.contains("hide")) {
	  tabc[b].classList.remove("hide");
	  tabc[b].classList.add("show");
	}
  }
  
  hinfo.onclick = function(event) {
	let target = event.target;
	if (target && target.classList.contains("info-header-tab")) {
		if (target == htab[4]) {
		hide(0);
		htab.forEach((item) => {
		  item.classList.remove("active");
		});
		target.classList.add("active");
  
		for (let i = 0; i < 4; i++) {
		  show(i);
		}
	  } else {
		for (let i = 0; i < htab.length; i++) {
		  if (target == htab[i]) {
			hide(0);
			htab.forEach((item) => {
			  item.classList.remove("active");
			});
			target.classList.add("active");
			show(i);
			break;
		  }
		}
	  }
	}
  };

let btns = document.querySelectorAll(".accordion-head");
let blocks = document.querySelectorAll(".accordion-block");

// console.log(blocks);

function accordion_toggle(i){
  blocks[i].classList.toggle("accordion-block_active");
  btns[i].classList.toggle("active-style");
  
}