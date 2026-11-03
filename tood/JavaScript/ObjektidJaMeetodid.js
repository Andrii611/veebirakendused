// 1. Raamatu objekt
let raamat = {
    pealkiri: "Tõde ja õigus I",
    autor: "A. H. Tammsaare",
    aasta: 1926,

    kuvaKirjeldus() {
        return this.pealkiri + ", autor " + this.autor +
            ", aastal " + this.aasta;
    },

    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
    }
};


// 2. Raamatukogu objekt
let raamatukogu = {
    raamatud: [
        { pealkiri: "Tõde ja õigus I", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Apteeker Melchior ja Oleviste mõistatus", autor: "Indrek Hargla", aasta: 2010 },
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Abielu ookeanis", autor: "Maimu Berg", aasta: 1979 }
    ],

    // forEach - kuvab kõik raamatud
    kuvaKõikKonsoolis() {
        this.raamatud.forEach(r => {
            console.log(r.pealkiri + " - " + r.autor +
                " (" + r.aasta + ")");
        });
    },

    // push - lisab uue raamatu
    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({
            pealkiri: pealkiri,
            autor: autor,
            aasta: aasta
        });
    },

    // length - tagastab raamatute arvu
    koguarv() {
        return this.raamatud.length;
    },

    // filter - otsib pärast 2000. aastat ilmunud raamatud
    pärast2000() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },

    // find - otsib raamatu aasta järgi
    otsiAastaJärgi(otsitavAasta) {
        return this.raamatud.find(r => r.aasta === otsitavAasta);
    }
};


// 3. HTML nuppude funktsioonid

// Kuvab ühe raamatu kirjelduse
function kuvaRaamat() {
    document.getElementById("vastus").innerHTML =
        raamat.kuvaKirjeldus();
}


// Kuvab kõik raamatud
function kuvaKikRaamatud() {
    let tulemus = "";

    raamatukogu.raamatud.forEach(r => {
        tulemus += r.pealkiri + " - " + r.autor +
            " (" + r.aasta + ")<br>";
    });

    document.getElementById("vastus2").innerHTML = tulemus;
}


// Kuvab raamatute koguarvu
function kuvaKoguarv() {
    document.getElementById("vastus3").innerHTML =
        "Raamatuid kokku: " + raamatukogu.koguarv();
}


// Kuvab pärast 2000. aastat ilmunud raamatute arvu
function kuvaParast2000() {
    document.getElementById("vastus4").innerHTML =
        "Pärast 2000. aastat ilmunud: " +
        raamatukogu.pärast2000();
}


// Otsib raamatu aasta järgi
function kuvaOtsing() {
    let leitud = raamatukogu.otsiAastaJärgi(2010);

    if (leitud) {
        document.getElementById("vastus5").innerHTML =
            "Leitud aasta 2010 raamat: " +
            leitud.pealkiri + " (" + leitud.autor + ")";
    } else {
        document.getElementById("vastus5").innerHTML =
            "Ei leitud";
    }
}