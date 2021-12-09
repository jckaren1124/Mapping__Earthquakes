// Add console.log to check to see if our code is working.
console.log("working");

//Skill Drill 13.5.2-onEachFeature()
//L.geoJSON(sanFranAirport, {
  //onEachFeature: function(feature, layer) {
    //console.log(layer);
    //layer.bindPopup("<h2>" + `Airport code: ` + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
   //}
//}).addTo(map);

//We create the street view tile layer that will be the background of our map. 
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map. (Class Module 15.5.4)
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: light,
  Dark: dark
};

// Create the map object with center, zoom level and default layer. (Class Module 13.5.4)
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
})

// Pass our map layers into our layers control and add the layers control to the map. (Class Mod 13.5.4)
L.control.layers(baseMaps).addTo(map);


// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/jckaren1124/Mapping__Earthquakes/main/torontoRoutes.json";

// Create a style for the lines. (alternative to Skill Drill 13.5.5)
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  //L.geoJSON(data).addTo(map);
//});
//Creating a GeoJSON layer with the retrieved data (Skill Drill 13.5.5)
  L.geoJSON(data, {
    style: myStyle,
    //color: "#ffffa1",
    //weight: 2, 
    onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3>Destination: " + feature.properties.dst + "</h3>");
    }
  }).addTo(map);
});