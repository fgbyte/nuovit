const toggleButton = document.getElementById('btn-acordion-sostenibilidad1');
const reedLeesButton = document.getElementById('btn1-acordion-sostenibilidad1');
const content = document.getElementById('content1');

toggleButton.addEventListener('click', () => {
content.classList.toggle('max-h-active')
toggleButton.classList.toggle('rotate-180')

});
reedLeesButton.addEventListener('click', () => {
  content.classList.toggle('max-h-active')
  toggleButton.classList.toggle('rotate-180')
});

const toggleButton2 = document.getElementById('btn-acordion-sostenibilidad2');
const reedLeesButton2 = document.getElementById('btn2-acordion-sostenibilidad2');
const content2 = document.getElementById('content2');

toggleButton2.addEventListener('click', () => {
content2.classList.toggle('max-h-active')
toggleButton2.classList.toggle('rotate-180')

});
reedLeesButton2.addEventListener('click', () => {
  content2.classList.toggle('max-h-active')
  toggleButton2.classList.toggle('rotate-180')
});

const toggleButton3 = document.getElementById('btn-acordion-sostenibilidad3');
const reedLeesButton3 = document.getElementById('btn3-acordion-sostenibilidad3');
const content3 = document.getElementById('content3');

toggleButton3.addEventListener('click', () => {
content3.classList.toggle('max-h-active')
toggleButton3.classList.toggle('rotate-180')

});
reedLeesButton3.addEventListener('click', () => {
  content3.classList.toggle('max-h-active')
  toggleButton3.classList.toggle('rotate-180')
});

const toggleButton4 = document.getElementById('btn-acordion-sostenibilidad4');
const reedLeesButton4 = document.getElementById('btn4-acordion-sostenibilidad4');
const content4 = document.getElementById('content4');

toggleButton4.addEventListener('click', () => {
content4.classList.toggle('max-h-active')
toggleButton4.classList.toggle('rotate-180')

});
reedLeesButton4.addEventListener('click', () => {
  content4.classList.toggle('max-h-active')
  toggleButton4.classList.toggle('rotate-180')
});


const toggleButton5 = document.getElementById('btn-acordion-sostenibilidad5');
const reedLeesButton5 = document.getElementById('btn5-acordion-sostenibilidad5');
const content5 = document.getElementById('content5');

toggleButton5.addEventListener('click', () => {
content5.classList.toggle('max-h-active')
toggleButton5.classList.toggle('rotate-180')

});
reedLeesButton5.addEventListener('click', () => {
  content5.classList.toggle('max-h-active')
  toggleButton5.classList.toggle('rotate-180')
});


const toggleButton6 = document.getElementById('btn-acordion-sostenibilidad6');
const reedLeesButton6 = document.getElementById('btn6-acordion-sostenibilidad6');
const content6 = document.getElementById('content6');

toggleButton6.addEventListener('click', () => {
content6.classList.toggle('max-h-active')
toggleButton6.classList.toggle('rotate-180')

});
reedLeesButton6.addEventListener('click', () => {
  content6.classList.toggle('max-h-active')
  toggleButton6.classList.toggle('rotate-180')
});


//Scroll suave entre #ids
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
