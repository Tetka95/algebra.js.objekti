/*
1. Kreiraj objekt koji reprezentira neki specificni auto sa bar 8 svojstava 
od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt.
Probajte referencirati druge vrijednosti objekta u funkcijama.
Svaka funkcija mora primati argumente i vracati neku vrijednost.

2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.

3. Pomoću petlje pristupi svim brojivim svojstvima auto objekta i ispiši
vrijednosti u konzoli.

4. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 
2 svojstva tvog objekta.

5. Pretvori svoj objekt u JSON string.
*/

//1.
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

//5.
console.log("auto JSON --> " + JSON.stringify(auto));

//2.
console.log('početna brzina je: ' + auto.brzina);
console.log('auto će ubrzati na: ' + auto.ubrzaj(2));
console.log ('brzina nakon ubrzanja je: ' + auto.brzina);
console.log('auto će ubrzati na (nakon 41sec): ' + auto.ubrzaj(41));

console.log('nakon 5sec kočenja brzina je: ' + auto.zakoci(5));

console.log('trenutna boja auta: ' + auto.boja + ", a nova boja je: " + auto.promijeniBoju("crvena"));

auto["boja"] = "žuta";
auto.boja = "zelena";

console.log(auto.boja);

//3.
for (kljuc in auto) {
    let tmpKljuc = auto[kljuc];
    //console.log("provjeravamo " + tmpKljuc);

    if (typeof tmpKljuc == "number") {
        console.log(kljuc + " : " + tmpKljuc);
    }

    /*if (auto.propertyIsEnumerable(kljuc)) {
        console.log(kljuc + " : " + tmpKljuc);
    }*/
} 

//4.
console.log("Prodajem auto " + auto.marka.tip + ' ' + auto.marka.model + ", boja auta je " + auto.boja + " te postiže maksimalnu brzinu od " + auto.maxBrzina + ".");