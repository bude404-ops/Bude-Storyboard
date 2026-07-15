
export interface AIAgent {

id:string;

name:string;

role:string;

status:string;

}



export function createAgent(

name:string,

role:string

):AIAgent {


return {

id:
crypto.randomUUID(),

name,

role,

status:
"ready"

};


}



export const defaultAgents:AIAgent[] = [

{

id:"story-agent",

name:"Story Agent",

role:"Creates story structures",

status:"ready"

},

{

id:"character-agent",

name:"Character Agent",

role:"Maintains characters",

status:"ready"

},

{

id:"world-agent",

name:"World Agent",

role:"Builds worlds",

status:"ready"

},

{

id:"director-agent",

name:"Director Agent",

role:"Controls creative direction",

status:"ready"

},

{

id:"asset-agent",

name:"Asset Agent",

role:"Manages visual assets",

status:"ready"

},

{

id:"production-agent",

name:"Production Agent",

role:"Manages workflow",

status:"ready"

}

];
