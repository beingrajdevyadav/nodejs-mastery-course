import fs from 'fs';
import fsPromises from 'fs/promises';

// 1. create
// 2. read
// 3. delete


const createDir = async (dirName)=>{
    await fsPromises.mkdir(dirName, {recursive:true});
    console.log(dirName, " directory created successfully.");
}


const readDir = async (dirName)=>{
    const files = await fsPromises.readdir(dirName);
    console.log(files);
}


const deleteDir = async (dirName)=>{
    await fsPromises.rm(dirName, {recursive:true, force: true});
    console.log(dirName, " deleted successfully!");
}


export {createDir, readDir, deleteDir};