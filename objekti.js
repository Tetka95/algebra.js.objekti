/*
1. Kreiraj objekt koji reprezentira neki specificni auto sa bar 8 svojstava 
od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt.
Probajte referencirati druge vrijednosti objekta u funkcijama.
Svaka funkcija mora primati argumente i vracati neku vrijednost.

2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.

3.

4. Pretvori svoj objekt u JSON string.
*/

var auto = {
    boja : 'crna',
    marka : {tip: "BMW", model: "f30"},
    cijena : 22000,
    brzina: 10,
    maxBrzina: 220,
    registriran: true,
    ubrzaj: function(vrijeme) {
        let tmpVrijeme = 1;
        while (this.brzina < this.maxBrzina) {
            this.brzina = this.brzina + 5;
            if (tmpVrijeme == vrijeme) {
                break;
            }
            tmpVrijeme++;
        }
        return this.brzina;
    },
    zakoci: function(vrijeme) {
        while (this.brzina > 0)  {
            this.brzina = this.brzina - 20;
            vrijeme--;
            if(vrijeme == 0) {
                break;
            }
        }
        return this.brzina;
    },
    promijeniBoju: function(novaBoja) {
        this.boja = novaBoja;
        return this.boja;
    },
};

console.log("auto JSON --> " + JSON.stringify(auto));

console.log('početna brzina je: ' + auto.brzina);
console.log('auto će ubrzati na: ' + auto.ubrzaj(2));
console.log ('brzina nakon ubrzanja je: ' + auto.brzina);
console.log('auto će ubrzati na (nakon 41sec): ' + auto.ubrzaj(41));

console.log('nakon 5sec kočenja brzina je: ' + auto.zakoci(5));

console.log('trenutna boja auta: ' + auto.boja + ", a nova boja je: " + auto.promijeniBoju("crvena"));