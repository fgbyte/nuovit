const carousel = document.getElementById("carrusel-container");
const controls = document.getElementById("guias");
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


const carousel2 = document.getElementById("carrusel-container2");
const controls2 = document.getElementById("guias2");
const controlItems2 = controls2.querySelectorAll("div[data-index]");

controlItems2[0].classList.add("bg-gray-400");

function setActiveControl2(index) {
  controlItems2.forEach((item, i) => {
    if (i === index) {
      item.classList.add("bg-gray-400");
    } else {
      item.classList.remove("bg-gray-400");
    }
  });
}
controlItems2.forEach((item, index) => {
  item.addEventListener("click", () => {
    const cardWidth = carousel2.querySelector(".snap-start").offsetWidth;
    carousel2.scroll({ left: cardWidth * index, behavior: "smooth" });
    setActiveControl2(index);
  });
});
carousel2.addEventListener("scroll", () => {
  const cardWidth = carousel2.querySelector(".snap-start").offsetWidth;
  const scrollPos = carousel2.scrollLeft;
  const activeControlIndex = Math.floor(scrollPos / cardWidth);
  setActiveControl2(activeControlIndex);
});


const carousel3 = document.getElementById("carrusel-container3");
const controls3 = document.getElementById("guias3");
const controlItems3 = controls3.querySelectorAll("div[data-index]");

controlItems3[0].classList.add("bg-gray-400");

function setActiveControl3(index) {
  controlItems3.forEach((item, i) => {
    if (i === index) {
      item.classList.add("bg-gray-400");
    } else {
      item.classList.remove("bg-gray-400");
    }
  });
}
controlItems3.forEach((item, index) => {
  item.addEventListener("click", () => {
    const cardWidth = carousel3.querySelector(".snap-start").offsetWidth;
    carousel3.scroll({ left: cardWidth * index, behavior: "smooth" });
    setActiveControl3(index);
  });
});
carousel3.addEventListener("scroll", () => {
  const cardWidth = carousel3.querySelector(".snap-start").offsetWidth;
  const scrollPos = carousel3.scrollLeft;
  const activeControlIndex = Math.floor(scrollPos / cardWidth);
  setActiveControl3(activeControlIndex);
});


const carousel4 = document.getElementById("carrusel-container4");
const controls4 = document.getElementById("guias4");
const controlItems4 = controls4.querySelectorAll("div[data-index]");

controlItems4[0].classList.add("bg-gray-400");

function setActiveControl4(index) {
  controlItems4.forEach((item, i) => {
    if (i === index) {
      item.classList.add("bg-gray-400");
    } else {
      item.classList.remove("bg-gray-400");
    }
  });
}
controlItems4.forEach((item, index) => {
  item.addEventListener("click", () => {
    const cardWidth = carousel4.querySelector(".snap-start").offsetWidth;
    carousel4.scroll({ left: cardWidth * index, behavior: "smooth" });
    setActiveControl4(index);
  });
});
carousel4.addEventListener("scroll", () => {
  const cardWidth = carousel4.querySelector(".snap-start").offsetWidth;
  const scrollPos = carousel4.scrollLeft;
  const activeControlIndex = Math.floor(scrollPos / cardWidth);
  setActiveControl4(activeControlIndex);
});