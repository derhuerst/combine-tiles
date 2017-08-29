'use strict'

const minBy = require('lodash.minby')
const maxBy = require('lodash.maxby')
const sortBy = require('lodash.sortby')
const {exec} = require('child_process')
const esc = require('any-shell-escape')

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

	const op = ['gm', 'convert', '-background', 'transparent']
	// todo: transparent background
	for (let tile of index) {
		const x = tile.x * tWidth
		const y = tile.y * tHeight
		op.push('-page', '+' + x + '+' + y, tile.file)
	}
	op.push('-mosaic', dest)

	exec(op.join(' '), {stdio: 'ignore'}, (err) => {
		if (err) cb(err)
		else cb()
	})
}

module.exports = combineTiles
