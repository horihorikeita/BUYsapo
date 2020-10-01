const nav = document.getElementsByClassName("nav-js")[0];
const button = document.getElementsByClassName("js-nav-button")[0];

button.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});
