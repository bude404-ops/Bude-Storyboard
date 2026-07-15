

const fs=require("fs");
const path=require("path");


const ROOT=path.join(__dirname,"..");


function apply(template,target){


const source=
path.join(ROOT,"templates",template);


const destination=
path.join(ROOT,target);


if(!fs.existsSync(source)){

throw new Error(
"Template missing "+template
);

}


fs.copyFileSync(
source,
destination
);


console.log(
"Template applied"
);


}


module.exports={
apply
};

