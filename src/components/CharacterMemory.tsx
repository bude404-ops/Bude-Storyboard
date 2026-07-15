
import {useState} from "react";


export default function CharacterMemory(){


const [name,setName]=useState("");

const [characters,setCharacters]=useState<string[]>([]);



function saveCharacter(){


if(!name) return;


setCharacters([

...characters,

name

]);


setName("");

}



return (

<div className="card">


<h2>
Character Memory
</h2>


<input

placeholder="Character name"

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<button onClick={saveCharacter}>

Save Character

</button>


{

characters.map((character,index)=>(

<p key={index}>
🧬 {character}
</p>

))

}


</div>

);


}

