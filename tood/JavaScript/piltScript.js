// juhuslik pilt - mida võetakse massivist
function juhuslikPilt() {
    //massiv pildifailidest
    pildid=[
        'images/Smile.png',
        'images/kurb.png',
        'images/neutral.png',
        'images/lill.png',
    ]

    const pilt=pildid[Math.floor(Math.random()*pildid.length)];
    let randomPilt=document.getElementById('randomPilt');
    //Math.floor - ümardab täisarvuni
    //Math.random - juhuslik arv

    randomPilt.src=pilt;
}
function selectValik() {
    let vastus=document.getElementById('vastus');
    let valik=document.getElementById('valik');
    let randomPilt=document.getElementById('randomPilt');

    if(randomPilt.getAttribute('src')==valik.value){
        vastus.innerHTML="ÕIGE!";
        vastus.style.color="green";
    } else {
        vastus.innerHTML="VALE!";
        vastus.style.color="red";
    }
}
//radio Valik
function radioValik() {
    let piltValik=document.getElementsByName('piltValik'); //mitu elemendi ühe nimega
    let valitudPilt=document.getElementById('valitudPilt');

    for(let i=0;i<piltValik.length;i++){
        if(piltValik[i].checked) {
            valitudPilt.src = piltValik[i].value;
           break;
        }
    }
}