
class Personas {

    constructor(nombre, numSocio) {
        this.nombre = nombre
        this.numSocio = numSocio
    }

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
    
}

/*
const crearPersona = () => {
    let nombre = prompt ("Ingrese su nombre")
    let numSocio = prompt ("ingrese su número de socio")
    alert (`Bienvenido ${nombre}, socio número ${numSocio}`)

    let socio = new Personas (nombre, numSocio)
    return socio
}
crearPersona()
*/

let nombre = prompt ("Ingrese su nombre")
let numSocio = prompt (`Hola ${nombre}. Ingresá su numero de socio`)

let socio = new Personas (nombre, numSocio)
socio.elegirActividad()