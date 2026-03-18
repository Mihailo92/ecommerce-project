let iznos = 0; // u $

function dodajNaIznos(cena) {
    iznos += cena;
    console.log("Trenutni iznos: $" + iznos);
}

dodajNaIznos(10);
dodajNaIznos(25);
dodajNaIznos(40);

function prikaziIznos() {
    alert("Ukupan iznos porudžbine je: $" + iznos);
}