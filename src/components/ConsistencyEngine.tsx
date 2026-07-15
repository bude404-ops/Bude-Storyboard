
import {useState} from "react";


export default function ConsistencyEngine(){


const [item,setItem]=useState("");

const [checks,setChecks]=useState<string[]>([]);



function runCheck(){


if(!item) return;


setChecks([

...checks,

item

]);


setItem("");

}



return (

<div className="card">


<h2>
AI Consistency Engine
</h2>


<input

placeholder="Check character, world, or scene"

value={item}

onChange={
e=>setItem(e.target.value)
}

/>


<button onClick={runCheck}>

Run Check

</button>


{

checks.map((check,index)=>(

<p key={index}>
🔍 {check}
</p>

))

}


</div>

);


}

