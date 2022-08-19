
const parrafos = document.querySelectorAll(".parrafo");

const secciones = document.querySelectorAll(".seccion");

const tacho = document.querySelectorAll(".tacho")

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event=>{
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id",parrafo.id);
    })
    parrafo.addEventListener("dragend", ()=>{
        // console.log("Se termino el arrastre")
        parrafo.classList.remove("dragging");
    })
})

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover",event =>{
        event.preventDefault();
        event.dataTransfer.dropEffect = "move"
    })

    seccion.addEventListener("drop", event=>{
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo= document.getElementById(id_parrafo)
        event.dataTransfer.getData("id")
        seccion.remove(parrafo)
})
})
tacho.forEach(tacho =>{
    tacho.addEventListener("dragover",event =>{
        event.preventDefault();
        event.dataTransfer.dropEffect = "move"
    })
    tacho.addEventListener("drop",event=>{
        const id_parrafo=event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        event.dataTransfer.getData("id")
        tacho.appendChild.remove(parrafo)
    })
})