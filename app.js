//console.log("welcome to node".toUpperCase());
const { readFileSync, writeFileSync } = require("fs");

console.log(writeFileSync("./context/first.txt", "Bhai", { flag: "a" }));
console.log(readFileSync("./context/first.txt", "utf8"));
