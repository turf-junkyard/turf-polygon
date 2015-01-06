/**
 * Generates a new GeoJSON Polygon feature, given an array of coordinates
 * and list of properties.
 *
 * @module turf/polygon
 * @param {number[][]} rings - an array of LinearRings
 * @param {Object} properties - an optional properties object
 * @return {GeoJSON-Polygon} output - a GeoJSON Polygon object
 * @example
 * var poly1 = turf.polygon([[[20.0,0.0],[101.0,0.0],[101.0,1.0],[100.0,1.0],[100.0,0.0]]])
 * var poly2 = turf.polygon([[[20.0,0.0],[101.0,0.0],[101.0,1.0],[100.0,1.0],[100.0,0.0]]],
 *   {name: 'line 1', distance: 145})
 * console.log(poly1)
 * console.log(poly2)
 */
module.exports = function(coordinates, properties){
  if(coordinates === null) return new Error('No coordinates passed');
  var polygon = { 
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": coordinates
    },
    "properties": properties
  };

  if(!polygon.properties){
    polygon.properties = {};
  }
  
  return polygon;
}
