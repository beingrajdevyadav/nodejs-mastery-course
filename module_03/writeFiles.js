import fs from "fs";
import fsPromises from "fs/promises"
import { AsyncReadFile } from "./readFiles.js";


// Write files
// a) sync way
// b) async way

const WriteSyncFiles = (filename, content) => {
    fs.writeFileSync(filename, content);
    console.log("file written successfully.");
    AsyncReadFile(filename, 'utf-8');

}

// async way write files

const AsyncWriteFiles = async (filename, content) => {
    await fsPromises.writeFile(filename, content);
    AsyncReadFile(filename, 'utf-8');

}

export { WriteSyncFiles , AsyncWriteFiles}