
class Personas {
    constructor({nombre, clase, cantDias, diasSemana, horario}) {
        this.nombre = nombre;
        this.clase = clase;
        this.cantDias = cantDias;
        this.diasSemana = diasSemana;
        this.horario = horario;
    }
}

let listaInscriptos;
if(localStorage.getItem("listaInscriptos") == null) {
    listaInscriptos = []
} else {
    listaInscriptos = JSON.parse(localStorage.getItem("listaInscriptos"))
}

const crearSocio = () => {

    const socio = new Personas ({
            nombre: document.getElementById("nombre").value,
            clase: document.getElementById("clase").value,
            cantDias: document.getElementById("cantDias").value,
            diasSemana: document.getElementById("diasSemana").value,
            horario: document.getElementById("horario").value,
        })
    
        listaInscriptos.push(socio)
        localStorage.setItem("listaInscriptos", JSON.stringify(listaInscriptos))

}

let boton = document.getElementById("boton")
boton.onclick = () => {
    crearSocio()
}

//Falta: 
//1) Armar la estructura para que, dependiendo los dias que uno elija, aparezcan las opciones de 3 o 2 dias
//2) Armar el efecto de agrande de las cosas cuando uno hace hover por encima
//3)Armar la verificacion de los datos que ingresan en el formulario (principalmente el nombre)