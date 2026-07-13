function createCharacter(idea,style){

let character={
name:'Generated Character',
concept:idea,
style:style,
appearance:'Designed from concept: '+idea,
personality:['Determined','Adaptable'],
background:'A character created inside BudE StoryBoard AI.',
skills:['Primary Skill','Secondary Skill'],
weaknesses:['Personal Conflict'],
goal:'Discover their purpose',
growthArc:'Begins inexperienced and grows through challenges.',
visualProfile:{
style:style,
consistencyId:'CHAR-'+Date.now()
}
};

return character;
}