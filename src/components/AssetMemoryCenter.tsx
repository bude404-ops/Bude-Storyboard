
import {useState} from "react";


export default function AssetMemoryCenter(){


const [asset,setAsset]=useState("");

const [assets,setAssets]=useState<string[]>([]);



function saveAsset(){


if(!asset) return;


setAssets([

...assets,

asset

]);


setAsset("");

}



return (

<div className="card">


<h2>
AI Asset Memory
</h2>


<input

placeholder="Asset name"

value={asset}

onChange={
e=>setAsset(e.target.value)
}

/>


<button onClick={saveAsset}>

Save Asset

</button>


{

assets.map((item,index)=>(

<p key={index}>
🗂️ {item}
</p>

))

}


</div>

);


}

