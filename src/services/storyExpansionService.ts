
export interface ExpandedStory {

title:string;

premise:string;

genre:string;

characters:string[];

scenes:string[];

}



export function expandStory(

prompt:string

):ExpandedStory {


return {

title:
"New Story",

premise:
prompt,

genre:
"Unknown",

characters:[],

scenes:[]

};


}
