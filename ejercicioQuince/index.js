const nombre ="efrael";
const apellido="villanueva";

const nombre_apellido={
    nombre : nombre,
    apellido: apellido
}

sessionStorage.setItem(nombre_apellido)
localStorage.setItem(nombre_apellido)

document.cookie= "nombrecookies=efrael;expires=" +  new Date(2022,8,18,7,55).toUTCString()
