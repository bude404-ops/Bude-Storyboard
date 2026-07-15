const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");

const VERSION_FILE =
path.join(ROOT,"versions.json");

const UPDATE_FOLDER = __dirname;


function loadVersion(){

return JSON.parse(
fs.readFileSync(
VERSION_FILE,
"utf8"
)
);

}



function saveVersion(version){

fs.writeFileSync(
VERSION_FILE,
JSON.stringify(
version,
null,
2
)
);

}



function findUpdates(version){

return fs.readdirSync(UPDATE_FOLDER)

.filter(file =>
file.startsWith("update-v") &&
file.endsWith(".js")
)

.sort()

.filter(file =>
!version.completedUpdates.includes(file)
);

}



function run(){

console.log(
"BudE Evolution Engine Starting..."
);


let version =
loadVersion();



if(!version.completedUpdates){

version.completedUpdates=[];

}



const updates =
findUpdates(version);



console.log(
"Pending updates:",
updates.length
);



for(const file of updates){

try{

console.log(
"Running:",
file
);


const update =
require(
path.join(
UPDATE_FOLDER,
file
)
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


saveVersion(version);


console.log(
"Completed:",
file
);


}

catch(error){

console.error(
"FAILED:",
file
);

console.error(
error.message
);

break;

}

}



version.currentVersion =
"0."+version.completedUpdates.length;


version.systemHealth =
"healthy";


version.lastUpdate =
new Date().toISOString();


saveVersion(version);


console.log(
"Evolution Complete"
);


}


run();
