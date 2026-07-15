
export interface AssetMemory {

id:string;

name:string;

type:string;

linkedTo:string[];

description:string;

}



export function createAssetMemory(

name:string,

type:string

):AssetMemory {


return {

id:
crypto.randomUUID(),

name,

type,

linkedTo:[],

description:""

};


}
