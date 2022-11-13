const fs = require('fs');

const args = process.argv.slice(2);
const getFilepath = (filename) => `${args[0]}/${filename}`
// console.log(args)

let fileName = getFilepath('tsconfig.json');
let file = require(fileName);

file.compilerOptions.module = "es6";

fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file));
  console.log('writing to ' + fileName);
});

fileName = getFilepath('package.json');
file = require(fileName);

if (file.resolutions) {
  file.resolutions["@types/react"] = "^18"
} else {
  file.resolutions = {
    "@types/react": "^18"
  }
}

fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file));
  console.log('writing to ' + fileName);
});
