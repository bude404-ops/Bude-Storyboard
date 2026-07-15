/**
 * BudE StoryBoard AI
 * Update v0072
 *
 * AI Director Brain Foundation
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
        "Installing AI Director Brain..."
    );


    createFolder(
        "ai/director"
    );



    createFile(

        "src/services/directorBrainService.ts",

`
export interface DirectorProfile {

id:string;

genre:string;

tone:string;

style:string;

rules:string[];

}



export function createDirectorProfile(

genre:string

):DirectorProfile {


return {

id:
crypto.randomUUID(),

genre,

tone:"",

style:"",

rules:[]

};


}



export function addCreativeRule(

profile:DirectorProfile,

rule:string

){


profile.rules.push(
rule
);


return profile;

}
`

    );



    createFile(

        "src/components/DirectorBrain.tsx",

`
import {useState} from "react";


export default function DirectorBrain(){


const [rule,setRule]=useState("");

const [rules,setRules]=useState<string[]>([]);



function addRule(){


if(!rule) return;


setRules([

...rules,

rule

]);


setRule("");

}



return (

<div className="card">


<h2>
AI Director Brain
</h2>


<input

placeholder="Creative rule or style"

value={rule}

onChange={
e=>setRule(e.target.value)
}

/>


<button onClick={addRule}>

Add Rule

</button>


{

rules.map((item,index)=>(

<p key={index}>
🧠 {item}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "AI Director Brain installed."
    );

}



module.exports = {

run

};
