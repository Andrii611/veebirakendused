function teisendamine(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); //mitu elementi ühe nimega
    let arv=document.getElementById("arv");

    const toll=39.37;
    const meeter= 0.0254;

    let vastusepilt=document.getElementById("vastusepilt");

    //tsükli
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(valik[i].value==="meeter"){
                vastus.innerHTML=arv.value +' meetri = '+
                    (arv.value*toll).toFixed(1) +' tolli';
                vastus.style.color="red";
                vastusepilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WSSiyMpXvHHLJr4Xc025U49OEAnD4vtQLzwfoFZY_w&s=10";
            } else if(valik[i].value==="tolli"){
                vastus.innerHTML= arv.value +' tolli = '+
                    arv.value*meeter+'meetri';
                vastus.style.color="green";
                vastusepilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0PpV5pQxn0EO7Yako_jxfJ_E10eLPWllYKHS0wKEbg&s";
            }
            else {
                vastus.innerHTML= " Vali ühiku - kas meeter või toll"
            }
        }
    }
}