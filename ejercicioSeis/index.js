    //Lista de compras

const compras=["zanahora", "tomate", "ajo", "kion","papa"]
const add_compras=compras.push("aceite de girasol")
console.log(compras)
const compras_tot=["zanahora", "tomate", "ajo", "kion","papa","aceite de girasol"]

const dele_compras=compras.splice(5)
console.log(compras)    

    //Películas Favoritas
const peliFavorita = [
    {nomre: " jumanji", director: " Jake Kasdan", fecha:1995}, 
    {nomre: " Rayo MccQuen", director: " Johon Lasseter   ", fecha:2006},
    {nomre: " Rapidos y furiosos 6", director: " Rob Cohen", fecha:2015} 
]
const peli_A= peliFavorita.filter(obj => obj.fecha >2010)
console.log(peli_A)

const directores = peliFavorita.map(obj=>obj.director)
console.log(directores)

const peliOriginal = peliFavorita.map(obj=> obj.nomre)
console.log(peliOriginal)


const concat_director= directores.concat(peliOriginal)
console.log(concat_director)

const concat_todo= concat_director.reduce((directores, peliOriginal)=>{
    console.log(directores)
    console.log(peliOriginal)
    return directores + peliOriginal
})
console.log(concat_todo)