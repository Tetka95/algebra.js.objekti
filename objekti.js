/*
1. Kreiraj objekt koji reprezentira neki specificni auto sa bar 8 svojstava 
od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt.
Probajte referencirati druge vrijednosti objekta u funkcijama.
Svaka funkcija mora primati argumente i vracati neku vrijednost.

2. 
3.
4. Pretvori svoj objekt u JSON string.
*/

var auto = {
    boja : 'crna',
    marka : {tip: "BMW", model: "ff30"},
    cijena : 22000,
    brzina: 10,
    maxBrzina: 220,
    registriran: true,
    ubrzaj: function(vrijeme) {
        return vrijeme *5;
    },
    zakoci: function(vrijeme) {
        return vrijeme /5;
    },
    promijeniBoju: function(novaBoja) {
        this.boja = novaBoja;
        return this.boja;
    },
};

console.log("auto JSON --> " + JSON.stringify(auto));