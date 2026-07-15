
export interface StoryProject {

id:string;

title:string;

description:string;

created:string;

}


export function createStoryProject(

title:string,

description:string

):StoryProject{


return {

id:
crypto.randomUUID(),

title,

description,

created:
new Date().toISOString()

};


}
