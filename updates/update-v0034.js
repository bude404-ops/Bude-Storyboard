/**
 * BudE StoryBoard AI
 * Update v0034
 *
 * Story Engine Foundation
 * + Story Studio UI
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function write(file,content){

const target =
path.join(ROOT,file);

const folder =
path.dirname(target);

if(!fs.existsSync(folder)){
fs.mkdirSync(folder,{recursive:true});
}

fs.writeFileSync(target,content);

console.log("Updated:",file);

}



function run(){

console.log(
"Installing Story Engine..."
);



/*
 Story database
*/

const folders=[

"story",
"story/concepts",
"story/projects"

];


folders.forEach(folder=>{

const dir=
path.join(ROOT,folder);

if(!fs.existsSync(dir)){

fs.mkdirSync(dir,{
recursive:true
});

}

});



/*
 Story model service
*/

write(

"src/services/storyService.ts",

`

export interface Story {

id:string;

title:string;

concept:string;

created:string;

}



export function createStory(
concept:string
):Story{


return {

id:
crypto.randomUUID(),

title:
"Untitled Story",

concept,

created:
new Date().toISOString()

};


}

`

);



/*
 Story Studio UI
*/

write(

"src/components/StoryStudio.tsx",

`

import {useState} from "react";


export default function StoryStudio(){


const [idea,setIdea]=useState("");

const [story,setStory]=useState("");



function create(){

setStory(

"Story concept created: "+idea

);

}



return (

<div className="card">


<h2>
Story Studio
</h2>


<textarea

placeholder="Describe your story idea..."

value={idea}

onChange={
e=>setIdea(e.target.value)
}

/>


<button onClick={create}>

Create Story

</button>


<p>

{story}

</p>


</div>

);


}

`

);



/*
 Connect dashboard
*/

const dashboard =
path.join(
ROOT,
"src/Dashboard.tsx"
);


if(fs.existsSync(dashboard)){


let code =
fs.readFileSync(
dashboard,
"utf8"
);



code =
code.replace(

'import "./styles.css";',

'import "./styles.css";\nimport StoryStudio from "./components/StoryStudio";'

);



code =
code.replace(

"</main>",

`

<StoryStudio />

</main>`

);



fs.writeFileSync(
dashboard,
code
);


}



/*
 Version update
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
"update-v0034.js"
);


version.installedModules.push(
"story-engine-foundation"
);


version.currentVersion="0.64";


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
"Story Engine installed."
);


}


module.exports={
run
};
