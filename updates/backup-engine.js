

const fs=require("fs");
const path=require("path");


const ROOT=path.join(__dirname,"..");


function backup(file){


const source=
path.join(ROOT,file);


if(!fs.existsSync(source))
return;


const backupFolder=
path.join(ROOT,"backups");


if(!fs.existsSync(backupFolder)){

fs.mkdirSync(
backupFolder,
{recursive:true}
);

}


fs.copyFileSync(

source,

path.join(
backupFolder,
file.replaceAll("/","-")
)

);


console.log(
"Backup created:",
file
);


}


module.exports={
backup
};

