
class user {
    constructor (nombre, pass){
        this.nombre = nombre
        this.pass = pass
    }
}

const admin = new user ("frusso", "leongym")

const confirmarAcceso = () => {

    let bucle = true

    while(bucle) {
        const nombre = prompt("Ingresa tu nombre de usuario")
        const pass = prompt("Ingresa tu contraseña")
        if(nombre === admin.nombre && pass === admin.pass){
            bucle = false
            break
        }
        else {
            alert("Usuario o contraseña incorrectos")
        }
    }
}

confirmarAcceso()
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

