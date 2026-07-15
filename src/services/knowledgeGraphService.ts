
export interface KnowledgeNode {

id:string;

name:string;

type:string;

connections:string[];

}



export interface KnowledgeLink {

id:string;

from:string;

to:string;

relationship:string;

}



export function createNode(

name:string,

type:string

):KnowledgeNode {


return {

id:
crypto.randomUUID(),

name,

type,

connections:[]

};


}



export function linkNodes(

from:KnowledgeNode,

to:KnowledgeNode,

relationship:string

):KnowledgeLink {


from.connections.push(
to.id
);


return {

id:
crypto.randomUUID(),

from:
from.id,

to:
to.id,

relationship

};


}
