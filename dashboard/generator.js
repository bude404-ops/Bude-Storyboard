function generate(){

let prompt=document.getElementById('prompt').value;
let type=document.getElementById('type').value;

let output={
 category:type,
 prompt:prompt,
 result:'BudE generation request created'
};

localStorage.setItem('bude_output',JSON.stringify(output));

document.getElementById('output').textContent=JSON.stringify(output,null,2);

}