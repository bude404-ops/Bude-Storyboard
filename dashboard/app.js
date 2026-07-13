console.log(
"BudE Command Center Loaded"
);


const buttons =
document.querySelectorAll("button");


buttons.forEach(button=>{


button.onclick=function(){

alert(
button.innerText +
" system activated"
);

};


});
