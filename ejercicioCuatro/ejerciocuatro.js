let myName = "Efrael";
let myLastName ="Villanueva";
let studiante = `${myName}${myLastName}`;

let estudianteMayus ="ESTUDIANTE de OB";
let estudianteMinus ="estudiante de ob";

let cont_estudiante = studiante.length;
console.log(cont_estudiante) 

let cont_nombre = myName.charAt(0);
console.log(cont_nombre)

let cont_apellido = myLastName.slice(-1);
console.log(cont_apellido)

let dele_let= studiante.trim(/ /g, "");
console.log(studiante)
console.log(studiante.includes("Efrael"))
console.log(estudianteMayus.toLocaleLowerCase())
console.log(estudianteMayus.toLocaleUpperCase());

