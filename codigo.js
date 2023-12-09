
let saldo = parseInt(prompt("Indique o saldo de pecas"))
let qtd = 0
document.write("Saldo igual a "+ saldo + "<br>") //Change To Doc.Write

let encerrar = "n"

terminarProcesso()

function terminarProcesso(){if (encerrar.toLowerCase() === "n"){

    let tipoOperacao = getType(false)
    qtd = getType(true)
    MoveOrRemove(tipoOperacao)
}

else if(encerrar.toLowerCase() === "y"){
    document.write("Sistema encerrado :)" + "<br>")
}}

function promptSaldo(){document.write("Saldo atual e "+ saldo + "<br>" )
encerrar = prompt("Deseja encerrar? Y/N")
terminarProcesso()
}

function getType(isQtd){
    if (isQtd){return parseInt(prompt("Indique Qtd Peças"))}
    else{return parseInt(prompt("Indique Tipo de operação \n 1: Entrada de peças \n 2: Saída de peças"))}

}

function MoveOrRemove(tipo){
    if(tipo === 1){saldo += qtd}
    else if(tipo === 2){ saldo < qtd ?alert(document.write("Saldo Insuficiente" + "<br>")): saldo -= qtd }
    promptSaldo()
}


