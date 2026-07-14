/**
 * BudE StoryBoard AI
 * Update v0012
 *
 * Dashboard Boot Repair
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function createFile(file,content){

const location = path.join(ROOT,file);

const folder = path.dirname(location);

if(!fs.existsSync(folder)){
fs.mkdirSync(folder,{recursive:true});
}

fs.writeFileSync(location,content);

console.log("Updated:",file);

}



function repairReactBoot(){


createFile(
"src/main.tsx",

`
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./dashboard/App";


const root =
document.getElementById("root");


if(root){

ReactDOM.createRoot(root)
.render(

<React.StrictMode>

<App />

</React.StrictMode>

);

}
else{

console.error(
"BudE Dashboard Root Missing"
);

}
`
);



createFile(
"src/dashboard/App.tsx",

`
export default function App(){

return (

<div style={{
minHeight:"100vh",
background:"#050505",
color:"white",
padding:"40px"
}}>


<h1>
BudE StoryBoard AI
</h1>


<h2>
Creative Studio Dashboard Online
</h2>


<div>

<p>
✅ React Connected
</p>

<p>
✅ Dashboard Loaded
</p>

<p>
✅ Genesis Foundation Active
</p>

</div>


</div>

);

}
`
);



createFile(
"index.html",

`
<!doctype html>

<html>

<head>

<meta charset="UTF-8"/>

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<title>
BudE StoryBoard AI
</title>

</head>


<body>

<div id="root"></div>


<script type="module" src="/src/main.tsx"></script>


</body>

</html>
`
);


}



function updateVersion(){


const file =
path.join(ROOT,"versions.json");


if(fs.existsSync(file)){


const versions =
JSON.parse(
fs.readFileSync(file,"utf8")
);


versions.completedUpdates.push(
"update-v0012.js"
);


versions.currentVersion =
"0.41";


versions.installedModules.push(
"dashboard-boot-repair"
);


fs.writeFileSync(
file,
JSON.stringify(
versions,
null,
2
)
);


}

}



function run(){

console.log(
"Repairing Dashboard Boot..."
);


repairReactBoot();

updateVersion();


console.log(
"Dashboard should now render."
);

}


module.exports={
run
};
