
let saldo = prompt("Indique o saldo de pecas")
alert("Saldo igual a "+ saldo) //Change To Doc.Write
let encerrar = "n"

if (encerrar === "n"){

    let tipoOperacao = getType(false)
    let qtd = getType(true)
    alert(qtd, tipoOperacao) //remove
    
}
else if(encerrar == "y"){
    alert("Sistema encerrado :)")
}

function getType(isQtd){
    if (isQtd){return prompt("Indique Qtd Peças")}
    else{return prompt("Indique Tipo de operação \n 1: Entrada de peças \n 2: Saída de peças")}

}



