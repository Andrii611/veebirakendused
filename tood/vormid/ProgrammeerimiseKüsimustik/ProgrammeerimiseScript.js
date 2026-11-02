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
function programmeeridaValik() { //4
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
function tooriistadValik() { //5.
    let vastus5 = document.getElementById("vastus5");
    let tooriistad = document.getElementById("tooriistad");

    vastus5.innerHTML = "Sinu nimetatud tööriistad: " + tooriistad.value;

    return tooriistad.value;
}

function keelValik() { //6.
    let vastus6 = document.getElementById("vastus6");
    let keel = document.getElementById("keel");

    vastus6.innerHTML = "Sinu valik: " + keel.value;

    return keel.value;
}
function Saada() {
    let kokkuvote = document.getElementById("kokkuvote");

    let vastus = "";

    vastus += "Programmeerimiskeeled: " + programmeerimiskeeliCheckbox() + "<br>";
    vastus += "Arvamus: " + programmeerimiseOppimisest() + "<br>";
    vastus += "Tunnid nädalas: " + document.getElementById("tund").value + "<br>";
    vastus += "Kas meeldib programmeerida: " + programmeeridaValik() + "<br>";
    vastus += "Tööriistad: " + tooriistadValik() + "<br>";
    vastus += "Soovitud programmeerimiskeel: " + keelValik();

    kokkuvote.innerHTML = vastus;
}
function Puhasta() { //puhasta
    document.getElementById("vastus1").innerHTML = "";
    document.getElementById("vastus2").innerHTML = "";
    document.getElementById("vastus3").innerHTML = "";
    document.getElementById("vastus4").innerHTML = "";
    document.getElementById("vastus5").innerHTML = "";
    document.getElementById("vastus6").innerHTML = "";
    document.getElementById("kokkuvote").innerHTML = "";

    document.getElementById("pilt").src = "";

    document.getElementById("arvamus").value = "";
    document.getElementById("tooriistad").value = "";

    document.getElementById("tund").value = 0;
    document.getElementById("keel").selectedIndex = 0;

    document.getElementById("PHP").checked = false;
    document.getElementById("Java").checked = false;
    document.getElementById("JavaScript").checked = false;
    document.getElementById("Python").checked = false;

    document.getElementById("jah").checked = false;
    document.getElementById("ei").checked = false;
}