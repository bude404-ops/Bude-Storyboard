
import {useState} from "react";


export default function StoryExpansionEngine(){


const [idea,setIdea]=useState("");

const [result,setResult]=useState("");



function expand(){


if(!idea) return;


setResult(

"Expanding creative concept: " + idea

);


}



return (

<div className="card">


<h2>
AI Story Expansion Engine
</h2>


<textarea

placeholder="Enter a story idea..."

value={idea}

onChange={
e=>setIdea(e.target.value)
}

/>


<button onClick={expand}>

Expand Story

</button>


<p>
{result}
</p>


</div>

);


}

