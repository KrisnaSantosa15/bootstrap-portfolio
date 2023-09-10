window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("fixed-top");
    toTop.classList.remove("d-none");
    toTop.classList.add("d-flex");
  } else {
    toTop.classList.add("d-none");
    toTop.classList.remove("d-flex");
    header.classList.remove("fixed-top");
  }
};
// End Navbar Fixed

// Start to top function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
