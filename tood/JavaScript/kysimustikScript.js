function nimiLugemineKastis(){
    let vastus1=document.getElementById("vastus1");
    let nimi=document.getElementById("nimi");

    vastus1.innerHTML="Sisestatud nimi on: "+nimi.value;
    vastus1.style.backgroundColor="lightgreen";

    return nimi.value;
}
//radio valikud
function radioValik(){
    let vastus2=document.getElementById("vastus2");
    let spotify=document.getElementById("spotify");
    let raadio=document.getElementById("raadio");
    let vinyl=document.getElementById("vinüülplaat");

    let valik=""
    if(spotify.checked){
        valik=spotify.value;
    } else if(raadio.checked){
        valik=raadio.value;
    } else if(vinyl.checked){
        valik=vinyl.value;
    } else {
        valik="palun tee ome valik";
    }

    //vastus
    vastus2.innerHTML="valik: " + valik;

    return valik;
}
//checkbox valik
function checkboxValik(){
    let vastus3=document.getElementById("vastus3");
    let Radiohead=document.getElementById("Radiohead");
    let rolling=document.getElementById("rollingstones");
    let thesmiths=document.getElementById("thesmiths");
    let pumpkins=document.getElementById("thesmashingpumpkins");

    let valik2= ""
    if(Radiohead.checked){
        valik2+=Radiohead.value+', ';
    } if(rolling.checked){
        valik2+=rolling.value+', ';
    } if(thesmiths.checked){
        valik2+=thesmiths.value+', ';
    } if(pumpkins.checked){
        valik2+=pumpkins.value+', ';
    } if(valik2 == ""){
        valik2 = "Mitte midagi pole valitud"
    }
    vastus3.innerHTML="Valik: " + valik2;

    return valik2;
}
//range
function rangeValik(){
    let vastus4 = document.getElementById("vastus4");
    let tund = document.getElementById("tund");

    vastus4.innerHTML = "Sa kuulad muusikat: " + tund.value + " tundi";

    return tund.value;
}

//select valik
function selectValik() {
    let vastus5=document.getElementById("vastus5");
    let stiil=document.getElementById("stiil");
}
//kasutab teisi funktsioone
function naitaKoike(){
    let vastusKoik=document.getElementById("vastusKoik");
    let nimi = nimiLugemineKastis()
    let valik=radioValik();
    let valik2=checkboxValik();
    let tund=rangeValik();

    vastusKoik.innerText="Sinu nimi on:" +nimi+'<br>'+
        'Sinu lemmikud on : ' + valik2 + '<br>'+
        'Sa kasutad '+valik +'<br> +' +
        'Sa kuuled '+tund+' tundi';
}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastusKoik.innerHTML="";
}
