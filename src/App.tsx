
import "./styles.css";


const agents = [

"Executive AI",
"Story Architect AI",
"World Builder AI",
"Character AI",
"Script AI",
"Storyboard AI",
"Media AI",
"Voice AI",
"Music AI",
"Editor AI"

];


export default function App(){


return (

<div className="layout">


<aside>

<h2>
BudE AI
</h2>


<nav>

<button>Dashboard</button>

<button>Projects</button>

<button>Characters</button>

<button>Worlds</button>

<button>Episodes</button>

<button>Production</button>

<button>Plugins</button>

</nav>


</aside>



<main>


<h1>
StoryBoard AI Studio
</h1>


<div className="cards">


<section className="card">

<h3>
AI Command Center
</h3>


<p>
Agents Online: {agents.length}
</p>


</section>



<section className="card">

<h3>
Project Center
</h3>

<p>
Create and manage creative productions.
</p>

</section>



<section className="card">

<h3>
Production Pipeline
</h3>

<p>
Concept → Story → Media → Export
</p>

</section>



<section className="card">

<h3>
System Status
</h3>

<p>
Genesis: Complete
</p>

<p>
Evolution: Active
</p>

</section>


</div>



<section className="card">

<h3>
AI Agents
</h3>


{agents.map(agent=>(

<p key={agent}>
🟢 {agent} Online
</p>

))}


</section>


</main>


</div>

);

}
