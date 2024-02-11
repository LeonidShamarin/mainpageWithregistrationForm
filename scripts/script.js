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
setTimeout(openModal, 10000);
