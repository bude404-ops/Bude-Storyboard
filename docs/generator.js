function generate(){
let prompt=document.getElementById('prompt').value;
let type=document.getElementById('type').value;
let style=document.getElementById('style').value;

let output=createContent(type,prompt,style);

localStorage.setItem('bude_output',JSON.stringify(output));

document.getElementById('output').textContent=JSON.stringify(output,null,2);
}