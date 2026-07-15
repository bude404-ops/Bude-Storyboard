
export interface AgentMessage {

id:string;

from:string;

to:string;

task:string;

status:string;

}



export function sendAgentMessage(

from:string,

to:string,

task:string

):AgentMessage {


return {

id:
crypto.randomUUID(),

from,

to,

task,

status:
"queued"

};


}



export function completeMessage(

message:AgentMessage

){

message.status =
"completed";


return message;

}
