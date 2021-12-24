const openButton = document.querySelector(".openModal");
const closeButton = document.querySelector(".close");
const popUp = document.querySelector(".popup");
const modalButton = document.querySelectorAll(".js-modalButton");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
popUp.addEventListener("click", closeModal);

document.addEventListener("keydown", (event)=> {
  if (event.key == "Escape")
  closeModal();
});

modalButton.forEach((element) => {
  element.addEventListener("click", openModal);
});

function openModal() {
  popUp.style.display = "block";
  document.body.style.overflow = "hidden";
  document.querySelector("#header_sticky").style.display = "none";
}

function closeModal() {
  popUp.style.display = "none";
  document.body.style.overflow = "";
  document.querySelector("#header_sticky").style.display = "flex";
}
