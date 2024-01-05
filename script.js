const navmob = document.querySelector("#navMob");
const humburger = document.querySelector("#humBurger1");
const humburger1 = document.querySelector("#humBurger2");

humburger.addEventListener("click", () => {
  navmob.style.display = "block";
});

humburger1.addEventListener("click", () => {
  navmob.style.display = "none";
});
