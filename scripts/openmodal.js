document.addEventListener("DOMContentLoaded", function () {
    var openModalButton = document.getElementById("open-modal-my");
    var contactForm = document.getElementById("contact-form");
  
    openModalButton.addEventListener("click", function () {
      contactForm.style.display = "block"; 
    });
  });
