const navbar = document.getElementById("header_sticky");
const sticky = navbar.offsetTop;

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.getElementById("header_sticky_logo").style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    document.getElementById("header_sticky_logo").style.display = "none";
  }
});
