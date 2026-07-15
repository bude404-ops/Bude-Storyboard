

export interface Project {

id:string;

name:string;

description:string;

created:string;

}



export function createProject(
name:string,
description:string
):Project{


return {

id:
crypto.randomUUID(),

name,

description,

created:
new Date().toISOString()

};


}


