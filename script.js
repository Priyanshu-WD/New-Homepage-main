const navmob = document.querySelector("#humburger");
const humburger = document.querySelector("#open");
const humburger1 = document.querySelector("#close");

humburger.addEventListener("click", () => {
  navmob.style.display = "block";
});

humburger1.addEventListener("click", () => {
  navmob.style.display = "none";
});
