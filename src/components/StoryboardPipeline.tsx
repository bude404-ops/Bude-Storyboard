
import {useState} from "react";


export default function StoryboardPipeline(){


const [scene,setScene]=useState("");

const [scenes,setScenes]=useState<string[]>([]);



function addScene(){


if(!scene) return;


setScenes([

...scenes,

scene

]);


setScene("");

}



return (

<div className="card">


<h2>
Storyboard Pipeline
</h2>


<input

placeholder="Scene description"

value={scene}

onChange={
e=>setScene(e.target.value)
}

/>


<button onClick={addScene}>

Add Scene

</button>



{

scenes.map((item,index)=>(

<p key={index}>
🎬 Scene {index+1}: {item}
</p>

))

}


</div>

);


}

