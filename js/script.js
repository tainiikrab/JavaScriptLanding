const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
	popup.classList.toggle('open');
	renderPopup();
	console.log("click")
}
function renderPopup() {
	popup.appendChild(menu);
	console.log("popup")
}


const modal = document.getElementById("modal");
const btn = document.getElementById("open");
const closeBtn = document.querySelector(".modal__close");

btn.addEventListener("click", function () {
	modal.classList.add("modal_active");
	console.log("opened")
	closeBtn.addEventListener("click", closeModal);

	function closeModal() {
		console.log("closed")
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







