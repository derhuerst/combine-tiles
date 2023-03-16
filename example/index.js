'use strict'

const {join} = require('path')
const combineTiles = require('..')

const size = 256
const tiles = [
	{x: 63, y: 42, file: join(__dirname, '63-42-7.png')},
	{x: 64, y: 43, file: join(__dirname, '64-43-7.png')},
	{x: 63, y: 43, file: join(__dirname, '63-43-7.png')},
	{x: 64, y: 42, file: join(__dirname, '64-42-7.png')}
]
const dest = join(__dirname, 'combined.png')

combineTiles(tiles, size, size, dest)
.then(() => {
	console.info(`created combined tile ${dest}.`)
}, (err) => {
	console.error(err)
	process.exit(1)
})
