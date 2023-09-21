const form = document.getElementById("wizard-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Objeto editable con los valores del Form
    const formData = {
        "edad": {
            value: document.getElementById("age").value,
        },
        "genero": {
            value: document.getElementById("genre").value,
        },
        "postal-code": {
            value: document.getElementById("postal-code").value,
        },
        "hijos": {
            value: document.getElementById("childrens").value,
        },
        "tipo_de_vivienda": {
            value: document.getElementById("house").value,
        },
        "dormitorios": {
            value: document.getElementById("rooms").value,
        },
        "gustaria_tener": {
            values: {
                "piscina": document.getElementById("Piscina").checked,
                "gimnasio": document.getElementById("Gimnasio").checked,
                "co_Working": document.getElementById("Co-Working").checked,
                "zonaInfantil": document.getElementById("Zona-Infantil").checked,
                "garaje": document.getElementById("Plaza-Garaje").checked,
                "trastero": document.getElementById("Trastero").checked,
            }
        },
        "certificacion_energetica": {
            value: document.getElementById("energy").value,
        },
        "metros_cuadrados": {
            value: document.getElementById("meters").value,
        },
        "presupuesto": {
            value: document.getElementById("budget").value * 1000,
        },
        "uso": {
            value: document.getElementById("use").value,
        },
        "tu_casa_ideal": {
            value: document.getElementById("message").value,
        },
        "email": {
            value: document.getElementById("email").value,
        },
        
    }
    //para desarrollo
    console.log(formData)

});


// Lógica de los Sliders
const carrusel = document.querySelector(".carousel-container");
const previousCard = document.getElementById("carousel-left");
const nextCard = document.getElementById("carousel-right");
const currentPage = document.getElementById("currentPage")

function scrollNext() {
  const currentPosition = carrusel.scrollLeft;
  const cardWidth = carrusel.querySelector("[data-index='0']").clientWidth;
  const newPosition = currentPosition + cardWidth;
  carrusel.scrollTo({ left: newPosition, behavior: "smooth" });
}

function scrollBack() {
  const currentPosition = carrusel.scrollLeft;
  const cardWidth = carrusel.querySelector("[data-index='0']").clientWidth;
  const newPosition = currentPosition - cardWidth;
  carrusel.scrollTo({ left: newPosition, behavior: "smooth" });
}

function updateCurrentPage() {
    const currentPosition = carrusel.scrollLeft;
    const cardWidth = carrusel.querySelector("[data-index='0']").clientWidth;
    const currentPageNumber = Math.floor(currentPosition / cardWidth) + 1;
    currentPage.innerText = formatearNumero(currentPageNumber);

    if (currentPageNumber === 1) {
        previousCard.style.opacity = "0";
        previousCard.style.cursor = 'auto';
      } else {
        previousCard.style.opacity = "1";
        previousCard.style.cursor = 'pointer';
      }
    
      if (currentPageNumber === 14) {
        nextCard.style.opacity = "0";
        nextCard.style.cursor = 'auto';
      } else {
        nextCard.style.opacity = "1";
        nextCard.style.cursor = 'pointer';
    }
    
  }

function formatearNumero(num) {
    if (num < 10) {
      return "0" + num.toString();
    } else {
      return num.toString();
    }
  }

nextCard.addEventListener("click", scrollNext);
previousCard.addEventListener("click", scrollBack);
carrusel.addEventListener("scroll", updateCurrentPage);

updateCurrentPage();