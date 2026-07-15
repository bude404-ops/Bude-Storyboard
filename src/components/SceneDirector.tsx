
import {useState} from "react";


export default function SceneDirector(){


const [scene,setScene]=useState("");

const [plans,setPlans]=useState<string[]>([]);



function directScene(){


if(!scene) return;


setPlans([

...plans,

scene

]);


setScene("");

}



return (

<div className="card">


<h2>
AI Scene Director
</h2>


<textarea

placeholder="Describe a scene..."

value={scene}

onChange={
e=>setScene(e.target.value)
}

/>


<button onClick={directScene}>

Direct Scene

</button>


{

plans.map((item,index)=>(

<p key={index}>
🎥 Scene Plan: {item}
</p>

))

}


</div>

);


}

