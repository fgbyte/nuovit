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


const carrusel = document.querySelector(".carousel-container");
const previousCard = document.getElementById("carousel-left");
const nextCard = document.getElementById("carousel-right");

function scrollNext() {
  const currentPosition = carrusel.scrollLeft;
  const cardWidth = 755;

  const newPosition = currentPosition + cardWidth;

  if (newPosition + carrusel.clientWidth > carrusel.scrollWidth) {
    carrusel.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    carrusel.scrollTo({ left: newPosition, behavior: "smooth" });
  }
}

function scrollBack() {
  const currentPosition = carrusel.scrollLeft;
  const cardWidth = 755;

  const newPosition = currentPosition - cardWidth;

  if (newPosition < 0) {
    carrusel.scrollTo({ left: carrusel.scrollWidth, behavior: "smooth" });
  } else {
    carrusel.scrollTo({ left: newPosition, behavior: "smooth" });
  }
}

function startAutoScroll() {
  setInterval(scrollNext, 5000);
}

nextCard.addEventListener("click", scrollNext);
previousCard.addEventListener("click", scrollBack);

startAutoScroll();