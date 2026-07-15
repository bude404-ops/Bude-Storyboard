
import {useState} from "react";


export default function AutonomousStudioCore(){


const [project,setProject]=useState("");

const [studios,setStudios]=useState<string[]>([]);



function startStudio(){


if(!project) return;


setStudios([

...studios,

"Studio Active: " + project

]);


setProject("");

}



return (

<div className="card">


<h2>
BudE Autonomous Studio Core
</h2>


<input

placeholder="Start creative project"

value={project}

onChange={
e=>setProject(e.target.value)
}

/>


<button onClick={startStudio}>

Activate Studio

</button>


{

studios.map((studio,index)=>(

<p key={index}>
🚀 {studio}
</p>

))

}


</div>

);


}

