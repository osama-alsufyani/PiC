// const nav = document.querySelector(".nav");

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 100) {
//     nav.classList.add("bg-dark", "shadow");
//   } else {
//     nav.classList.remove("dg-dark", "shadow");
//   }
// });

const nav = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 700) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

// new fullpage("#fullpage", {
//   autoScrolling: true,
//   navigation: true,
//   responsiveWidth: 1000,
// });
