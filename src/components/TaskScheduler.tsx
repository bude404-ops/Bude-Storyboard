
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

