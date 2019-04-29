const mapboxgl = require("mapbox-gl");
const markerMaker = require("./markers");

// const markerChoice = document.getElementById("marker-choice");

mapboxgl.accessToken =
  "pk.eyJ1IjoiY29sbGVlbmpveSIsImEiOiJjanYyazFsbG0wY2VmNDRsODhjbmJ1aXJtIn0.M3JrhcO_E7m4sl2Ekd1IyA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/light-v10" // mapbox has lots of different map styles available.
});

const marker = markerMaker("activities", [-74.009151, 40.705086]);
marker.addTo(map);

// const addMarker = function(type, coordinates) {
//   new mapboxgl.Marker(markerMaker(type)).setLngLat(coordinates).addTo(map);
// };

// markerChoice.addEventListener('click', (event) => {
//   const type = event.target.id;
//   addMarker(type, coordinates)
// }

module.exports = map;
