const bton = document.querySelector("#btn");

bton.addEventListener("click",()=>{
    alert("Click en el boton")
})

$(()=>{
    $("#btn").click(()=>{
        // $("#h1").show()
console.log("Hola, estoy utilizando JQuery")
    })
})