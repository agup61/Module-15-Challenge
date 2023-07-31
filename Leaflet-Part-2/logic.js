// Create the base layers
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create the baseMaps object
let baseMaps = {
  "Street Map": street,
  "Topographic Map": topo,
};

// Store the Earthquake data API
let quakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Store the tectonic plates data URL
let tectonicPlatesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// Perform a GET request to the query URL
d3.json(quakeData).then(function(data) {
  let features = data.features;

  // The function that will determine the colour of the circle based on the earthquake depth
  function chooseColor(depth) {
    if (depth > 90) return "#800080"; // Dark Purple
    else if (depth > 70) return "#9932CC"; // Purple
    else if (depth > 50) return "#BA55D3"; // Medium Purple
    else if (depth > 30) return "#DA70D6"; // Orchid
    else if (depth > 10) return "#FFA500"; // Orange
    else return "#FFD700"; // Light Orange
  }

  // Define a function that will give each earthquake a different radius based on its magnitude.
  function radiusCalc(magnitude) {
    // Adjust the calculation based on your desired radius scaling factor
    return Math.sqrt(Math.abs(magnitude)) * 65000;
  }

  let earthQuakesMarkers = [];

  // Loop through the features array, and create one marker for each earthquake
  for (let i = 0; i < features.length; i++) {
    let location = features[i].geometry;

    if (location) {
      earthQuakesMarkers.push(
        L.circle([location.coordinates[1], location.coordinates[0]], {
          fillOpacity: 0.9,
          color: "black",
          weight: 0.5,
          fillColor: chooseColor(location.coordinates[2]),
          radius: radiusCalc(features[i].properties.mag),
        }).bindPopup(`<h3>${features[i].properties.place}</h3><hr><h4>Magnitude: ${features[i].properties.mag}</h4>
        <h4>Depth: ${location.coordinates[2]} km</h4>
        <p>Time: ${new Date(features[i].properties.time)}</p>`)
      );
    }
  }

  // Add all the Earthquake Markers to a new layer group.
  let earthquakeLayer = L.layerGroup(earthQuakesMarkers);

  // Create layer for tectonic plates
  let tectonicPlates = new L.layerGroup();

  // Perform a GET request to the tectonic plates URL
  d3.json(tectonicPlatesUrl).then(function(plates) {
    L.geoJSON(plates, {
      color: "red",
      weight: 2
    }).addTo(tectonicPlates);
  });

  // Overlays that can be toggled on or off
  let overlayMaps = {
    "Earthquakes": earthquakeLayer,
    "Tectonic Plates": tectonicPlates
  };

  // Creating the map object
  let myMap = L.map("map", {
    center: [0,50],
    zoom: 3,
    layers: [street, earthquakeLayer, tectonicPlates]
  });

  // Set up the legend
  let legend = L.control({ position: "bottomright" });

  // Designing the legend
  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h5>Earthquake Depth</h5>";
    div.innerHTML += '<i style="background: #FFD700"></i><span>: -10 - 10</span><br>';
    div.innerHTML += '<i style="background: #4682B4"></i><span>: 10 - 30</span><br>';
    div.innerHTML += '<i style="background: #6495ED"></i><span>: 30 - 50</span><br>';
    div.innerHTML += '<i style="background: #BA55D3"></i><span>: 50 - 70</span><br>';
    div.innerHTML += '<i style="background: #9932CC"></i><span>: 70 - 90</span><br>';
    div.innerHTML += '<i style="background: #800080"></i><span>: 90+ </span><br>';

    return div;
  };

  // Adding the legend to the map
  legend.addTo(myMap);

  // Set up the title
  let title = L.control({ position: "topleft" });

  // Designing the title
  title.onAdd = function() {
    let div = L.DomUtil.create("div", "title");
    div.innerHTML += "<h1>USGS 'All' Earthquake data for the past 30 days</h1>";
    return div;
  };

  // Adding the title to the map
  title.addTo(myMap);

  // Create the layer control and add it to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
});
