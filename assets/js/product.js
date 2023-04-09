window.addEventListener("scroll", function () {
  var header = document.querySelector(".navheader");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const $$$ = document.querySelector.bind(document);
const $$$$ = document.querySelectorAll.bind(document);

const navlink = $$$$(".nav-area-link");
const areaTabs = $$$$(".areaTab");
const navlinkActive = $$$(".nav-area-link.active");
const line = $$$(".nav .line");

line.style.left = navlinkActive.offsetLeft + "px";
line.style.width = navlinkActive.offsetWidth + "px";

navlink.forEach((nav, index) => {
  const areaTab = areaTabs[index];
  nav.onclick = function () {
    $$$(".nav-area-link.active").classList.remove("active");
    this.classList.add("active");
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    $$$(".areaTab.active").classList.remove("active");
    areaTab.classList.add("active");
  };
});

$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});
