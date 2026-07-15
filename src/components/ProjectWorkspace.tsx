

import {useState} from "react";


export default function ProjectWorkspace(){


const [project,setProject]=useState("");



return (

<div className="card">


<h2>
Project Workspace
</h2>


<input

placeholder="Story idea..."

value={project}

onChange={
e=>setProject(e.target.value)
}

/>


<p>

Current Idea:

{project || "None"}

</p>


</div>

);


}

