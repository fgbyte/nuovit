const carousel = document.getElementById('carrusel');
const controls = document.getElementById('controles');
const control1 = document.getElementById('control-1');
const control2 = document.getElementById('control-2');
const control3 = document.getElementById('control-3');

// Establecer color por defecto
carousel.classList.remove("bg-gray-300");
control1.classList.add("bg-gray-50");

// Eventos
control1.addEventListener('click', () => {
  carousel.scroll({ left: 0, behavior: 'smooth' });
  control2.classList.remove("bg-gray-50");
  control3.classList.remove("bg-gray-50");
  control1.classList.add("bg-gray-50");
});

control2.addEventListener('click', () => {
  carousel.scroll({ left: carousel.offsetWidth, behavior: 'smooth' });
  control1.classList.remove("bg-gray-50");
  control3.classList.remove("bg-gray-50");
  control2.classList.add("bg-gray-50");
});

control3.addEventListener('click', () => {
  carousel.scroll({ left: carousel.offsetWidth * 2, behavior: 'smooth' });
  control1.classList.remove("bg-gray-50");
  control2.classList.remove("bg-gray-50");
  control3.classList.add("bg-gray-50");
});
// Nuevo evento para captar el scroll
carousel.addEventListener('scroll', () => {
  const cardWidth = carousel.querySelector('.snap-center').offsetWidth;
  const scrollPos = carousel.scrollLeft;
  if (scrollPos < cardWidth / 2) {
    control1.classList.add("bg-gray-50");
    control2.classList.remove("bg-gray-50");
    control3.classList.remove("bg-gray-50");
  } else if (scrollPos < cardWidth * 1.5) {
    control2.classList.add("bg-gray-50");
    control1.classList.remove("bg-gray-50");
    control3.classList.remove("bg-gray-50");
  } else {
    control3.classList.add("bg-gray-50");
    control1.classList.remove("bg-gray-50");
    control2.classList.remove("bg-gray-50");
  }
});


// Logica de las cards

function toggleContent(cardNumber) {
  const content = document.querySelector(`.cards-bottom > div:nth-child(${cardNumber}) p`);
  const button = document.querySelector(`.cards-bottom > div:nth-child(${cardNumber}) button`);

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    button.textContent = 'Leer menos';
  } else {
    content.classList.add('hidden');
    button.textContent = 'Leer más';
  }
}
let currentCard = 1;

function showNextCard() {
  const grid = document.querySelector('.cards-bottom');
  const totalCards = grid.childElementCount;
  const nextCard = (currentCard % totalCards) + 1;
  const currentCardElement = document.querySelector(`.cards-bottom > div:nth-child(${currentCard})`);
  const nextCardElement = document.querySelector(`.cards-bottom > div:nth-child(${nextCard})`);

  currentCardElement.classList.add('hidden');
  nextCardElement.classList.remove('hidden');
  nextCardElement.classList.add('flex');

  currentCard = nextCard;
}