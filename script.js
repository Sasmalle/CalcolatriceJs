const display = document.getElementsByClassName("display")
const numero = document.getElementsByClassName("numero");
const operazione = document.getElementsByClassName("operazione");
const uguale = document.getElementsByClassName("uguale");
let numInt = 0;
let risultato =0;
let num ="";
let op = "";

function somma (a,b){
    return a+b;
}
function sottrazione(a,b){
    return a-b;
}
function moltiplicazione (a,b){
    if(a==0|b==0){
        return 0;
    }
    else
    return a*b;
}
function divisione(a,b){
    if (b==0){
        return Error;
    }
    else
    return a/b;
}


function reset() {
    num=""
    // numInt = 0; (penso non serva a niente)
    display[0].textContent = "";
}


function getNumber(){
    for (let numeri of numero){
        numeri.addEventListener("click",function(){
            num+=numeri.textContent;
            numInt= parseInt(num, 10);
            display[0].textContent = num;
            
        });
        getCalcolo();
    }
}
function getOperazione(){
    for (let operazioni of operazione){
        operazioni.addEventListener("click",function(){
            op=operazioni.textContent;
            display[0].textContent = "";
            getCalcolo();
            reset();
        })
    }
}
function getCalcolo(){
    if (op=="+"){
        risultato = somma(risultato,numInt);
        console.log(risultato);
        numInt= 0;
        return risultato;
    }
    if (op=="*"){
        if (risultato == 0) {
            risultato = numInt;
        } else {
            risultato = moltiplicazione(risultato, numInt);
        }
        console.log(risultato);
        numInt= 1;
        return risultato;
    }
   /* if (op=="-"){
        risultato = sottrazione(numInt,risultato);
        console.log(risultato);
    }
    if (op=="/"){
        risultato = divisione(numInt,risultato);
    }
    */
    
}
function getRisultato() {
    uguale[0].addEventListener("click",function(){
        display[0].textContent = getCalcolo();
    })}
getNumber()
getOperazione()
getRisultato()
