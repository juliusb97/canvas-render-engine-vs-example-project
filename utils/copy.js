const fs = require("fs");
const path = require("path");

const srcFiles = fs.readdirSync(path.join("../canvas-render-engine-vs/src/")).filter(pageName => pageName.includes(".ts"));

srcFiles.forEach((filename) => {
	fs.copyFileSync(path.join(`../canvas-render-engine-vs/src/${filename}`), path.join(`./src/${filename}`));
});

console.log(`copy.js: copied ${srcFiles.length} files.`);