
import {useState} from "react";


export default function StoryProjectCenter(){


const [title,setTitle]=useState("");

const [projects,setProjects]=useState<string[]>([]);



function create(){


if(!title) return;


setProjects([

...projects,

title

]);


setTitle("");

}



return (

<div className="card">


<h2>
Story Projects
</h2>


<input

placeholder="Story title"

value={title}

onChange={
e=>setTitle(e.target.value)
}

/>


<button onClick={create}>
Create Story
</button>


{

projects.map((p,i)=>(

<p key={i}>
📖 {p}
</p>

))

}


</div>

);


}

