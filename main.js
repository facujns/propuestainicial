


let myMap = L.map('map').setView([-34.90603185120515,-56.19126965676146
], 15);


L.Control.geocoder().addTo(myMap); // aqui llamo al plugin geocoder
var osm = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
    maxZoom: 18,    
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});
var CyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


var baseMaps = {
    'Vista satelital': osm,
    'CartoDB_Voyager': CartoDB_Voyager,
    'CyclOSM': CyclOSM,
}
L.control.layers(baseMaps).addTo(myMap);
L.control.locate().addTo(myMap); 




// Función para agregar un marker dando doble click
myMap.on('dblclick', e =>{
    let latLng = myMap.mouseEventToLatLng(e.originalEvent)
    console.log(latLng)
    L.marker([latLng.lat, latLng.lng]).addTo(myMap);
    console.log(latLng)

})                                                         