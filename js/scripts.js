/*

Descrizione: Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
Dopo che sono stati inseriti i 5 numeri, il software dice 
quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno: * Pensate prima in italiano. 
* Dividete in piccoli problemi la consegna. 
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

*/


const myContainer = document.querySelector('.my-container');
const numbers = document.querySelector('.numbers');
let row = document.querySelector('.row');
const result = document.getElementById('result');

// let randomNumber = getRandomNumber(1, 100)
const randomNumbers = [];
const userNumbers = [];
// for (let i = 0; i < 5; i++) {
while (randomNumbers.length < 5){
    
    // const myNumberDiv = document.createElement('div');
    let randomNumber = getRandomNumber(1, 100);
    if (!randomNumbers.includes(randomNumber)){
        // const row = document.querySelector('.row');
        const col = document.createElement('div');
        col.classList.add('col', 'rounded');
        row.append(col)
        randomNumbers.push(randomNumber); 
        col.innerHTML = randomNumber;
    }    
}
let clock = setInterval(timerFunction , 1000);
let request = setTimeout(requestNumbers, 6100)
console.log(randomNumbers)





//  Funzioni
// Generazione numero random 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Timer di 30 secondi
let counter = 5
function timerFunction () {
    const timer = document.getElementById('timer');
    timer.classList.remove('d-none');
    if (counter != 0){
        timer.innerHTML = counter
        console.log(counter);
        counter--
    } else {
        timer.classList.add('d-none')
        timer.innerHTML = '';
        row.innerHTML = "";
        clearInterval(clock)
    }
}
let points = 0
console.log('punti:', points)
function requestNumbers(){
    
    for (let i = 0; i < randomNumbers.length; i++) {
    
        let userNumber = parseInt(prompt('Inserisci il numero'));
        if (randomNumbers.includes(userNumber)){
            
            userNumbers.push(userNumber);
            points++
            // const userNumberDiv = document.createElement('div');
            // col.innerHTML = userNumber;
            // col.append(userNumberDiv)
            console.log(userNumber)
            console.log(points)
        }                
    }
    for (let k = 0; k < userNumbers.length; k++){
        let col = document.createElement('div');
        col.classList.add('col');
        col.innerHTML = userNumbers[k];
        row.append(col);
        console.log(col);        
    }
    if (userNumbers.length != 0) {
        result.innerHTML = `Hai totalizzato ${points} punti`
        console.log(points)
    } else if (userNumbers.length == 0){
    result.innerHTML = 'Non ne hai azzeccato nemmeno uno'
    console.log(points)
    }
}

