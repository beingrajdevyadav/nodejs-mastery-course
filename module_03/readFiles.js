import fs from "fs";
import fsPromises from "fs/promises"

// Read Files
// a) Sync
// b) async with fs/promises + await

function ReadFileSync(filename){
const data = fs.readFileSync(filename, 'utf-8');
console.log(data)
}



export {ReadFileSync};
