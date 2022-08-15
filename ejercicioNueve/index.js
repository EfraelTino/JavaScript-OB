const myF = val => {
    if (typeof val == "string") {
        return val
    } else {
        throw new Error("El valor debe ser de tipo string")
    }
}


const str = 1
try {
    const hola = str
    console.log(hola)
} catch (e) {
    console.log("ERROR")
    console.error(`El valor de e es: ${e}`)
} finally {
    console.log("Esto se va a ejecutar si hay errrores  o no ")
}