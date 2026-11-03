// 1. Raamatu objekt
let raamat = {
    pealkiri: "Tõde ja õigus I",
    autor: "A. H. Tammsaare",
    aasta: 1926,

    // Tagastab raamatu kirjelduse
    kuvaKirjeldus() {
        return this.pealkiri + " - " + this.autor + ", " + this.aasta;
    },

    // Muudab raamatu ilmumise aastat
    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
    }
};
// 2. Raamatukogu objekt
let raamatukogu = {

    // Raamatute massiiv
    raamatud: [
        { pealkiri: "Tõde ja õigus I", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Apteeker Melchior", autor: "Indrek Hargla", aasta: 2010 },
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Abielu ookeanis", autor: "Maimu Berg", aasta: 1979 }
    ],

    // Kuvab kõik raamatud konsoolis
    kuvaKoikKonsoolis() {
        this.raamatud.forEach(r => {
            console.log(r.pealkiri + " - " + r.autor + " (" + r.aasta + ")");
        });
    },

    // Lisab uue raamatu massiivi (push)
    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
    },

    // Tagastab raamatute koguarvu
    koguarv() {
        return this.raamatud.length;
    },

    // Loendab raamatud, mis on ilmunud pärast 2000. aastat (filter)
    parast2000() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },

    // Oma meetod: otsib raamatu kindla aasta järgi (find)
    otsiAastaJargi(otsitavAasta) {
        return this.raamatud.find(r => r.aasta === otsitavAasta);
    }
};
// 3. Funktsioonid HTML nuppude jaoks. Kuvab raamatu kirjelduse
function kuvaRaamat() {
    let tekst = raamat.kuvaKirjeldus();

    console.log(tekst);
    document.getElementById("vastus").innerHTML = tekst;
}


// Muudab raamatu aastat
function muudaRaamatuAasta() {
    let uusAasta = Number(document.getElementById("uusAasta").value);

    if (!uusAasta) {
        document.getElementById("vastusAasta").innerHTML = "Sisesta aasta!";
        return;
    }

    let vanaAasta = raamat.aasta;
    raamat.muudaAasta(uusAasta);

    let tekst = "Aasta muudetud: " + vanaAasta + " -> " + raamat.aasta;

    console.log(tekst);
    document.getElementById("vastusAasta").innerHTML = tekst;
}
// Kuvab kõik raamatud HTML lehel
function kuvaKoikRaamatud() {
    let tulemus = "";

    raamatukogu.raamatud.forEach((r, i) => {
        tulemus += (i + 1) + ". " + r.pealkiri + " - " +
            r.autor + " (" + r.aasta + ")<br>";
    });

    console.log(tulemus.replaceAll("<br>", "\n"));
    document.getElementById("vastus2").innerHTML = tulemus;
}
// Lisab uue raamatu HTML väljadelt
function lisaUusRaamat() {
    let pealkiri = document.getElementById("pealkiri").value;
    let autor = document.getElementById("autor").value;
    let aasta = Number(document.getElementById("aasta").value);

    if (!pealkiri || !autor || !aasta) {
        document.getElementById("vastusLisa").innerHTML = "Täida kõik väljad!";
        return;
    }

    raamatukogu.lisaRaamat(pealkiri, autor, aasta);

    let tekst = "Raamat lisatud: " + pealkiri + " (" + aasta + ")";

    console.log(tekst);
    document.getElementById("vastusLisa").innerHTML = tekst;

    document.getElementById("pealkiri").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("aasta").value = "";
}
// Kuvab raamatute koguarvu
function kuvaKoguarv() {
    let arv = raamatukogu.koguarv();
    let tekst = "Raamatuid kokku: " + arv;

    console.log(tekst);
    document.getElementById("vastus3").innerHTML = tekst;
}


// Kuvab pärast 2000. aastat ilmunud raamatute arvu
function kuvaParast2000() {
    let arv = raamatukogu.parast2000();
    let tekst = "Pärast 2000. aastat ilmunud: " + arv + " raamatut";

    console.log(tekst);
    document.getElementById("vastus4").innerHTML = tekst;
}


// Otsib raamatut aasta järgi
function kuvaOtsing() {
    let aasta = Number(document.getElementById("otsiAasta").value);

    if (!aasta) {
        document.getElementById("vastus5").innerHTML = "Sisesta aasta!";
        return;
    }

    let leitud = raamatukogu.otsiAastaJargi(aasta);

    if (leitud) {
        let tekst = "Leitud raamat: " + leitud.pealkiri +
            " (" + leitud.autor + ")";

        console.log(tekst);
        document.getElementById("vastus5").innerHTML = tekst;
    } else {
        console.log("Raamatut ei leitud");
        document.getElementById("vastus5").innerHTML = "Raamatut ei leitud";
    }
}

