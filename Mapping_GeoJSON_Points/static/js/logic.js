// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center and zoom level. (Class Module 13.5.1-13.5.3)
//let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data. (Class Module 13.5.2)
//let sanFranAirport =
//{"type":"FeatureCollection","features":[{
    //"type":"Feature",
    //"properties":{
        //"id":"3469",
        //"name":"San Francisco International Airport",
        //"city":"San Francisco",
        //"country":"United States",
        //"faa":"SFO",
        //"icao":"KSFO",
        //"alt":"13",
        //"tz-offset":"-8",
        //"dst":"A",
        //"tz":"America/Los_Angeles"},
        //"geometry":{
            //"type":"Point",
            //"coordinates":[-122.375,37.61899948120117]}}
//]};

// Grabbing our GeoJSON data. (Class Module 13.5.2)
//L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  //pointToLayer: function(feature, latlng) {
    //console.log(feature);
    //return L.marker(latlng)
    //.bindPopup("<h2>" + feature.properties.city + "</h2>");
//}
//}).addTo(map);

//L.geoJSON(sanFranAirport, {
  //onEachFeature: function(feature, layer) {
    //console.log(layer);
    //layer.bindPopup("<h2>" + feature.properties.city + "</h2>");
   //}
//}).addTo(map);

//Skill Drill 13.5.2-onEachFeature()
//L.geoJSON(sanFranAirport, {
  //onEachFeature: function(feature, layer) {
    //console.log(layer);
    //layer.bindPopup("<h2>" + `Airport code: ` + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
   //}
//}).addTo(map);

//We create the street view tile layer that will be the background of our map. 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer. (Class Module 13.5.4)
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map. (Class Mod 13.5.4)
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map. (Class Module 13.5.1-13.5.3)
//streets.addTo(map);

// Accessing the airport GeoJSON URL (Class Module 13.5.3-13.5.4)
let airportData = "https://raw.githubusercontent.com/jckaren1124/Mapping__Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data. (Class Module 13.5.3-13.5.4)
d3.json(airportData).then(function(data) {
  console.log(data);
  L.geoJSON(data).addTo(map);
});
//Creating a GeoJSON layer with the retrieved data (Skill Drill 13.5.3)
  //L.geoJSON(data, {
    //onEachFeature: function(feature, layer) {
    //console.log(layer);
    //layer.bindPopup("<h2>" + `Airport code: ` + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
    //}
  //}).addTo(map);
//});
