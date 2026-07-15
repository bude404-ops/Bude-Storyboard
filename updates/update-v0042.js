/**
 * BudE StoryBoard AI
 * Update v0042
 *
 * Episode Planner Foundation
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
"Installing Episode Planner..."
);



const folders=[

"episodes",
"episodes/data",
"scripts",
"scripts/data"

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

"src/services/episodeService.ts",

`

export interface Episode {

id:string;

title:string;

season:number;

episode:number;

summary:string;

}



export function createEpisode(

title:string,

season:number,

episode:number,

summary:string

):Episode{


return {

id:
crypto.randomUUID(),

title,

season,

episode,

summary

};


}

`

);



write(

"src/components/EpisodePlanner.tsx",

`

import {useState} from "react";


export default function EpisodePlanner(){


const [title,setTitle]=useState("");

const [season,setSeason]=useState("1");

const [summary,setSummary]=useState("");

const [episodes,setEpisodes]=useState<string[]>([]);



function createEpisode(){


setEpisodes([

...episodes,

"Season "+season+
" - "+
title+
" : "+
summary

]);


setTitle("");

setSummary("");

}



return (

<div className="card">


<h2>
Episode Planner
</h2>


<input

placeholder="Episode Title"

value={title}

onChange={
e=>setTitle(e.target.value)
}

/>


<input

placeholder="Season"

value={season}

onChange={
e=>setSeason(e.target.value)
}

/>


<textarea

placeholder="Episode Summary"

value={summary}

onChange={
e=>setSummary(e.target.value)
}

/>


<button onClick={createEpisode}>

Create Episode

</button>



<h3>
Episodes
</h3>


{

episodes.map((ep,i)=>(

<p key={i}>
🎬 {ep}
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

'import WorldBuilder from "./components/WorldBuilder";',

'import WorldBuilder from "./components/WorldBuilder";\nimport EpisodePlanner from "./components/EpisodePlanner";'

);



code = code.replace(

"<WorldBuilder />",

"<WorldBuilder />\n\n<EpisodePlanner />"

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
"update-v0042.js"
);


version.installedModules.push(
"episode-planner"
);


version.currentVersion="0.72";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Episode Planner installed."
);


}



module.exports={
run
};
