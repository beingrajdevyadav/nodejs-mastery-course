import fs from 'fs';
import fsPromises from 'fs/promises'
import { ReadFileSync } from './readFiles.js';

// append to files
// sync way
// async way

const SyncAppendFile = (filename, content)=>{
fs.appendFileSync(filename,content );
};

// SyncAppendFile('sample.txt', 'I am doing very well.');

const AsyncAppendFile = async (filename, content)=>{
 await   fsPromises.appendFile(filename, content);
 ReadFileSync('sample.txt');
}

export {SyncAppendFile, AsyncAppendFile};