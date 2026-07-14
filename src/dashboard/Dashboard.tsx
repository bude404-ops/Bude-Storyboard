
import ProjectCenter from "./components/ProjectCenter";
import AICommand from "./components/AICommand";
import StoryDatabase from "./components/StoryDatabase";
import ProductionPanel from "./components/ProductionPanel";
import SystemStatus from "./components/SystemStatus";


export default function Dashboard(){

return (

<div className="min-h-screen bg-black text-white p-6">


<h1 className="text-4xl font-bold mb-8">

BudE StoryBoard AI

</h1>


<div className="
grid
gap-6
md:grid-cols-2
">


<ProjectCenter />

<AICommand />

<StoryDatabase />

<ProductionPanel />

<SystemStatus />


</div>


</div>

);

}
