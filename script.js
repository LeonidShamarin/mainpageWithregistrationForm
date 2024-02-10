// document.addEventListener("DOMContentLoaded", function () {
//   const closeButton = document.getElementById("close-icon");
//   const openModalButtons = document.querySelectorAll(".open-modal-btn");
//   const contactForm = document.getElementById("contact-form");

//   closeButton.addEventListener("click", function () {
//       contactForm.style.display = "none";
//   });

//   openModalButtons.forEach(function (button) {
//       button.addEventListener("click", function () {
//           contactForm.style.display = "block";
//       });
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var openModalButton = document.getElementById('open-modal-my');
//   var contactForm = document.getElementById('contact-form');

//   // Додаємо обробник події на кнопку "open-modal"
//   openModalButton.addEventListener('click', function() {
//       contactForm.style.display = 'block'; // Показуємо форму
//   });
// });

//!

let modal = document.getElementById("modal");
let closeButton = document.getElementById("close-icon");
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
  
}
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
// setTimeout(openModal, 2000);
//!
// document.addEventListener("DOMContentLoaded", function () {
//   const closeButton = document.querySelector(".close-icon");
//   const openModalButtons = document.querySelectorAll(".button");

//   closeButton.addEventListener("click", closeModal);
//   openModalButtons.forEach(button => {
//     button.addEventListener("click", openModal);
//   });

//   function openModal() {
//     const modal = document.getElementById("modal");
//     const modalContent = document.querySelector('.contact-form-details');
//     modal.style.display = "block";
//     modalContent.style.display = "block";
//   }

//   function closeModal() {
//     const modal = document.getElementById("modal");
//     const modalContent = document.querySelector('.contact-form-details');
//     modal.style.display = "none";
//     modalContent.style.display = "none";
//   }
// });

