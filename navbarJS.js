// Navigation
// Menu Icon

const menuIcon = document.querySelector(".menuIcon");
const navbar = document.querySelector(".navbar");

const scrollFunction = () => {
  menuIcon.classList.add("showMenuIcon");
  navbar.classList.add("hideNavbar");

  //   // Progress Bar Function

  //   progressBarFunction();
  //   // End Of Progress Bar Function

  if (window.scrollY === 0) {
    menuIcon.classList.remove("showMenuIcon");
    navbar.classList.remove("hideNavbar");
  }
};

document.addEventListener("scroll", scrollFunction);

menuIcon.addEventListener("click", () => {
  menuIcon.classList.remove("showMenuIcon");
  navbar.classList.remove("hideNavbar");
});
// End Of Menu Icon

// End Of Navigation
