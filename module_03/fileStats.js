import fsPromises from 'fs/promises';

const checkFileStats = async (filename)=>{
    const stats = await fsPromises.stat(filename);
    console.log(stats.size);
    console.log(stats.isFile());
    console.log(stats);
}

export {checkFileStats};