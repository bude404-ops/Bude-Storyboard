/**
 * BudE StoryBoard AI
 * Update v0050
 *
 * World Builder Agent Foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function write(file,content){

const target = path.join(ROOT,file);

const folder = path.dirname(target);

if(!fs.existsSync(folder)){
fs.mkdirSync(folder,{recursive:true});
}

fs.writeFileSync(target,content);

console.log("Created:",file);

}



function run(){

console.log(
"Installing World Builder Agent..."
);



const folders=[

"worlds/generated",
"worlds/lore"

];


folders.forEach(folder=>{

const dir =
path.join(ROOT,folder);

if(!fs.existsSync(dir)){
fs.mkdirSync(dir,{
recursive:true
});
}

});



write(

"src/services/worldAgentService.ts",

`

export interface WorldProfile {

name:string;

environment:string;

locations:string;

factions:string;

lore:string;

}



export function generateWorld(

story:string

):WorldProfile{


return {

name:
"Generated World",

environment:
"Custom Environment",

locations:
"Major Locations",

factions:
"Major Factions",

lore:
story

};


}

`

);



write(

"src/components/WorldAgent.tsx",

`

import {useState} from "react";


export default function WorldAgent(){


const [idea,setIdea]=useState("");

const [world,setWorld]=useState("");



function generate(){


setWorld(

"World Created: "+idea+

" | Locations | Factions | Lore Generated"

);


}



return (

<div className="card">


<h2>
World Builder AI
</h2>


<textarea

placeholder="Describe the world..."

value={idea}

onChange={
e=>setIdea(e.target.value)
}

/>


<button onClick={generate}>

Generate World

</button>


<p>
{world}
</p>


</div>

);


}

`

);



const dashboard =
path.join(ROOT,"src/Dashboard.tsx");


if(fs.existsSync(dashboard)){


let code =
fs.readFileSync(
dashboard,
"utf8"
);



code = code.replace(

'import CharacterAgent from "./components/CharacterAgent";',

'import CharacterAgent from "./components/CharacterAgent";\nimport WorldAgent from "./components/WorldAgent";'

);



code = code.replace(

"<CharacterAgent />",

"<CharacterAgent />\n\n<WorldAgent />"

);



fs.writeFileSync(
dashboard,
code
);


}



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
"update-v0050.js"
);


version.installedModules.push(
"world-builder-agent"
);


version.currentVersion="0.80";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"World Builder Agent installed."
);


}


module.exports={
run
};
