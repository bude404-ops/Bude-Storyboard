
export interface CharacterMemory {

id:string;

name:string;

description:string;

personality:string;

appearance:string;

history:string;

}



export function createCharacter(

name:string,

description:string

):CharacterMemory {


return {

id:
crypto.randomUUID(),

name,

description,

personality:"",

appearance:"",

history:""

};


}
