import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs");
const result = zlib.gzipSync(source);
console.info(source.toString());
console.info(result.toString());

fs.writeFileSync("zlib-compress.mjs.txt", result);