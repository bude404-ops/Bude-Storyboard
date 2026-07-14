

import {
useState
} from "react";


import {
createProject,
getProjects
}
from "../services/projectService";



export default function ProjectCenter(){


const [projects,setProjects]=
useState(getProjects());


function add(){


createProject(
"New Story Project",
"AI generated creative universe"
);


setProjects(
getProjects()
);

}



return (

<div className="card">


<h2>
Project Center
</h2>


<button onClick={add}>
Create Project
</button>



{

projects.map(project=>(

<div key={project.id}>

<h3>
{project.title}
</h3>


<p>
{project.description}
</p>


<p>
{project.status}
</p>


</div>

))

}



</div>

);

}

