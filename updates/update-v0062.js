/**
 * BudE StoryBoard AI
 * Update v0062
 *
 * Storyboard Production Pipeline Foundation
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
        "Installing Storyboard Production Pipeline..."
    );


    createFolder(
        "production"
    );


    createFolder(
        "production/storyboards"
    );


    createFolder(
        "production/scenes"
    );


    createFolder(
        "production/shots"
    );



    createFile(

        "src/services/storyboardService.ts",

`
export interface Shot {

id:string;

description:string;

camera:string;

duration:number;

}



export interface Scene {

id:string;

title:string;

shots:Shot[];

}



export function createScene(

title:string

):Scene {


return {

id:
crypto.randomUUID(),

title,

shots:[]

};


}



export function createShot(

description:string

):Shot {


return {

id:
crypto.randomUUID(),

description,

camera:"",

duration:5

};


}
`

    );



    createFile(

        "src/components/StoryboardPipeline.tsx",

`
import {useState} from "react";


export default function StoryboardPipeline(){


const [scene,setScene]=useState("");

const [scenes,setScenes]=useState<string[]>([]);



function addScene(){


if(!scene) return;


setScenes([

...scenes,

scene

]);


setScene("");

}



return (

<div className="card">


<h2>
Storyboard Pipeline
</h2>


<input

placeholder="Scene description"

value={scene}

onChange={
e=>setScene(e.target.value)
}

/>


<button onClick={addScene}>

Add Scene

</button>



{

scenes.map((item,index)=>(

<p key={index}>
🎬 Scene {index+1}: {item}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "Storyboard Production Pipeline installed."
    );

}



module.exports = {

run

};
