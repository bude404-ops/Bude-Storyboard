
import {useState} from "react";


export default function DirectorBrain(){


const [rule,setRule]=useState("");

const [rules,setRules]=useState<string[]>([]);



function addRule(){


if(!rule) return;


setRules([

...rules,

rule

]);


setRule("");

}



return (

<div className="card">


<h2>
AI Director Brain
</h2>


<input

placeholder="Creative rule or style"

value={rule}

onChange={
e=>setRule(e.target.value)
}

/>


<button onClick={addRule}>

Add Rule

</button>


{

rules.map((item,index)=>(

<p key={index}>
🧠 {item}
</p>

))

}


</div>

);


}

