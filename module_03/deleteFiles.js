import fs from "fs";
import fsPromises from 'fs/promises';

// delete files 
// 1. sync way
// 2. async way

const DeleteFileSync = (filename)=>{
    fs.unlinkSync(filename);
    console.log(filename, " file deleted.");

}

export {DeleteFileSync}