/*menu mobile*/
const menuToggle = document.getElementById("menu-mobile");
const menuItems = document.getElementById("menu-items");

menuToggle.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");
});
