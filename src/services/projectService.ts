

export interface Project {

id:string;

title:string;

description:string;

created:string;

status:string;

}



const KEY =
"bude_projects";



export function getProjects():Project[]{


const data =
localStorage.getItem(KEY);


return data
?
JSON.parse(data)
:
[];

}



export function createProject(
title:string,
description:string
){


const projects =
getProjects();



const project:Project={

id:
Date.now().toString(),

title,

description,

created:
new Date().toISOString(),

status:
"Development"

};



projects.push(project);



localStorage.setItem(
KEY,
JSON.stringify(projects)
);


return project;

}

