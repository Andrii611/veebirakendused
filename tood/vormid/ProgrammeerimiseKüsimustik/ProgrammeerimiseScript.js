function programmeerimiskeeliCheckbox() { //1.
    let vastus1=document.getElementById("vastus1");
    let PHP=document.getElementById("PHP");
    let Java=document.getElementById("Java");
    let JavaScript=document.getElementById("JavaScript");
    let Python=document.getElementById("Python");

    let valik= ""
    if(PHP.checked){
        valik+=PHP.value+', ';
    } if(Java.checked){
        valik+=Java.value+', ';
    } if(JavaScript.checked) {
        valik+=JavaScript.value+', ';
    } if(Python.checked){
        valik+=Python.value+', ';
    } if(valik == ""){
        valik = "Mitte midagi pole valitud"
    }

    vastus1.innerHTML="Sinu valitud programmeerimiskeeled: " + valik;

    return valik;
}
function programmeerimiseOppimisest() { //2.
    let vastus2=document.getElementById("vastus2");
    let arvamus=document.getElementById("arvamus");

    vastus2.innerHTML="Sinu arvamus:" + arvamus.value;
    return arvamus.value;
}
function rangeValik() { //3.
    let vastus3=document.getElementById("vastus3");
    let tund=document.getElementById("tund");

    vastus3.innerHTML = "Tegeled programmeerimisega " + tund.value + " tundi nädalas";
}
function programmeeridaValik() { 4//
    let vastus4=document.getElementById("vastus4");
    let jah =document.getElementById("jah");
    let ei =document.getElementById("ei");
    let pilt=document.getElementById("pilt");

    let valik2="";
    if(jah.checked){
        valik2=jah.value;
        pilt.src="../images/Smile.png";
    } else if(ei.checked){
        valik2=ei.value;
        pilt.src="../images/kurb.png";
    } else {
        valik2="Palun tee ome valik";
    }

    vastus4.innerHTML=valik2;

    return valik2;
}
function Puhasta(){ //puhasta
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    pilt.src="";
}
