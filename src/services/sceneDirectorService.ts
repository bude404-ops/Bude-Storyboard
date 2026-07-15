
export interface SceneDirection {

id:string;

scene:string;

mood:string;

lighting:string;

camera:string;

notes:string;

}



export function createSceneDirection(

scene:string

):SceneDirection {


return {

id:
crypto.randomUUID(),

scene,

mood:"",

lighting:"",

camera:"",

notes:""

};


}
