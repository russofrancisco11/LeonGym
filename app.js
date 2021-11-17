
class user {
    constructor (nombre, pass){
        this.nombre = nombre
        this.pass = pass
    }
}

const admin = new user ("frusso", "leongym")

const url = "http://api.timezonedb.com/v2.1/get-time-zone?key=LKOOFOCV3G2Y&format=json&by=zone&zone=America/Argentina/Buenos_Aires"

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

$("#button").on("click", (e) => {
    e.preventDefault()
    listaInscriptos = JSON.parse(localStorage.getItem("listaInscriptos"))
    listaInscriptos.forEach(socio => {
        $("#divInscriptos").append(
            `<div>
            <h4>Socio: ${socio.nombre}</h4>
            <p>Clase: ${socio.clase}</p>
            <p>Cantidad de días: ${socio.cantDias}</p>
            <p>Días a la semana: ${socio.diasSemana}</p>
            <p>Horario: ${socio.horario}</p>
            </div>`
        )
    });
})

$.get(url, (data, est) => {
    if (est == "success"){
        $("#horario").append(
            `<div>
            <p>${data.formatted}<p>
            </div>
            `
        )
    }
})

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

