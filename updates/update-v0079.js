/**
 * BudE StoryBoard AI
 * Update v0079
 *
 * AI Decision Engine Foundation
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
        "Installing AI Decision Engine..."
    );


    createFolder(
        "ai/decision"
    );


    createFolder(
        "ai/decisions"
    );



    createFile(

        "src/services/decisionEngineService.ts",

`
export interface AIDecision {

id:string;

question:string;

options:string[];

selected:string;

reason:string;

status:string;

}



export function createDecision(

question:string,

options:string[]

):AIDecision {


return {

id:
crypto.randomUUID(),

question,

options,

selected:"",

reason:"",

status:"pending"

};


}



export function approveDecision(

decision:AIDecision,

choice:string,

reason:string

){


decision.selected =
choice;


decision.reason =
reason;


decision.status =
"approved";


return decision;

}
`

    );



    createFile(

        "src/components/DecisionEngine.tsx",

`
import {useState} from "react";


export default function DecisionEngine(){


const [question,setQuestion]=useState("");

const [decisions,setDecisions]=useState<string[]>([]);



function create(){


if(!question) return;


setDecisions([

...decisions,

question

]);


setQuestion("");

}



return (

<div className="card">


<h2>
AI Decision Engine
</h2>


<input

placeholder="What decision needs to be made?"

value={question}

onChange={
e=>setQuestion(e.target.value)
}

/>


<button onClick={create}>

Create Decision

</button>


{

decisions.map((item,index)=>(

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
        "AI Decision Engine installed."
    );

}



module.exports = {

run

};
