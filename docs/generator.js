function generate(){

let prompt=document.getElementById('prompt').value;
let type=document.getElementById('type').value;

let request={
 prompt:prompt,
 category:type,
 route:'BudE AI Engine'
};

localStorage.setItem('bude_request',JSON.stringify(request));

document.getElementById('output').textContent=JSON.stringify(request,null,2);

}