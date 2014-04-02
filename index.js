module.exports = function(coordinates, properties){
  if(coordinates === null) return new Error('No coordinates passed')
  var polygon = { 
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": coordinates
    },
    "properties": properties
  }
  return polygon
}