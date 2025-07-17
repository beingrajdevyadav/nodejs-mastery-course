import { AsyncReadFile, ReadFileSync } from "./readFiles.js";
import {WriteSyncFiles} from './writeFiles.js';

// ReadFileSync('index.html');
// ReadFileSync('sample.txt')

// AsyncReadFile('index.html');
// AsyncReadFile('sample.txt');

WriteSyncFiles('sample.txt', "I'm doing nodejs mastery course.");