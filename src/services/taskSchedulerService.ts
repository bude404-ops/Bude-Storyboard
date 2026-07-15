
export interface AITask {

id:string;

agent:string;

task:string;

priority:number;

status:string;

}



export function createTask(

agent:string,

task:string,

priority:number

):AITask {


return {

id:
crypto.randomUUID(),

agent,

task,

priority,

status:
"pending"

};


}



export function startTask(

task:AITask

){

task.status =
"running";


return task;

}



export function completeTask(

task:AITask

){

task.status =
"completed";


return task;

}
