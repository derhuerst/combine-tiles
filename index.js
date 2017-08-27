'use strict'

const minBy = require('lodash.minby')
const maxBy = require('lodash.maxby')
const sortBy = require('lodash.sortby')
const gm = require('gm')

const combineTiles = (tiles, tWidth, tHeight, dest, cb) => {
	const offsetX = minBy(tiles, tile => tile.x).x
	const offsetY = minBy(tiles, tile => tile.y).y
	const makeRelative = (tile) => ({
		x: tile.x - offsetX,
		y: tile.y - offsetY,
		file: tile.file
	})

	const index = sortBy(tiles.map(makeRelative), ['y', 'x'])
	const cols = 1 + maxBy(index, tile => tile.x).x
	const rows = 1 + maxBy(index, tile => tile.y).y
	const w = tWidth * cols
	const h = tHeight * rows

	const op = gm()
	op.tile(cols, rows)
	op.geometry('+0+0') // no border
	for (let i = 0; i < index.length; i++) {
		const tile = index[i]
		op.montage(tile.file)
	}
	op.write(dest, cb)
}

module.exports = combineTiles
