
import {useState} from "react";


export default function AgentManager(){


const [agents,setAgents]=useState<string[]>([]);



function loadAgents(){


setAgents([

"Story Agent",

"Character Agent",

"World Agent",

"Director Agent",

"Asset Agent",

"Production Agent"

]);


}



return (

<div className="card">


<h2>
AI Agent Manager
</h2>


<button onClick={loadAgents}>

Activate Agents

</button>


{

agents.map((agent,index)=>(

<p key={index}>
🤖 {agent} Online
</p>

))

}


</div>

);


}

