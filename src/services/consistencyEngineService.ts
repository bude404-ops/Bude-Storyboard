
export interface ConsistencyCheck {

id:string;

type:string;

target:string;

issue:string;

status:string;

}



export function createConsistencyCheck(

type:string,

target:string

):ConsistencyCheck {


return {

id:
crypto.randomUUID(),

type,

target,

issue:"",

status:"pending"

};


}



export function resolveCheck(

check:ConsistencyCheck

){

check.status =
"resolved";


return check;

}
