
export interface CreativePrompt {

id:string;

input:string;

type:string;

created:string;

}



export function createPrompt(

input:string,

type:string

):CreativePrompt {


return {

id:
crypto.randomUUID(),

input,

type,

created:
new Date().toISOString()

};


}
