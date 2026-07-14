/**
 * BudE StoryBoard AI
 * Update v0014
 *
 * React Render Diagnostic Repair
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


function write(file, content){

    const target = path.join(ROOT,file);
    const folder = path.dirname(target);

    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder,{recursive:true});
    }

    fs.writeFileSync(target,content);

    console.log("Created:",file);
}



function repair(){

write(
"src/main.tsx",
`
import React from "react";
import ReactDOM from "react-dom/client";

function App(){

return (

<div style={{
padding:"50px",
fontFamily:"Arial",
background:"#111",
color:"white",
minHeight:"100vh"
}}>

<h1>
BudE StoryBoard AI
</h1>

<h2>
Genesis Dashboard Online
</h2>

<p>
React Rendering Successfully
</p>

</div>

);

}


ReactDOM.createRoot(
document.getElementById("root")!
)
.render(
<App />
);
`
);


write(
"index.html",
`
<!doctype html>

<html>

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>BudE StoryBoard AI</title>

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

let v =
JSON.parse(
fs.readFileSync(file,"utf8")
);


v.completedUpdates.push(
"update-v0014.js"
);


v.currentVersion="0.43";


v.installedModules.push(
"react-render-diagnostic"
);


fs.writeFileSync(
file,
JSON.stringify(v,null,2)
);

}

}



function run(){

console.log(
"Running React Diagnostic Repair..."
);

repair();

updateVersion();

console.log(
"Diagnostic Complete"
);

}


module.exports={run};
