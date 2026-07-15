/**
 * BudE StoryBoard AI
 * Update v0053
 *
 * Production Timeline + Project Manager
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
"Installing Project Manager..."
);



const folders=[

"projects",
"projects/data",
"production/tasks"

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

"src/services/projectService.ts",

`

export interface Project {

id:string;

name:string;

stage:string;

progress:number;

}



export function createProject(

name:string

):Project{


return {

id:
crypto.randomUUID(),

name,

stage:
"Story Development",

progress:0

};


}

`

);



write(

"src/components/ProjectManager.tsx",

`

import {useState} from "react";


export default function ProjectManager(){


const [name,setName]=useState("");

const [projects,setProjects]=useState<string[]>([]);



function create(){


setProjects([

...projects,

name+" - Story Development - 0%"

]);


setName("");

}



return (

<div className="card">


<h2>
Project Manager
</h2>


<input

placeholder="Project Name"

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<button onClick={create}>

Create Project

</button>


<h3>
Projects
</h3>


{

projects.map((p,i)=>(

<p key={i}>
📌 {p}
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

'import EditorAgent from "./components/EditorAgent";',

'import EditorAgent from "./components/EditorAgent";\nimport ProjectManager from "./components/ProjectManager";'

);



code = code.replace(

"<EditorAgent />",

"<EditorAgent />\n\n<ProjectManager />"

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
"update-v0053.js"
);


version.installedModules.push(
"project-manager"
);


version.currentVersion="0.83";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Project Manager installed."
);


}


module.exports={
run
};
