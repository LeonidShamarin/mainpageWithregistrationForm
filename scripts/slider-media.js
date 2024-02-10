import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
window.onload = function () {
  if (window.innerWidth <= 600) {
    mediaSwiper();
  }
};

window.onresize = function () {
  if (window.innerWidth <= 601) {
    mediaSwiper();
  }
};

function mediaSwiper() {
  const swiper = new Swiper(".swiper-container ", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: "#swiper-pagination",
      clickable: true,
    },
  });
}
