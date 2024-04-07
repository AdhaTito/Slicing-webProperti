window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("bg-mainColors");
  } else {
    navbar.classList.remove("bg-mainColors");
  }
});
