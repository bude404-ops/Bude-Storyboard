/**
 * BudE StoryBoard AI
 * Update v0043
 *
 * Scene & Script Studio Foundation
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
"Installing Scene & Script Studio..."
);



const folders=[

"scenes",
"scenes/data",
"scripts",
"scripts/data"

];


folders.forEach(folder=>{

const dir =
path.join(ROOT,folder);

if(!fs.existsSync(dir)){
fs.mkdirSync(dir,{recursive:true});
}

});



write(

"src/services/sceneService.ts",

`

export interface Scene {

id:string;

episode:string;

title:string;

description:string;

dialogue:string;

}



export function createScene(

episode:string,

title:string,

description:string,

dialogue:string

):Scene{


return {

id:
crypto.randomUUID(),

episode,

title,

description,

dialogue

};


}

`

);



write(

"src/components/SceneStudio.tsx",

`

import {useState} from "react";


export default function SceneStudio(){


const [episode,setEpisode]=useState("");

const [title,setTitle]=useState("");

const [description,setDescription]=useState("");

const [dialogue,setDialogue]=useState("");

const [scenes,setScenes]=useState<string[]>([]);



function createScene(){


setScenes([

...scenes,

episode+
" | "+
title+
" | "+
description

]);


setEpisode("");

setTitle("");

setDescription("");

setDialogue("");

}



return (

<div className="card">


<h2>
Scene & Script Studio
</h2>


<input

placeholder="Episode"

value={episode}

onChange={
e=>setEpisode(e.target.value)
}

/>


<input

placeholder="Scene Title"

value={title}

onChange={
e=>setTitle(e.target.value)
}

/>


<textarea

placeholder="Scene Description"

value={description}

onChange={
e=>setDescription(e.target.value)
}

/>


<textarea

placeholder="Dialogue"

value={dialogue}

onChange={
e=>setDialogue(e.target.value)
}

/>


<button onClick={createScene}>

Create Scene

</button>



<h3>
Scenes
</h3>


{

scenes.map((scene,i)=>(

<p key={i}>
🎬 {scene}
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

'import EpisodePlanner from "./components/EpisodePlanner";',

'import EpisodePlanner from "./components/EpisodePlanner";\nimport SceneStudio from "./components/SceneStudio";'

);



code = code.replace(

"<EpisodePlanner />",

"<EpisodePlanner />\n\n<SceneStudio />"

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
"update-v0043.js"
);


version.installedModules.push(
"scene-script-studio"
);


version.currentVersion="0.73";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Scene & Script Studio installed."
);


}


module.exports={
run
};
