
export interface AIDecision {

id:string;

question:string;

options:string[];

selected:string;

reason:string;

status:string;

}



export function createDecision(

question:string,

options:string[]

):AIDecision {


return {

id:
crypto.randomUUID(),

question,

options,

selected:"",

reason:"",

status:"pending"

};


}



export function approveDecision(

decision:AIDecision,

choice:string,

reason:string

){


decision.selected =
choice;


decision.reason =
reason;


decision.status =
"approved";


return decision;

}
