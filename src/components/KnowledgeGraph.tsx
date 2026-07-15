
import {useState} from "react";


export default function KnowledgeGraph(){


const [node,setNode]=useState("");

const [nodes,setNodes]=useState<string[]>([]);



function addNode(){


if(!node) return;


setNodes([

...nodes,

node

]);


setNode("");

}



return (

<div className="card">


<h2>
AI Knowledge Graph
</h2>


<input

placeholder="Create knowledge node"

value={node}

onChange={
e=>setNode(e.target.value)
}

/>


<button onClick={addNode}>

Add Node

</button>


{

nodes.map((item,index)=>(

<p key={index}>
🔗 {item}
</p>

))

}


</div>

);


}

