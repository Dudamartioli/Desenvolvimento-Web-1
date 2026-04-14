function fcalcular(){
    let horas=parseInt(document.getElementById("inputhoras").value)
    let carro=document.getElementById("inputcarro").checked
    let cliente=document.getElementById("inputcliente").checked

    let valor = tarifaBase(horas)
    let valorComAcrescimo = porte(carro, valor)
    let valorFinal = (fidelidade(cliente, valorComAcrescimo)).toFixed(2)

    document.getElementById("resp").innerHTML = "O valor total é R$" + valorFinal
}

function tarifaBase(horas){
    let valor=0
    let diarias=0
    let horasrestantes=0
    if(horas < 24){
        if(horas==1){
            valor= 5
        }else{
            valor= 5 + (2.50 * (horas-1))
        }
    }else{
        diarias = Math.floor(horas/24)
        horasrestantes = horas % 24
        valor = diarias * 60 + horasrestantes * 2.50
    }
    return valor
}

function  porte(carro, valor){
    let valorComAcrescimo=0
    if(carro == true){
        valorComAcrescimo = valor + 25/100*valor
    }else{
        valorComAcrescimo = valor
    }
    return valorComAcrescimo
}

function fidelidade(cliente, valorComAcrescimo){
    let valorfinal=0
    if(cliente == true){
        valorfinal = valorComAcrescimo - 5/100*valorComAcrescimo
    }else{
        valorfinal = valorComAcrescimo
    }
    return valorfinal
}