let marker, map;
function initMap(){
    const position ={
        lat: -25.363,
        lng: 131.044     
    }

    const map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center:position
    })

    const marker = new google.maps.Marker({
        position:position,
        map,
        title:"Posicion Incial"
    })
    /*accedemos a la localizacion del navegador*/

    /*OBTENEMOS LA GEOLOCALIZACION¨*/
        // marker.setPosition({lat,lng})
    geoPositia()

}
//Creamos una funcion
function geoPositia(){

    //Por si otros navegadores no tienen acceso al API
    if(navigator.geolocation ){
        const geolo=navigator.geolocation
        const options ={timeout:6000}
        //quiero obtener
        const wtachPos=geolo.watchPosition(centraMapa, onError, options)
    }else{
        alert("Tu navegador no admite geolocalizacion")
    }
    
}

function centraMapa(position ){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}
function onError(error){
    console.error(error)
}
