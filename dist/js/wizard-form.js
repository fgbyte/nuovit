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
    console.log(formData)

});