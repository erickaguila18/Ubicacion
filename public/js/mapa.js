function cargar(){
L.mapbox.accessToken = 'pk.eyJ1IjoiZXJpY2thZ3VpbGExOCIsImEiOiJla3prRmd3In0.FmFKzfaq4SLneLnbVnNlvA';
var map = L.mapbox.map('map', 'erickaguila18.li9a8dag');
L.tileLayer('https:/a.tiles.mapbox.com/v4/erickaguila18.li9a8dag/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
    attribution: 'SUCUT',
    maxZoom: 17
}).addTo(map);

function onLocationFound(e) {

	var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
    var cities = L.layerGroup([littleton, denver, aurora, golden]);
    cities.addTo(map);

    var radius = e.accuracy / 2;
    L.marker(e.latlng,{draggable: true}).addTo(map)
        .bindPopup("Estas a " + radius + " metros de este punto").openPopup();
    L.circle(e.latlng, radius).addTo(map);
    document.getElementById("ubicacion").value=e.latlng;
}

function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);
map.on('locationfound', onLocationFound);
map.locate({setView: true, maxZoom: 17});
}


