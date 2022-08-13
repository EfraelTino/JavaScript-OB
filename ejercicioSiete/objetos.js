
const yo ={
    nombre:"efrael",
    apellido:"villanueva",
    edad: 20,
    altura: 1.65,
    isDeveloper: true
}

const edad =yo.edad
console.log(edad)

const amigos= [
    {nombre:"efrael", apellido:"villanueva", edad: 23, altura: 1.65, isDeveloper: true},
    {nombre:"edu",edad:20,isDeveloper:false},
    {nombre:"josue",edad:24,isDeveloper:false}
]

amigos.sort((a,b)=>b.edad - a.edad)
console.log(amigos)
