import { AsyncAppendFile, SyncAppendFile } from "./appendFiles.js";
import { AsyncReadFile, ReadFileSync } from "./readFiles.js";
import {AsyncWriteFiles, WriteSyncFiles} from './writeFiles.js';

// ReadFileSync('index.html');
// ReadFileSync('sample.txt')

// AsyncReadFile('index.html');
// AsyncReadFile('sample.txt');

// WriteSyncFiles('sample.txt', "I'm doing nodejs mastery course.");
// AsyncWriteFiles("sample.txt", 'this is asyc file written content in nodejs mastery course.');

// SyncAppendFile('sample.txt', 'I am doing very well.');
AsyncAppendFile('sample.txt', "nodejs is very amazing.")