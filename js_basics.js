var but=document.getElementById('btn');
but.addEventListener('mouseover',changemouseover);
function changemouseover(){
    this.style.background="red";
}
var but=document.getElementById('btn2');
but.addEventListener('mouseover',changemouseover);
function changemouseover(){
    this.style.background="blue";
}
var but=document.getElementById('btn');
but.addEventListener('mouseout',changemouseout);
function changemouseout(){
    this.style.background="blue";
}

var but=document.getElementById('btn2');
but.addEventListener('mouseout',changemouseout);
function changemouseout(){
    this.style.background="red";
}

document.querySelector('#hId').textContent="HELLO";
