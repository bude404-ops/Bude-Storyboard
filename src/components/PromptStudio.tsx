
import {useState} from "react";


export default function PromptStudio(){


const [prompt,setPrompt]=useState("");

const [history,setHistory]=useState<string[]>([]);



function submitPrompt(){


if(!prompt) return;


setHistory([

...history,

prompt

]);


setPrompt("");

}



return (

<div className="card">


<h2>
AI Prompt Studio
</h2>


<textarea

placeholder="Describe your story, image, or video idea..."

value={prompt}

onChange={
e=>setPrompt(e.target.value)
}

/>


<button onClick={submitPrompt}>

Create

</button>



<h3>
Prompt History
</h3>


{

history.map((item,index)=>(

<p key={index}>
✨ {item}
</p>

))

}


</div>

);


}

