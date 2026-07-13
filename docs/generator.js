function generate(){
let prompt=document.getElementById('prompt').value;
let type=document.getElementById('type').value;

let output={
 type:type,
 prompt:prompt,
 status:'BudE generation request received'
};

document.getElementById('output').textContent=JSON.stringify(output,null,2);
}