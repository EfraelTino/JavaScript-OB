class Estudiante {
    #nombre
    asignatura_1
    asignatura_2
    asignatura_3
    constructor(nombre, asignatura_1, asignatura_2,asignatura_3) {
        this.#nombre = nombre
        this.asignatura_1 = asignatura_1
        this.asignatura_2 = asignatura_2
        this.asignatura_3 = asignatura_3
    }
    obtenDatos() {
        return this.#nombre
    }
}

const new_estudiante =new Estudiante("efrael","js","node","css")
console.log(new_estudiante)
new_estudiante.nombre = "max"
console.log(new_estudiante.obtenDatos)