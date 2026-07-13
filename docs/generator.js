async function generate(){

const prompt=document.getElementById('prompt').value;
const type=document.getElementById('type').value;

const request={
 category:type,
 prompt:prompt,
 timestamp:new Date().toISOString()
};

localStorage.setItem('bude_generation_request',JSON.stringify(request));

const output={
 status:'Generation request created',
 category:type,
 prompt:prompt,
 message:'BudE Creative Engine received request'
};

document.getElementById('output').textContent=JSON.stringify(output,null,2);

}