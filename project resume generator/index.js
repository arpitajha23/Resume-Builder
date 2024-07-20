function addNewWEField(){
    let newNode =document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder',"ENTER HERE")
    newNode.setAttribute('rows',3)
    let weob=document.getElementById('we')
    let weAddButtonOB=document.getElementById('weAddButton')

    weob.insertBefore(newNode,weAddButtonOB)
}

function addNewAQField()
{
    let newNode1=document.createElement('textarea');
    newNode1.classList.add('form-control')
    newNode1.classList.add('aqField')
    newNode1.classList.add('mt-2')
    newNode1.setAttribute('placeholder',"ENTER HERE")
    newNode1.setAttribute('rows',3)

    let aqob=document.getElementById('aq')
    let aqAddButtonob=document.getElementById('aqAddButton')

    aqob.insertBefore(newNode1,aqAddButtonob)
}

function generateCV(){
// console.log("generate cv")
let nameField=document.getElementById("nameField").value;
let nameT1=document.getElementById("nameT1")
let nameT2=document.getElementById("nameT2")
nameT2.innerHTML=nameField;
nameT1.innerHTML=nameField;
let contactField=document.getElementById("contactField").value;
let contactT=document.getElementById("contactT")
contactT.innerHTML=contactField;
let addressField=document.getElementById("addressField").value;
document.getElementById("addressT").innerHTML=addressField

let fbField=document.getElementById("fbField").value;
document.getElementById("fbT").innerHTML=fbField;

let instaField=document.getElementById("instaField").value;
document.getElementById("instaT").innerHTML=instaField

document.getElementById("linkT").innerHTML=document.getElementById("linkedField").value;

document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

let wes=document.getElementsByClassName ("weField")
let str='';

for(let e of wes)
{
    str=str+`<li>${e.value}</li>`
}
document.getElementById("weT").innerHTML=str;

let aqs=document.getElementsByClassName("aqField")
let str1=''
for(let es of aqs)
{
    str1=str1+`<li>${es.value}</li>`
}
document.getElementById("aqT").innerHTML=str1;


// this code is for dynamic profile picture

let file=document.getElementById('imgField').files[0]
console.log(file)
let reader=new FileReader();

reader.readAsDataURL(file);
console.log(reader.result)

reader.onloadend=function(){
    document.getElementById('imgTemplete').src=reader.result;
}



document.getElementById('cv-form').style.display='none';
document.getElementById('cv-templete').style.display='block'

}

function printCV(){
// console.log("print cv")
// Document.getElementById('printT').style.display='none'
window.print();
}