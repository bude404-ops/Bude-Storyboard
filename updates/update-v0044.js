/**
 * BudE StoryBoard AI
 * Update v0044
 *
 * Storyboard Studio Foundation
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

fs.writeFileSync(
target,
content
);

console.log("Created:",file);

}



function run(){

console.log(
"Installing Storyboard Studio..."
);



const folders=[

"storyboards",
"storyboards/data",
"shots",
"shots/data"

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

"src/services/storyboardService.ts",

`

export interface Shot {

id:string;

scene:string;

camera:string;

description:string;

duration:number;

}



export function createShot(

scene:string,

camera:string,

description:string,

duration:number

):Shot{


return {

id:
crypto.randomUUID(),

scene,

camera,

description,

duration

};


}

`

);



write(

"src/components/StoryboardStudio.tsx",

`

import {useState} from "react";


export default function StoryboardStudio(){


const [scene,setScene]=useState("");

const [camera,setCamera]=useState("");

const [description,setDescription]=useState("");

const [shots,setShots]=useState<string[]>([]);



function createShot(){


setShots([

...shots,

scene+
" | "+
camera+
" | "+
description

]);


setScene("");

setCamera("");

setDescription("");

}



return (

<div className="card">


<h2>
Storyboard Studio
</h2>


<input

placeholder="Scene"

value={scene}

onChange={
e=>setScene(e.target.value)
}

/>


<input

placeholder="Camera Angle"

value={camera}

onChange={
e=>setCamera(e.target.value)
}

/>


<textarea

placeholder="Shot Description"

value={description}

onChange={
e=>setDescription(e.target.value)
}

/>


<button onClick={createShot}>

Create Shot

</button>



<h3>
Storyboard Shots
</h3>


{

shots.map((shot,i)=>(

<p key={i}>
🎥 {shot}
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

'import SceneStudio from "./components/SceneStudio";',

'import SceneStudio from "./components/SceneStudio";\nimport StoryboardStudio from "./components/StoryboardStudio";'

);



code = code.replace(

"<SceneStudio />",

"<SceneStudio />\n\n<StoryboardStudio />"

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
"update-v0044.js"
);


version.installedModules.push(
"storyboard-studio"
);


version.currentVersion="0.74";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Storyboard Studio installed."
);


}



module.exports={
run
};
