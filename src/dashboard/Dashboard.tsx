
import ProjectCenter from "./components/ProjectCenter";
import AICommand from "./components/AICommand";
import StoryDatabase from "./components/StoryDatabase";
import ProductionPanel from "./components/ProductionPanel";
import SystemStatus from "./components/SystemStatus";


export default function Dashboard(){

return (

<div className="min-h-screen bg-black text-white p-6">

<h1 className="text-3xl font-bold">
BudE StoryBoard AI Studio
</h1>


<div className="grid gap-5 md:grid-cols-2 mt-6">

<ProjectCenter />

<AICommand />

<StoryDatabase />

<ProductionPanel />

<SystemStatus />

</div>

</div>

);

}
