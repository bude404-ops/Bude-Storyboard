
import {useState} from "react";


export default function ProductionPipeline(){


const [job,setJob]=useState("");

const [jobs,setJobs]=useState<string[]>([]);



function addJob(){


if(!job) return;


setJobs([

...jobs,

job

]);


setJob("");

}



return (

<div className="card">


<h2>
AI Production Pipeline
</h2>


<input

placeholder="Production task"

value={job}

onChange={
e=>setJob(e.target.value)
}

/>


<button onClick={addJob}>

Add Production Job

</button>


{

jobs.map((item,index)=>(

<p key={index}>
🎬 {item}
</p>

))

}


</div>

);


}

