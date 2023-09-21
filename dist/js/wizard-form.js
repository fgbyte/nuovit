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

nextCard.addEventListener("click", scrollNext);
previousCard.addEventListener("click", scrollBack);
