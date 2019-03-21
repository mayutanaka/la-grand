/* =====================
Leaflet Configuration
===================== */
var map = L.map('map', {
  center: [34.05488610928646, -118.2489502429962],
  zoom: 15
});

basemapURL = "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";

var Stamen_TonerLite = L.tileLayer(basemapURL, {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 6,
  maxZoom: 18,
  ext: 'png'
}).addTo(map);

/* ================
Read data
==================*/
var data = L.GeoJSON('../grandLA.geojson').addTo(map);

/* ================
Slide Deck creation
==================*/
var slide1 = Slide("A New Vision for LA", slideText1);
var slide2 = Slide("Transit Accessibility", slideText2);
var slide3 = Slide("Nearby Groceries", slideText3);
var slide4 = Slide("Nearby Parks", slideText4);
var slide5 = Slide("Nearby Museums", slideText5);

var slideDeck = [slide1, slide2, slide3, slide4, slide5];
var currSlide = 0;

/*==========================
==========================*/
$(document).ready(function() {
  $('.slide-title').text(slideDeck[currSlide].title);
  $('#p1').text(slideDeck[currSlide].text[0]);
  $('#p2').text(slideDeck[currSlide].text[1]);

  if (currSlide > 0) {
    $('button').text('Previous').click(function() {
      currSlide-=1;
      console.log(data);
    });
  }

  if (currSlide < slideDeck.length-1) {
    $('button').text('Next').click(function() {
      currSlide+=1;
      console.log(data);
    });
  }

});


/* ================
Map data
==================*/
// function onEachFeature(feature, layer) {
//   switch(feature.properties.type) {
//     case "museum":
//       museum(feature);
//       break;
//     case "grocery":
//       grocery(feature);
//       break;
//     case "transit":
//       transit(feature);
//       break;
//     default:
//       general(feature);
//   }
//   layer.bindPopup(feature.properties.name);
// }
//
// L.geoJSON(geojsonFeature, {
//     onEachFeature: onEachFeature,
//     filter: function(feature, layer) {
//         return feature.properties.show_on_map;
//     }
// }).addTo(map);
