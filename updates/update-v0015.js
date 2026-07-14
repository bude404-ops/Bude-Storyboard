/**
 * BudE StoryBoard AI
 * Update v0015
 *
 * GitHub Pages Docs Deployment
 *
 * Converts Vite output for
 * GitHub Pages branch deployment.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


function write(file, content){

    const target = path.join(ROOT, file);

    const folder = path.dirname(target);

    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder,{
            recursive:true
        });
    }

    fs.writeFileSync(target, content);

    console.log("Updated:", file);
}



function updateVite(){

write(
"vite.config.ts",
`
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({

plugins:[
react()
],

base:"./",

build:{
outDir:"docs"
}

});
`
);

}



function updatePackage(){

const file =
path.join(ROOT,"package.json");


if(fs.existsSync(file)){

let pkg =
JSON.parse(
fs.readFileSync(file,"utf8")
);


pkg.scripts = {

...pkg.scripts,

build:"vite build"

};


fs.writeFileSync(
file,
JSON.stringify(
pkg,
null,
2
)
);


console.log(
"Updated package.json"
);

}

}



function createNoJekyll(){

write(
"docs/.nojekyll",
""
);

}



function updateVersion(){

const file =
path.join(ROOT,"versions.json");


if(fs.existsSync(file)){

let versions =
JSON.parse(
fs.readFileSync(file,"utf8")
);


versions.completedUpdates.push(
"update-v0015.js"
);


versions.currentVersion =
"0.44";


versions.installedModules.push(
"github-pages-docs-deployment"
);


versions.systemHealth =
"healthy";


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
"Running GitHub Pages Deployment Update..."
);


updateVite();

updatePackage();

createNoJekyll();

updateVersion();


console.log(
"Deployment configuration complete."
);

}


module.exports={
run
};
