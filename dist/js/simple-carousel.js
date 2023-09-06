const carousels = document.querySelectorAll(".carousel-container");
const controlsList = document.querySelectorAll(".guias");

carousels.forEach((carousel, carouselIndex) => {
  const controls = controlsList[carouselIndex];
  const controlItems = controls.querySelectorAll("div[data-index]");

  controlItems[0].classList.add("bg-gray-400");

  function setActiveControl(index) {
    controlItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add("bg-gray-400");
      } else {
        item.classList.remove("bg-gray-400");
      }
    });
  }

  controlItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      const cardWidth = carousel.querySelector(".snap-start").offsetWidth;
      carousel.scroll({ left: cardWidth * index, behavior: "smooth" });
      setActiveControl(index);
    });
  });

  carousel.addEventListener("scroll", () => {
    const cardWidth = carousel.querySelector(".snap-start").offsetWidth;
    const scrollPos = carousel.scrollLeft;
    const activeControlIndex = Math.floor(scrollPos / cardWidth);
    setActiveControl(activeControlIndex);
  });
});
