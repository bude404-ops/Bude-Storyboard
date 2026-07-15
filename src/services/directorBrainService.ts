
export interface DirectorProfile {

id:string;

genre:string;

tone:string;

style:string;

rules:string[];

}



export function createDirectorProfile(

genre:string

):DirectorProfile {


return {

id:
crypto.randomUUID(),

genre,

tone:"",

style:"",

rules:[]

};


}



export function addCreativeRule(

profile:DirectorProfile,

rule:string

){


profile.rules.push(
rule
);


return profile;

}
