
import {useState} from "react";


export default function AgentCommunicationBus(){


const [message,setMessage]=useState("");

const [queue,setQueue]=useState<string[]>([]);



function send(){


if(!message) return;


setQueue([

...queue,

message

]);


setMessage("");

}



return (

<div className="card">


<h2>
AI Agent Communication Bus
</h2>


<input

placeholder="Send agent task"

value={message}

onChange={
e=>setMessage(e.target.value)
}

/>


<button onClick={send}>

Send Task

</button>


{

queue.map((item,index)=>(

<p key={index}>
📡 {item}
</p>

))

}


</div>

);


}

