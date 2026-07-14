/**
 * BudE StoryBoard AI
 * Update v0005
 *
 * React + Vite Foundation
 *
 * Creates the frontend operating layer.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


function createFile(file, content){

    const location = path.join(ROOT,file);

    const folder = path.dirname(location);

    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder,{
            recursive:true
        });
    }

    fs.writeFileSync(
        location,
        content
    );

    console.log("Created:",file);

}



function createFrontend(){


createFile(
"package.json",

`
{
  "name":"bude-storyboard-ai",
  "version":"0.3.5",
  "private":true,

  "scripts":{
    "dev":"vite",
    "build":"vite build",
    "test":"echo No tests yet"
  },

  "dependencies":{

    "react":"latest",
    "react-dom":"latest"

  },

  "devDependencies":{

    "vite":"latest",
    "typescript":"latest",
    "@vitejs/plugin-react":"latest",
    "tailwindcss":"latest"

  }
}
`
);



createFile(
"index.html",

`
<!doctype html>

<html>

<head>

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



createFile(
"src/main.tsx",

`
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./dashboard/App";


ReactDOM.createRoot(
document.getElementById("root")!
)
.render(

<React.StrictMode>

<App />

</React.StrictMode>

);
`
);



createFile(
"vite.config.ts",

`
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({

plugins:[
react()
]

});
`
);



createFile(
"tsconfig.json",

`
{
 "compilerOptions":{

 "target":"ES2020",

 "jsx":"react",

 "module":"ESNext",

 "strict":true

 }

}
`
);



createFile(
"tailwind.config.js",

`
module.exports={

content:[
"./index.html",
"./src/**/*.{js,ts,tsx}"
],

theme:{
extend:{}
},

plugins:[]

};
`
);


}



function updateVersions(){

const file =
path.join(ROOT,"versions.json");


const versions =
JSON.parse(
fs.readFileSync(
file,
"utf8"
)
);


versions.completedUpdates.push(
"update-v0005.js"
);


versions.currentVersion =
"0.35";


versions.installedModules.push(
"react-vite-foundation"
);


versions.systemHealth =
"healthy";


fs.writeFileSync(
file,
JSON.stringify(
versions,
null,
2
)
);


}



function run(){

console.log(
"Installing React Foundation..."
);


createFrontend();

updateVersions();


console.log(
"React Foundation Installed."
);

}



module.exports={
run
};
