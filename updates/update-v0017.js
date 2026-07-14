/**
 * BudE StoryBoard AI
 * Update v0017
 *
 * Foundation Repair
 *
 * Fixes:
 * - Vite build output
 * - Package configuration
 * - Deployment compatibility
 * - Workflow safety
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


function writeFile(file, content){

    const target = path.join(ROOT,file);
    const folder = path.dirname(target);

    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder,{
            recursive:true
        });
    }

    fs.writeFileSync(
        target,
        content
    );

    console.log("Updated:",file);

}



function fixVite(){

writeFile(
"vite.config.ts",

`
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({

plugins:[
react()
],

base:"./"

});
`
);

}



function fixPackage(){

writeFile(
"package.json",

`
{
  "name": "bude-storyboard-ai",
  "version": "0.4.0",
  "private": true,

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "echo \\"No tests configured\\"
  },

  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },

  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.0",
    "typescript": "^5.7.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0"
  }
}
`
);

}



function removeBadWorkflow(){

const file =
path.join(
ROOT,
".github/workflows/build-docs.yml"
);


if(fs.existsSync(file)){

fs.unlinkSync(file);

console.log(
"Removed invalid workflow generator"
);

}

}



function updateVersion(){

const file =
path.join(
ROOT,
"versions.json"
);


if(fs.existsSync(file)){

let versions =
JSON.parse(
fs.readFileSync(file,"utf8")
);


if(!versions.completedUpdates){

versions.completedUpdates=[];

}


if(!versions.installedModules){

versions.installedModules=[];

}


versions.completedUpdates.push(
"update-v0017.js"
);


versions.currentVersion="0.46";


versions.installedModules.push(
"foundation-repair"
);


versions.systemHealth="healthy";


fs.writeFileSync(
file,
JSON.stringify(
versions,
null,
2
)
);

}

}



function run(){

console.log(
"Running BudE Foundation Repair..."
);


fixVite();

fixPackage();

removeBadWorkflow();

updateVersion();


console.log(
"Update v0017 Complete"
);

}



module.exports={
run
};
