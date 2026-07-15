/**
 * BudE StoryBoard AI
 * Update v0075
 *
 * AI Autonomous Creation Planner Foundation
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
        "Installing AI Autonomous Creation Planner..."
    );


    createFolder(
        "ai/planner"
    );


    createFolder(
        "planning/tasks"
    );



    createFile(

        "src/services/creationPlannerService.ts",

`
export interface CreationTask {

id:string;

name:string;

stage:string;

status:string;

}



export interface CreationPlan {

id:string;

goal:string;

tasks:CreationTask[];

}



export function createPlan(

goal:string

):CreationPlan {


return {

id:
crypto.randomUUID(),

goal,

tasks:[

{

id:
crypto.randomUUID(),

name:
"Create story outline",

stage:
"story",

status:
"pending"

},

{

id:
crypto.randomUUID(),

name:
"Create characters",

stage:
"characters",

status:
"pending"

},

{

id:
crypto.randomUUID(),

name:
"Create scenes",

stage:
"production",

status:
"pending"

}

]

};


}
`

    );



    createFile(

        "src/components/CreationPlanner.tsx",

`
import {useState} from "react";


export default function CreationPlanner(){


const [goal,setGoal]=useState("");

const [plans,setPlans]=useState<string[]>([]);



function createPlan(){


if(!goal) return;


setPlans([

...plans,

"Plan created: " + goal

]);


setGoal("");

}



return (

<div className="card">


<h2>
AI Creation Planner
</h2>


<textarea

placeholder="What should BudE create?"

value={goal}

onChange={
e=>setGoal(e.target.value)
}

/>


<button onClick={createPlan}>

Create Plan

</button>


{

plans.map((plan,index)=>(

<p key={index}>
📋 {plan}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "AI Autonomous Creation Planner installed."
    );

}



module.exports = {

run

};
