
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

