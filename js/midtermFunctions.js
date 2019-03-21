/* ================================
Week 7 Assignment: Midterm Functions + Signatures
================================ */

// Figures out which function to display feature by type
function aes(feature) {
  switch(feature.properties.type) {
    case "museum":
      museum(feature);
      break;
    case "grocery":
      grocery(feature);
      break;
    case "transit":
      transit(feature);
      break;
    default:
      general(feature);
  }
}

// Take in markers to remove and remove them - requires global list(?) of markers
function reset(layer) {
  map.removeLayer(grand);
}
