/**
 * BudE StoryBoard AI
 * Update v0040
 *
 * Character Studio Foundation
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
"Installing Character Studio..."
);



const folders=[

"characters",
"characters/data"

];


folders.forEach(folder=>{

const dir=path.join(ROOT,folder);

if(!fs.existsSync(dir)){
fs.mkdirSync(dir,{recursive:true});
}

});



write(

"src/services/characterService.ts",

`

export interface Character {

id:string;

name:string;

role:string;

description:string;

traits:string;

}


export function createCharacter(

name:string,

role:string,

description:string,

traits:string

):Character{


return {

id:
crypto.randomUUID(),

name,

role,

description,

traits

};


}

`

);



write(

"src/components/CharacterStudio.tsx",

`

import {useState} from "react";


export default function CharacterStudio(){


const [name,setName]=useState("");

const [role,setRole]=useState("");

const [traits,setTraits]=useState("");

const [saved,setSaved]=useState<string[]>([]);



function create(){


setSaved([

...saved,

name+" - "+role+" - "+traits

]);


setName("");

setRole("");

setTraits("");

}



return (

<div className="card">


<h2>
Character Studio
</h2>


<input

placeholder="Character Name"

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<input

placeholder="Role"

value={role}

onChange={
e=>setRole(e.target.value)
}

/>


<input

placeholder="Traits"

value={traits}

onChange={
e=>setTraits(e.target.value)
}

/>


<button onClick={create}>

Create Character

</button>



<h3>
Characters
</h3>


{

saved.map((c,i)=>(

<p key={i}>
🧬 {c}
</p>

))

}


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

'import StoryStudio from "./components/StoryStudio";',

'import StoryStudio from "./components/StoryStudio";\nimport CharacterStudio from "./components/CharacterStudio";'

);



code = code.replace(

"<StoryStudio />",

"<StoryStudio />\n\n<CharacterStudio />"

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
"update-v0040.js"
);


version.installedModules.push(
"character-studio"
);


version.currentVersion="0.70";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Character Studio installed."
);


}


module.exports={
run
};
