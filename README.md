# turf-polygon

[![build status](https://secure.travis-ci.org/Turfjs/turf-polygon.png)](http://travis-ci.org/Turfjs/turf-polygon)

turf polygon module


### `turf.polygon(rings, properties)`

Takes an array of LinearRings and optionally an Object with properties and returns a Polygon feature.


### Parameters

| parameter    | type                         | description                     |
| ------------ | ---------------------------- | ------------------------------- |
| `rings`      | Array\.\<Array\.\<Number\>\> | an array of LinearRings         |
| `properties` | Object                       | _optional:_ a properties object |


### Example

```js
var polygon = turf.polygon([[
 [-2.275543, 53.464547],
 [-2.275543, 53.489271],
 [-2.215118, 53.489271],
 [-2.215118, 53.464547],
 [-2.275543, 53.464547]
]], { name: 'poly1', population: 400});

//=polygon
```


**Returns** `Feature.<Polygon>`, a Polygon feature

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-polygon
```

## Tests

```sh
$ npm test
```


