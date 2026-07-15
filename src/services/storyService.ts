

export interface Story {

id:string;

title:string;

concept:string;

created:string;

}



export function createStory(
concept:string
):Story{


return {

id:
crypto.randomUUID(),

title:
"Untitled Story",

concept,

created:
new Date().toISOString()

};


}

