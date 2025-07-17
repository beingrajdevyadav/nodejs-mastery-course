import fs from "fs";
import fsPromises from "fs/promises"
import { AsyncReadFile } from "./readFiles.js";


// Write files
// a) sync way
// b) async way

const WriteSyncFiles = (filename, content)=>{
    fs.writeFileSync(filename, content);
    console.log("file written successfully.");
    AsyncReadFile(filename);

}


export {WriteSyncFiles}