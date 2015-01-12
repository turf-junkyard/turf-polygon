var test = require('tape');
var polygon = require('./');

test('polygon', function(t){
  t.plan(7);

  var poly = polygon([[[5, 10], [20, 40], [40, 0], [5, 10]]] , {name: 'test polygon'});

  t.ok(poly);
  t.equal(poly.geometry.coordinates[0][0][0], 5);
  t.equal(poly.geometry.coordinates[0][1][0], 20);
  t.equal(poly.geometry.coordinates[0][2][0], 40);
  t.equal(poly.properties.name, 'test polygon');
  t.equal(poly.geometry.type, 'Polygon');
  t.equal(polygon([[[20.0,0.0],[101.0,0.0],[101.0,1.0],[100.0,1.0],[100.0,0.0]]]).message, 'First and last coordinate pair are not equivalent', 'returns an error message');
});
