# combine-tiles

**Combine map tiles into a single large image.** Uses [GraphicsMagick](https://www.npmjs.com/package/gm). Similar to [abacus](https://github.com/mapbox/abaculus#abaculus) and [merge-tiles](https://github.com/stadt-bielefeld/merge-tiles#merge-tiles).

[![npm version](https://img.shields.io/npm/v/combine-tiles.svg)](https://www.npmjs.com/package/combine-tiles)
[![build status](https://img.shields.io/travis/derhuerst/combine-tiles.svg)](https://travis-ci.org/derhuerst/combine-tiles)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/combine-tiles.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

Make sure you have the `gm` binary from [GraphicsMagick](http://www.graphicsmagick.org) installed.

```shell
npm install combine-tiles
```


## Usage

```js
const combineTiles = require('combine-tiles')

const size = 300
const tiles = [
	{x: 0, y: 0, file: '/path/to/0-0.png'},
	{x: 1, y: 0, file: '/path/to/1-0.png'},
	{x: 0, y: 1, file: '/path/to/0-1.png'},
	{x: 1, y: 1, file: '/path/to/1-1.png'}
]
const dest = '/path/to/combined.png'

combineTiles(tiles, size, size, dest, (err) => {
	if (err) console.error(err)
})
```

You may want to use [tilebelt](https://github.com/mapbox/tilebelt#features) to convert bounding boxes into `[x, y, zoom]` tiles or [tile-cover](https://github.com/mapbox/tile-cover#tile-cover) to generate a list of tiles in a bounding box.


## Contributing

If you have a question or have difficulties using `combine-tiles`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/combine-tiles/issues).
