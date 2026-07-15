/**
 * BudE StoryBoard AI
 * Update v0037
 *
 * Evolution Tracking Repair
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");

const VERSION_FILE =
path.join(ROOT,"versions.json");


function run(){

console.log(
"Repairing Evolution Tracking..."
);


let version =
JSON.parse(
fs.readFileSync(
VERSION_FILE,
"utf8"
)
);



if(!version.installedModules){

version.installedModules=[];

}



if(!version.completedUpdates){

version.completedUpdates=[];

}


// Normalize versions

version.currentVersion =
"0.37";



version.systemHealth =
"healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(

VERSION_FILE,

JSON.stringify(
version,
null,
2
)

);



console.log(
"Evolution tracking repaired."
);


}



module.exports={
run
};
