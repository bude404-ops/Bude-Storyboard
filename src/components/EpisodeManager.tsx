
import {useState} from "react";


export default function EpisodeManager(){


const [title,setTitle]=useState("");

const [episodes,setEpisodes]=useState<string[]>([]);



function createEpisode(){


if(!title) return;


setEpisodes([

...episodes,

title

]);


setTitle("");

}



return (

<div className="card">


<h2>
Episode Manager
</h2>


<input

placeholder="Episode title"

value={title}

onChange={
e=>setTitle(e.target.value)
}

/>


<button onClick={createEpisode}>

Create Episode

</button>


{

episodes.map((episode,index)=>(

<p key={index}>
🎞️ Episode {index+1}: {episode}
</p>

))

}


</div>

);


}

