const tilesProvider = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';


let myMap = L.map('map').setView([-34.90603185120515,-56.19126965676146
], 15);



L.tileLayer(tilesProvider,{
    maxZoom: 18,    
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap)
L.Control.geocoder().addTo(myMap); // aqui llamo al plugin geocoder


// Función para agregar un marker dando doble click
myMap.on('dblclick', e =>{
    let latLng = myMap.mouseEventToLatLng(e.originalEvent)
    console.log(latLng)
    L.marker([latLng.lat, latLng.lng]).addTo(myMap);
    console.log(latLng)

})                                                         