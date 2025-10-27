//Voglio avere in input l'età ed il numero di km da fare

//Raccolta dati
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//applicare sconto 20% per minorenni e 40% per gli over 65
//Ottenere l'output con il prezzo finale

//Calcolo la tariffa base moltiplicando il numero dei km per 0.21 euro
//Poi applico gli sconti per le categorie di persone e calcolo il prezzo finale in base ai vari scenari sottraendo dal prezzo lo sconto

const eta = parseInt(prompt("Inserisci la tua età: "));
const numKm = parseFloat(prompt("Inserisci Il numero di km da percorrere: "));
let prezzoFinale;
let risultato = "";

let prezzo = numKm * 0.21;
let scontoMinorenni = (prezzo * 20) / 100;
let scontoOver65 = (prezzo * 40) / 100;

if (eta < 0 || numKm < 0) {
    console.log("Dati inseriti non sono validi");
} else {
    if (eta < 18) {
        prezzoFinale = (prezzo - scontoMinorenni);
        prezzoFinale = Math.round(prezzoFinale * 100) / 100;
        risultato = "Il prezzo finale è: " + prezzoFinale;

    } else if (eta > 65) {
        prezzoFinale = (prezzo - scontoOver65);
        prezzoFinale = Math.round(prezzoFinale * 100) / 100;
        risultato = "Il prezzo finale è: " + prezzoFinale;
    } else {
        prezzoFinale = prezzo;
        prezzoFinale = Math.round(prezzoFinale * 100) / 100;
        risultato = "Il prezzo finale è: " + prezzo;
    }
}

prezzoFinale = Math.round(prezzoFinale * 100) / 100;


console.log(risultato);