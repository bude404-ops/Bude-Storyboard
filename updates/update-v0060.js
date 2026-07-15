/**
 * BudE StoryBoard AI
 * Update v0060
 *
 * Story Architect AI Foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


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
        "Installing Story Architect AI..."
    );



    createFile(

        "src/services/storyArchitectService.ts",

`
export interface StoryOutline {

title:string;

genre:string;

premise:string;

characters:string[];

scenes:string[];

}



export function generateStoryOutline(

prompt:string

):StoryOutline{


return {

title:
"Untitled Story",

genre:
"Adventure",

premise:
prompt,

characters:[],

scenes:[]

};


}
`

    );




    createFile(

        "src/components/StoryArchitect.tsx",

`
import {useState} from "react";


export default function StoryArchitect(){


const [prompt,setPrompt]=useState("");

const [story,setStory]=useState("");



function createStory(){


setStory(

"Building story from: " + prompt

);


}



return (

<div className="card">


<h2>
Story Architect AI
</h2>


<textarea

placeholder="Describe your story idea..."

value={prompt}

onChange={
e=>setPrompt(e.target.value)
}

/>


<button onClick={createStory}>

Create Story

</button>



<p>
{story}
</p>


</div>

);


}

`

    );



    console.log(
        "Story Architect AI installed."
    );

}



module.exports = {

run

};
