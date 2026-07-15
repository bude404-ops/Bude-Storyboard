/**
 * BudE StoryBoard AI
 * Update v0039
 *
 * Automatic Update Discovery
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function run(){

console.log(
"Installing Automatic Update Discovery..."
);



const discoveryPath =
path.join(
ROOT,
"updates/update-discovery.js"
);



const code = `

const fs=require("fs");
const path=require("path");


const ROOT=
path.join(__dirname,"..");


const UPDATES=
__dirname;


const PENDING=
path.join(
UPDATES,
"pending"
);



function discover(){


if(!fs.existsSync(PENDING)){

fs.mkdirSync(
PENDING,
{
recursive:true
}
);

}



const files =
fs.readdirSync(UPDATES)
.filter(
file=>

file.startsWith("update-v") &&

file.endsWith(".js")

);



for(const file of files){


if(
file==="update-engine.js"
||
file==="update-discovery.js"
){

continue;

}



const source =
path.join(
UPDATES,
file
);


const target =
path.join(
PENDING,
file
);



if(!fs.existsSync(target)){


fs.copyFileSync(
source,
target
);


console.log(
"Queued:",
file
);


}


}


}



module.exports={
discover
};

`;



fs.writeFileSync(
discoveryPath,
code
);



/*
 update version
*/

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
"update-v0039.js"
);


version.installedModules.push(
"automatic-update-discovery"
);


version.currentVersion="0.69";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(
version,
null,
2
)
);


}


console.log(
"Automatic discovery installed."
);


}


module.exports={
run
};
