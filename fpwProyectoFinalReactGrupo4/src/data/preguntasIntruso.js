export const intrusoRondas =[
    {
        id: 1,
        animal: [
            {nombre: "Perro", esIntruso: false, imagen: "/img/perro.png"},
            {nombre: "Gato", esIntruso: false, imagen: "/img/gato.png"},
            {nombre: "Leon", esIntruso: true, imagen: "/img/leon.png"}
        ],
        avisoExito: "¡Felicidades! El instruso es el Leon",
        avisoFallo: "Incorrecto, ese animal si vive en la granja"
    },{
        id: 2,
        animal: [
            {nombre: "Vaca", esIntruso: false, imagen: "/img/vaca 2.png"},
            {nombre: "Oveja", esIntruso: false, imagen: "/img/ovejaa.png"},
            {nombre:"Cocodrilo", esIntruso: true, imagen: "/img/cocodrilo.png"}
        ],
        avisoExito: "¡Felicidades! El intruso es el Cocodrilo",
        avisoFallo: "Incorrecto, ese animal si vive en la granja"
    },{
        id: 3,
        animal: [
            {nombre: "Gallina", esIntruso: false, imagen: "/img/gallo.png"},
            {nombre: "Chancho", esIntruso: false, imagen: "/img/chanchitoo.png"},
            {nombre: "Elefante", esIntruso: true, imagen: "/img/elefante.png"}
        ],
        avisoExito: "¡Felicidades! El intruso es el Elefante",
        avisoFallo: "Incorrecto, ese animal si vive en la granja"
    },{
        id: 4,
        animal: [
            {nombre: "Caballo", esIntruso: false, imagen: "/img/caballoo.png"},
            {nombre: "Vaca", esIntruso: false, imagen: "/img/vaca 2.png"},
            {nombre: "Tiburon", esIntruso: true, imagen: "/img/tiburon.png"}
        ],
        avisoExito: "¡Felicidades! El tiburon es un intruso",
        avisoFallo: "Incorrecto, ese animal si vive en la granja"
    },{
        id: 5,
        animal: [
            {nombre: "Oveja", esIntruso: false, imagen: "/img/ovejaa.png"},
            {nombre: "Perro", esIntruso: false, imagen: "/img/perro.png"},
            {nombre: "Pinguino", esIntruso: true, imagen: "/img/pinguino.png"}
        ],
        avisoExito: "¡Felicidades! El intruso es el Pinguino",
        avisoFallo: "Incorrecto, ese animal si vive en la granja"
    }
]