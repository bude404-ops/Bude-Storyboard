/**
 * BudE StoryBoard AI
 * Update v0078
 *
 * AI Task Scheduler Foundation
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
        "Installing AI Task Scheduler..."
    );


    createFolder(
        "ai/scheduler"
    );


    createFolder(
        "ai/tasks"
    );



    createFile(

        "src/services/taskSchedulerService.ts",

`
export interface AITask {

id:string;

agent:string;

task:string;

priority:number;

status:string;

}



export function createTask(

agent:string,

task:string,

priority:number

):AITask {


return {

id:
crypto.randomUUID(),

agent,

task,

priority,

status:
"pending"

};


}



export function startTask(

task:AITask

){

task.status =
"running";


return task;

}



export function completeTask(

task:AITask

){

task.status =
"completed";


return task;

}
`

    );



    createFile(

        "src/components/TaskScheduler.tsx",

`
import {useState} from "react";


export default function TaskScheduler(){


const [task,setTask]=useState("");

const [queue,setQueue]=useState<string[]>([]);



function addTask(){


if(!task) return;


setQueue([

...queue,

task

]);


setTask("");

}



return (

<div className="card">


<h2>
AI Task Scheduler
</h2>


<input

placeholder="Create AI task"

value={task}

onChange={
e=>setTask(e.target.value)
}

/>


<button onClick={addTask}>

Queue Task

</button>


{

queue.map((item,index)=>(

<p key={index}>
⚙️ {item}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "AI Task Scheduler installed."
    );

}



module.exports = {

run

};
