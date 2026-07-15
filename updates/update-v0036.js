/**
 * BudE StoryBoard AI
 * Update v0036
 *
 * Evolution Engine Queue Integration
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function write(file,content){

const target =
path.join(ROOT,file);

fs.writeFileSync(
target,
content
);

console.log("Updated:",file);

}



function run(){

console.log(
"Upgrading Evolution Engine..."
);



write(

"updates/update-engine.js",

`

const fs=require("fs");
const path=require("path");


const ROOT=path.join(__dirname,"..");

const VERSION=
path.join(ROOT,"versions.json");


const PENDING=
path.join(ROOT,"updates/pending");


const COMPLETED=
path.join(ROOT,"updates/completed");


const FAILED=
path.join(ROOT,"updates/failed");



function loadVersion(){

return JSON.parse(
fs.readFileSync(
VERSION,
"utf8"
)
);

}



function saveVersion(v){

fs.writeFileSync(
VERSION,
JSON.stringify(v,null,2)
);

}



function move(file,folder){

fs.renameSync(

path.join(PENDING,file),

path.join(folder,file)

);

}



function run(){


console.log(
"BudE Evolution Queue Active"
);



let version =
loadVersion();



if(!fs.existsSync(PENDING)){

console.log(
"No pending updates"
);

return;

}



const updates =
fs.readdirSync(PENDING)
.filter(
f=>f.endsWith(".js")
);



for(const file of updates){


try{


console.log(
"Executing:",
file
);



const update =
require(
path.join(PENDING,file)
);



if(typeof update.run !== "function"){

throw new Error(
"Missing run()"
);

}



update.run();



version.completedUpdates.push(
file
);



move(
file,
COMPLETED
);



console.log(
"Completed:",
file
);



}

catch(error){


console.error(
"Failed:",
error.message
);



move(
file,
FAILED
);



}

}



version.currentVersion =
"0.66";


version.systemHealth =
"healthy";


version.lastUpdate =
new Date().toISOString();



saveVersion(version);



}



run();

`

);



const versionFile =
path.join(ROOT,"versions.json");


if(fs.existsSync(versionFile)){

let version =
JSON.parse(
fs.readFileSync(
versionFile,
"utf8"
)
);


if(!version.completedUpdates)
version.completedUpdates=[];


if(!version.installedModules)
version.installedModules=[];


version.completedUpdates.push(
"update-v0036.js"
);


version.installedModules.push(
"evolution-engine-queue-integration"
);


version.currentVersion="0.66";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();


fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Evolution Engine upgraded."
);


}


module.exports={
run
};
