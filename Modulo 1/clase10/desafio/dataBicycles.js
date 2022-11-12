const fs = require("fs");
let bicycles = fs.readFileSync(__dirname + "/bicycles.json", "utf-8");
bicycles = JSON.parse(bicycles);

module.exports = bicycles;