


let zucchina = [
    {
        varieta: "normale",
        lunghezza: 15,
        peso: 3
    },
    {
        varieta: "normale",
        lunghezza: 4,
        peso: 5
    },
    {
        varieta: "normale",
        lunghezza: 20,
        peso: 2
    },
    {
        varieta: "normale",
        lunghezza: 10,
        peso: 8
    },
    {
        varieta: "normale",
        lunghezza: 20,
        peso: 4
    },
    {
        varieta: "normale",
        lunghezza: 7,
        peso: 6
    },
    {
        varieta: "normale",
        lunghezza:18,
        peso: 2
    },
    {
        varieta: "normale",
        lunghezza: 15,
        peso: 4
    },
    {
        varieta: "normale",
        lunghezza: 7,
        peso: 2
    },
    {
        varieta: "normale",
        lunghezza: 9,
        peso: 5
    },
   

]

/*
 snack 1  

 Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
 
*/

/*
let pesoTotale = 0

for (let i = 0; i < zucchina.length; i++) {
    

    pesoSingolo= zucchina[i].peso;

    pesoTotale = pesoTotale + pesoSingolo; 
}

console.log("il peso totale delle zucchine è : ", pesoTotale)
*/


/*
Snack 2 

Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/


//creo le variabili vuote per poi pushare da dentro il ciclo
let zucchinaLunga = [];
let zucchinaCorta = [];
let pesoZucchinaLunga = 0
let pesoZucchinaCorta = 0

for (let i = 0; i < zucchina.length; i++) {

    const elemento = zucchina[i]

    if(elemento.lunghezza > 15) {
        zucchinaLunga.push(elemento);
    }else {zucchinaCorta.push(elemento)};
}

for (let i = 0; i < zucchinaLunga.length; i++) {
    
    elemento = zucchinaLunga[i].peso;
    pesoZucchinaLunga += elemento;
}

console.log(`il peso delle zucchine lunghe è ${pesoZucchinaLunga}`)

for (let i = 0; i < zucchinaCorta.length; i++) {

    const elemento = zucchinaCorta[i].peso;
    pesoZucchinaCorta = pesoZucchinaCorta + elemento;
}

console.log(`il peso delle zucchinecorte è ${pesoZucchinaCorta}`)

/************************* snack 3 *********************/ 

/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC)
*/







    
    
