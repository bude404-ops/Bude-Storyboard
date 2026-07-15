/**
 * BudE StoryBoard AI
 * Update v0069
 *
 * AI Asset Memory System Foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


function createFolder(folder){

    const target =
        path.join(ROOT, folder);


    if(!fs.existsSync(target)){

        fs.mkdirSync(
            target,
            {
                recursive:true
            }
        );

        console.log(
            "Created:",
            folder
        );

    }

}



function createFile(file, content){

    const target =
        path.join(ROOT, file);


    const folder =
        path.dirname(target);


    if(!fs.existsSync(folder)){

        fs.mkdirSync(
            folder,
            {
                recursive:true
            }
        );

    }


    if(!fs.existsSync(target)){

        fs.writeFileSync(
            target,
            content
        );

        console.log(
            "Created:",
            file
        );

    }

}



function run(){

    console.log(
        "Installing AI Asset Memory System..."
    );


    createFolder(
        "memory/assets"
    );


    createFolder(
        "memory/assets/images"
    );


    createFolder(
        "memory/assets/videos"
    );



    createFile(

        "src/services/assetMemoryService.ts",

`
export interface AssetMemory {

id:string;

name:string;

type:string;

linkedTo:string[];

description:string;

}



export function createAssetMemory(

name:string,

type:string

):AssetMemory {


return {

id:
crypto.randomUUID(),

name,

type,

linkedTo:[],

description:""

};


}
`

    );



    createFile(

        "src/components/AssetMemoryCenter.tsx",

`
import {useState} from "react";


export default function AssetMemoryCenter(){


const [asset,setAsset]=useState("");

const [assets,setAssets]=useState<string[]>([]);



function saveAsset(){


if(!asset) return;


setAssets([

...assets,

asset

]);


setAsset("");

}



return (

<div className="card">


<h2>
AI Asset Memory
</h2>


<input

placeholder="Asset name"

value={asset}

onChange={
e=>setAsset(e.target.value)
}

/>


<button onClick={saveAsset}>

Save Asset

</button>


{

assets.map((item,index)=>(

<p key={index}>
🗂️ {item}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "AI Asset Memory System installed."
    );

}



module.exports = {

run

};
