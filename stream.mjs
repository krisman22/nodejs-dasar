import fs from "fs";

const writer = fs.createWriteStream("target.log");

//mengirim data
writer.write("Hello, world!\n");
writer.write("Nias Coder");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
})
