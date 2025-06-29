import { readdir, mkdir , rename } from "fs/promises";
import path from "path";

const targetFolder = "./test-folder";
let files ;

const listExtensions = async () => {
  files = await readdir(targetFolder);
  //   console.log(files)
  let extensions = new Set();
  for (const file of files) {
    const ext = path.extname(file); // e.g., '.jpg'
    extensions.add(ext.slice(1));
  }
  return extensions;
};

let extensions = await listExtensions();

for (const ext of extensions) {
  const folderPath = path.join( targetFolder, ext);
  await mkdir(folderPath, { recursive: true });
}

// console.log(files)
for(const file of files){
    const ext = path.extname(file).slice(1) ;
    const srcPath = path.join(targetFolder , file)
    const destPath = path.join(targetFolder , ext , file)
    await rename ( srcPath , destPath) ;
}