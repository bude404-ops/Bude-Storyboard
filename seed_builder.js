// BudE Update Builder v3.0.2

const fs = require("fs");
const path = require("path");

const ROOT = "docs";

const VERSION_FILE = "bude_version.json";


function ensureFolder(folder){

    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder,{recursive:true});
    }

}


function writeFile(file,content){

    const location = path.join(ROOT,file);

    ensureFolder(path.dirname(location));

    fs.writeFileSync(
        location,
        content
    );

    console.log("Updated:",location);

}



function loadVersion(){

    if(!fs.existsSync(VERSION_FILE)){

        return "0.0.0";

    }


    return JSON.parse(
        fs.readFileSync(VERSION_FILE)
    ).version;

}



function saveVersion(version){

fs.writeFileSync(

VERSION_FILE,

JSON.stringify(
{
version:version,
updated:new Date().toISOString()
},
null,
2)

);

}



function applyUpdates(){

ensureFolder(ROOT);


if(!fs.existsSync("updates")){

console.log("No updates folder");

return;

}



const files =
fs.readdirSync("updates")
.filter(
f=>f.endsWith(".json")
);



files.forEach(updateFile=>{


const update =
JSON.parse(
fs.readFileSync(
"updates/"+updateFile,
"utf8"
)
);



console.log(
"Applying:",
update.version
);



update.changes.forEach(change=>{


if(change.action==="create" ||
change.action==="replace"){


writeFile(
change.file,
change.content
);


}



});



saveVersion(update.version);



});

}



applyUpdates();


console.log(
"BudE update process complete"
);
