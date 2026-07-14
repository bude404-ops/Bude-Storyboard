/**
 * BudE StoryBoard AI
 * Update v0024
 *
 * Connect Dashboard Components
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function run(){

console.log(
"Connecting dashboard..."
);


const app = `

import Dashboard from "./dashboard";


export default function App(){

return (

<Dashboard />

);

}

`;


fs.writeFileSync(
path.join(ROOT,"src/App.tsx"),
app
);



console.log(
"Dashboard connected."
);



const versionFile =
path.join(ROOT,"versions.json");


if(fs.existsSync(versionFile)){

let v =
JSON.parse(
fs.readFileSync(versionFile,"utf8")
);


if(!v.completedUpdates)
v.completedUpdates=[];


v.completedUpdates.push(
"update-v0024.js"
);


v.currentVersion="0.53";


v.systemHealth="healthy";


fs.writeFileSync(
versionFile,
JSON.stringify(v,null,2)
);

}


}


module.exports={
run
};
