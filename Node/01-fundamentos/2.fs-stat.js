const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

console.log(
	stats.isFile(), // si es un archivo
	stats.isDirectory(), // si es un directorio
	stats.isSymbolicLink(), // si es un enlace
	stats.size, // tamaño
);
