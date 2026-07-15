
export interface StudioState {

id:string;

project:string;

agents:string[];

tasks:string[];

decisions:string[];

status:string;

}



export function createStudio(

project:string

):StudioState {


return {

id:
crypto.randomUUID(),

project,

agents:[],

tasks:[],

decisions:[],

status:
"initializing"

};


}



export function activateStudio(

studio:StudioState

){


studio.status =
"active";


return studio;

}



export function shutdownStudio(

studio:StudioState

){


studio.status =
"paused";


return studio;

}
