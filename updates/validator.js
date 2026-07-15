

const fs=require("fs");
const path=require("path");

const ROOT=path.join(__dirname,"..");


function validate(){


const required=[

"package.json",
"index.html",
"src/main.tsx",
"src/App.tsx",
"vite.config.ts"

];


for(const file of required){

if(!fs.existsSync(
path.join(ROOT,file)
)){

throw new Error(
"Missing required file: "+file
);

}

}


console.log(
"Repository validation passed"
);


return true;

}


module.exports={
validate
};

