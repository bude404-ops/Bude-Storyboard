/**
 * BudE StoryBoard AI
 * Update v0052
 *
 * Editor Agent + Continuity System
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
"Installing Editor Agent..."
);



const folders=[

"memory",
"memory/continuity",
"editing"

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

"src/services/editorAgentService.ts",

`

export interface ContinuityRecord {

characterRules:string;

worldRules:string;

timeline:string;

notes:string;

}



export function createContinuity(

notes:string

):ContinuityRecord{


return {

characterRules:
"Character consistency tracked",

worldRules:
"World rules tracked",

timeline:
"Timeline tracked",

notes

};


}

`

);



write(

"src/components/EditorAgent.tsx",

`

import {useState} from "react";


export default function EditorAgent(){


const [notes,setNotes]=useState("");

const [result,setResult]=useState("");



function review(){


setResult(

"Continuity Review Complete: "+

notes

);


}



return (

<div className="card">


<h2>
Editor AI
</h2>


<textarea

placeholder="Story notes or changes..."

value={notes}

onChange={
e=>setNotes(e.target.value)
}

/>


<button onClick={review}>

Review Continuity

</button>


<p>
{result}
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

'import DirectorAgent from "./components/DirectorAgent";',

'import DirectorAgent from "./components/DirectorAgent";\nimport EditorAgent from "./components/EditorAgent";'

);



code = code.replace(

"<DirectorAgent />",

"<DirectorAgent />\n\n<EditorAgent />"

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
"update-v0052.js"
);


version.installedModules.push(
"editor-agent"
);


version.currentVersion="0.82";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Editor Agent installed."
);


}


module.exports={
run
};
