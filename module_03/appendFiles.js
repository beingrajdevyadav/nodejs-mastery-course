import fs from 'fs';
import fsPromises from 'fs/promises'

// append to files
// sync way
// async way

const SyncAppendFile = (filename, content)=>{
fs.appendFileSync(filename,content );
};

SyncAppendFile('sample.txt', 'I am doing very well.');

export {SyncAppendFile};