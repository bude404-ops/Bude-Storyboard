/**
 * BudE StoryBoard AI
 * Update v0081
 *
 * AI Knowledge Graph Foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


function createFolder(folder){

    const target =
        path.join(ROOT, folder);


    if(!fs.existsSync(target)){

        fs.mkdirSync(
            target,
            {
                recursive:true
            }
        );

        console.log(
            "Created:",
            folder
        );

    }

}



function createFile(file, content){

    const target =
        path.join(ROOT, file);


    const folder =
        path.dirname(target);


    if(!fs.existsSync(folder)){

        fs.mkdirSync(
            folder,
            {
                recursive:true
            }
        );

    }


    if(!fs.existsSync(target)){

        fs.writeFileSync(
            target,
            content
        );

        console.log(
            "Created:",
            file
        );

    }

}



function run(){

    console.log(
        "Installing AI Knowledge Graph..."
    );


    createFolder(
        "ai/knowledge"
    );


    createFolder(
        "memory/graph"
    );



    createFile(

        "src/services/knowledgeGraphService.ts",

`
export interface KnowledgeNode {

id:string;

name:string;

type:string;

connections:string[];

}



export interface KnowledgeLink {

id:string;

from:string;

to:string;

relationship:string;

}



export function createNode(

name:string,

type:string

):KnowledgeNode {


return {

id:
crypto.randomUUID(),

name,

type,

connections:[]

};


}



export function linkNodes(

from:KnowledgeNode,

to:KnowledgeNode,

relationship:string

):KnowledgeLink {


from.connections.push(
to.id
);


return {

id:
crypto.randomUUID(),

from:
from.id,

to:
to.id,

relationship

};


}
`

    );



    createFile(

        "src/components/KnowledgeGraph.tsx",

`
import {useState} from "react";


export default function KnowledgeGraph(){


const [node,setNode]=useState("");

const [nodes,setNodes]=useState<string[]>([]);



function addNode(){


if(!node) return;


setNodes([

...nodes,

node

]);


setNode("");

}



return (

<div className="card">


<h2>
AI Knowledge Graph
</h2>


<input

placeholder="Create knowledge node"

value={node}

onChange={
e=>setNode(e.target.value)
}

/>


<button onClick={addNode}>

Add Node

</button>


{

nodes.map((item,index)=>(

<p key={index}>
🔗 {item}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "AI Knowledge Graph installed."
    );

}



module.exports = {

run

};
