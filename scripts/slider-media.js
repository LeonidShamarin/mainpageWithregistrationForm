import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
window.onload = function () {
  checkScreenWidth();
};

window.onresize = function () {
  checkScreenWidth();
};

function checkScreenWidth() {
  var screenWidth = window.innerWidth;

  if (screenWidth <= 601) {
    mediaSwiper();
  } else if (screenWidth <= 1440) {
    mediaSwiper2();
  } else {
    mediaSwiper2();
  }
}

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
function mediaSwiper2() {
  const swiper = new Swiper(".swiper-container ", {
    slidesPerView: 4.3,
    spaceBetween: 20,

    navigation: {
      nextEl: "#swiper-button-next",
      prevEl: "#swiper-button-prev",
    },
  });
}
