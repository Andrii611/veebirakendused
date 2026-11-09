function joon() {
    const canvas = document.getElementById('canvas');
    const tx = canvas.getContext('2d'); //2d tasand
    //joon - линия
    if (canvas.getContext){
        let tx = canvas.getContext('2d'); //2d tasand
        tx.beginPath();
        tx.strokeStyle="blue";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280); //lõpppunkt
        tx.stroke();
    }
}
function puhasta() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext){
        let tx = canvas.getContext('2d'); //2d tasand
        tx.clearRect(0, 0, 400, 400);
    }
}
function kolmnurk() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext){
        let tx = canvas.getContext('2d'); //2d tasand
        tx.beginPath();
        tx.fillStyle="blue";
        tx.strokeStyle="blue";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280); //lõpppunkt
        tx.lineTo(30, 350);
        tx.lineTo(50, 50);
        tx.fill();
        tx.stroke();
    }
}
function ristkylik() {
    const canvas = document.getElementById('canvas');
    const l = document.getElementById('laius');
    const k = document.getElementById('kyrgus');
    if (canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.fillStyle="red";
        tx.fillRect(100, 150, l.value, k.value);
    }
}
//ümberjoon - окружность
//ring - круг
function ring() {
    const canvas = document.getElementById('canvas');
    const r=document.getElementById('raadius');
    if (canvas.getContext){
        let tx = canvas.getContext('2d');
        tx.fillStyle="purple";
        tx.arc(100,150,r.value,0, 2*Math.PI, true); //x,y
        tx.fill();
        //tx.stroke();
    }
}
function pilt() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        const fail = new Image();
        fail.src="https://picsum.photos/100/100?random=1";
        fail.onload=()=>{
            tx.drawImage(fail, 50, 50, 100, 100);
        }
    }
}
function ratas1() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.beginPath();
        tx.strokeStyle = "black";
        tx.lineWidth = 3;
        tx.arc(80, 185, 20, 0, 2 * Math.PI);
        tx.stroke();

        tx.beginPath();
        tx.arc(80, 185, 7, 0, 2 * Math.PI);
        tx.stroke();
    }
}
function ratas2() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.beginPath();
        tx.strokeStyle = "black";
        tx.lineWidth = 3;
        tx.arc(200, 185, 20, 0, 2 * Math.PI);
        tx.stroke();

        tx.beginPath();
        tx.arc(200, 185, 7, 0, 2 * Math.PI);
        tx.stroke();
    }
}
function korpus() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle = "black";
        tx.lineWidth = 3;
        tx.moveTo(55, 102);
        tx.lineTo(236, 102);
        tx.lineTo(236, 164);
        tx.lineTo(55, 164);
        tx.lineTo(55, 102);

        tx.moveTo(110, 102);
        tx.lineTo(110, 70);
        tx.lineTo(185, 70);
        tx.lineTo(185, 102);

        tx.stroke();
    }
}
function tuled() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.beginPath();
        tx.strokeStyle = "yellow";
        tx.lineWidth = 3;

        tx.moveTo(236, 110);
        tx.lineTo(270, 90);

        tx.moveTo(236, 120);
        tx.lineTo(280, 120);

        tx.moveTo(236, 130);
        tx.lineTo(270, 150);

        tx.moveTo(250, 120);
        tx.lineTo(280, 120);

        tx.stroke();
    }
}