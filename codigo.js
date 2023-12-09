
let saldo = parseInt(prompt("Indique o saldo de pecas"))
let qtd = 0
document.write("Saldo: "+ saldo + "<br>")
let encerrar = "n"

Processo()

function Processo(){while (encerrar.toLowerCase() === "n"){

    let tipoOperacao = getType(false)
    qtd = getType(true)
    OperarTipo(tipoOperacao)
    promptSaldo()
}
    //encerrar = y
    document.write("Sistema encerrado :)" + "<br>")
}

//Decide se variável é qtd de peças ou tipo de operação
function getType(isQtd){
    if (isQtd){return parseInt(prompt("Indique Qtd Peças"))}
    else{return parseInt(prompt("Indique Tipo de operação \n 1: Entrada de peças \n 2: Saída de peças"))}

}

//Opera com base em tipo 1 ou 2
function OperarTipo(tipo){
    if(tipo === 1) {saldo += qtd}

    else if(tipo === 2)
    { if(saldo < qtd) {(document.write("Saldo Insuficiente" + "<br>"))
    alert("Saldo Insuficiente")} 
    else{ saldo -= qtd }}
}

function promptSaldo(){document.write("Saldo: "+ saldo + "<br>" )
encerrar = prompt("Deseja encerrar? Y/N")
}






