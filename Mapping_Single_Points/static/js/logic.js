// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level
var map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map with a center and zoom level useful 
// to add multiple layers and change background
// let map = L.map("mapid", {
   // center: [
     //  40.7, -94.5
   //],
   //zoom: 4
//})

// Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// We create the title layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
//Then we add our 'graymap' title layer to the map
streets.addTo(map)