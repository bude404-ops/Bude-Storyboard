/**
 * BudE StoryBoard AI
 * Update v0061
 *
 * Character Memory System Foundation
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
        "Installing Character Memory System..."
    );


    createFolder(
        "memory"
    );


    createFolder(
        "memory/characters"
    );



    createFile(

        "src/services/characterMemoryService.ts",

`
export interface CharacterMemory {

id:string;

name:string;

description:string;

personality:string;

appearance:string;

history:string;

}



export function createCharacter(

name:string,

description:string

):CharacterMemory {


return {

id:
crypto.randomUUID(),

name,

description,

personality:"",

appearance:"",

history:""

};


}
`

    );



    createFile(

        "src/components/CharacterMemory.tsx",

`
import {useState} from "react";


export default function CharacterMemory(){


const [name,setName]=useState("");

const [characters,setCharacters]=useState<string[]>([]);



function saveCharacter(){


if(!name) return;


setCharacters([

...characters,

name

]);


setName("");

}



return (

<div className="card">


<h2>
Character Memory
</h2>


<input

placeholder="Character name"

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<button onClick={saveCharacter}>

Save Character

</button>


{

characters.map((character,index)=>(

<p key={index}>
🧬 {character}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "Character Memory System installed."
    );

}



module.exports = {

run

};
