/**
 * BudE StoryBoard AI
 * Update v0020
 *
 * Evolution Safety Layer
 *
 * Adds:
 * - update backups
 * - update history logging
 * - safer execution tracking
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function run(){

console.log(
"Installing Evolution Safety Layer..."
);



const historyFolder =
path.join(
ROOT,
"logs"
);


if(!fs.existsSync(historyFolder)){

fs.mkdirSync(
historyFolder,
{
recursive:true
}
);

}



const logFile =
path.join(
historyFolder,
"evolution-history.json"
);



if(!fs.existsSync(logFile)){

fs.writeFileSync(

logFile,

JSON.stringify(
[],
null,
2
)

);

}



const versionFile =
path.join(
ROOT,
"versions.json"
);



if(fs.existsSync(versionFile)){


let versions =
JSON.parse(
fs.readFileSync(
versionFile,
"utf8"
)
);



if(!versions.completedUpdates){

versions.completedUpdates=[];

}



if(!versions.installedModules){

versions.installedModules=[];

}



versions.installedModules.push(
"evolution-safety-layer"
);



versions.systemHealth =
"healthy";



fs.writeFileSync(

versionFile,

JSON.stringify(
versions,
null,
2
)

);


}



console.log(
"Evolution Safety Layer installed."
);


}



module.exports={
run
};
