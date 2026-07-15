
export interface ProductionJob {

id:string;

name:string;

stage:string;

progress:number;

status:string;

}



export function createProductionJob(

name:string

):ProductionJob {


return {

id:
crypto.randomUUID(),

name,

stage:
"planning",

progress:0,

status:
"queued"

};


}



export function updateProgress(

job:ProductionJob,

progress:number

){

job.progress =
progress;


return job;

}
