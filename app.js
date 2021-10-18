
class Personas {
    constructor({nombre, numSocio}) {
        this.nombre = nombre;
        this.numSocio = numSocio;
    }
}

const listaDeSocios = []

const crearSocio = () => {

    const socio = new Personas ({
            nombre: document.getElementById("nombre").value,
            numSocio: document.getElementById("numeroSocio").value,
        })
    return socio

}

let boton = document.getElementsByTagName("button")
boton.onclick = () => {crearSocio()}

/*
const nuevaLista = JSON.parse(localStorage.getItem("socios"))

    nuevaLista.push(socio)

    localStorage.setItem("socios", JSON.stringify(nuevaLista))
*/

/*
elegirActividad(numSocio) {
        let act = prompt("Que querés realizar hoy? Zumba, funcional, gap, crossfit, musculación o kinesiología?");
            if (this.numSocio > 10000 && this.numSocio <= 20000) {
                if (act === "musculación" || act === "musculacion" || act === "kinesiologia" || act === "kinesiología") {
                    alert ("Adelante, pasá por las escaleras hacia el 1er piso");
                } else if (act === "zumba" || act === "funcional" || act === "gap" || act === "crossfit") {
                    alert ("No tenes habilitada esa actividad");
                } else {
                    alert ("Esa no es una actividad de este centro de entrenamiento")
                }
            } else if (this.numSocio <= 10000) {
                if (act === "musculación" || act === "musculacion" || act === "kinesiologia" || act === "kinesiología") {
                    alert ("Adelante, pasá por las escaleras hacia el 1er piso");
                } else if (act === "zumba" || act === "funcional" || act === "gap" || act === "crossfit") {
                    alert ("Adelante, pasá por el pasillo hacia la planta baja");
                } else {
                    alert ("Esa no es una actividad de este centro de entrenamiento")
                }
            } else {
                alert ("No sos socio actualmente. Deseas convertirte en uno?");
            }
        }
*/

