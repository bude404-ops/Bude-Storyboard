

import {useState} from "react";


export default function StoryStudio(){


const [idea,setIdea]=useState("");

const [story,setStory]=useState("");



function create(){

setStory(

"Story concept created: "+idea

);

}



return (

<div className="card">


<h2>
Story Studio
</h2>


<textarea

placeholder="Describe your story idea..."

value={idea}

onChange={
e=>setIdea(e.target.value)
}

/>


<button onClick={create}>

Create Story

</button>


<p>

{story}

</p>


</div>

);


}

