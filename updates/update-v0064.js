/**
 * BudE StoryBoard AI
 * Update v0064
 *
 * AI Creative Prompt Engine Foundation
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
        "Installing AI Creative Prompt Engine..."
    );


    createFolder(
        "prompts"
    );


    createFolder(
        "prompts/history"
    );



    createFile(

        "src/services/promptEngineService.ts",

`
export interface CreativePrompt {

id:string;

input:string;

type:string;

created:string;

}



export function createPrompt(

input:string,

type:string

):CreativePrompt {


return {

id:
crypto.randomUUID(),

input,

type,

created:
new Date().toISOString()

};


}
`

    );



    createFile(

        "src/components/PromptStudio.tsx",

`
import {useState} from "react";


export default function PromptStudio(){


const [prompt,setPrompt]=useState("");

const [history,setHistory]=useState<string[]>([]);



function submitPrompt(){


if(!prompt) return;


setHistory([

...history,

prompt

]);


setPrompt("");

}



return (

<div className="card">


<h2>
AI Prompt Studio
</h2>


<textarea

placeholder="Describe your story, image, or video idea..."

value={prompt}

onChange={
e=>setPrompt(e.target.value)
}

/>


<button onClick={submitPrompt}>

Create

</button>



<h3>
Prompt History
</h3>


{

history.map((item,index)=>(

<p key={index}>
✨ {item}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "AI Creative Prompt Engine installed."
    );

}



module.exports = {

run

};
