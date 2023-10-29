const display = document.getElementsByClassName("display")
const numero = document.getElementsByClassName("numero");
const operazione = document.getElementsByClassName("operazione");
const uguale = document.getElementsByClassName("uguale");
let num1=0;
let numInt = 0;
let num ="";
let op = "";

function somma (a,b){
    return a+b;
}
function sottrazione(a,b){
    return a-b;
}
function moltiplicazione (a,b){
    return a*b;
}
function divisione(a,b){
    return a/b;
}
function getNumber(){
    for (let numeri of numero){
        numeri.addEventListener("click",function(){
            num+=numeri.textContent;
            numInt= parseInt(num, 10);
            display[0].textContent = num;
            console.log(numInt);
        })
    }
}
function reset() {
    num1 = numInt;
    num=""
    numInt = 0;
    display[0].textContent = "";
}

function getOperazione(){
    for (let operazioni of operazione){
        operazioni.addEventListener("click",function(){
            op=operazioni.textContent;
            display[0].textContent = "";
            reset();
            console.log(num1);
            console.log(op);
        })
    }
}

function calcolo(){
    getNumber()
    getOperazione()
    getNumber()
    if(getOperazione()="+"){
        somma
    }
}


console.log(uguale[0].textContent);
getNumber();
getOperazione();
