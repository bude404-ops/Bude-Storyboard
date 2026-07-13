function createContent(type,input,style){

let output={
 type:type,
 style:style,
 idea:input
};

if(type==='Story'){
output.title='The '+input;
output.sections={
opening:'A new journey begins.',
conflict:'A powerful challenge appears.',
ending:'The hero discovers their true purpose.'
};
}

if(type==='Character'){
output.character={
name:'Generated Hero',
appearance:'Designed from '+input,
personality:'Brave and determined',
strengths:['Courage','Adaptability'],
weaknesses:['Unknown']
};
}

if(type==='World'){
output.world={
name:'Generated Realm',
history:'Created from '+input,
factions:['Northern Alliance','Shadow Order'],
locations:['Ancient City']
};
}

return output;
}