function fcalcular(){
    let checkin = document.getElementById("inputCheckin").value
    let checkout = document.getElementById("inputCheckout").value
    let carro = document.getElementById("inputcarro").checked
    let cliente = document.getElementById("inputcliente").checked

    // validação básica
    if(checkin === "" || checkout === ""){
        document.getElementById("resp").innerHTML = "Preencha as datas!"
        return
    }

    let dataEntrada = new Date(checkin)
    let dataSaida = new Date(checkout)

    let diferenca = dataSaida - dataEntrada

    // converter pra horas
    let horas = diferenca / (1000 * 60 * 60)

    // arredondar pra cima
    horas = Math.ceil(horas)

    if(horas <= 0){
        document.getElementById("resp").innerHTML = "Datas inválidas!"
        return
    }

    let valor = tarifaBase(horas)
    let valorComAcrescimo = porte(carro, valor)
    let valorFinal = fidelidade(cliente, valorComAcrescimo).toFixed(2)

    document.getElementById("resp").innerHTML = 
        "Tempo: " + horas + " horas <br> Valor total: R$ " + valorFinal
}


function tarifaBase(horas){
    let valor = 0
    let diarias = 0
    let horasrestantes = 0

    if(horas < 24){
        if(horas == 1){
            valor = 5
        }else{
            valor = 5 + (2.50 * (horas - 1))
        }
    }else{
        diarias = Math.floor(horas / 24)
        horasrestantes = horas % 24
        valor = diarias * 60 + (horasrestantes * 2.50)
    }

    return valor
}


function porte(carro, valor){
    let valorComAcrescimo = 0

    if(carro == true){
        valorComAcrescimo = valor + (25/100 * valor)
    }else{
        valorComAcrescimo = valor
    }

    return valorComAcrescimo
}


function fidelidade(cliente, valorComAcrescimo){
    let valorfinal = 0

    if(cliente == true){
        valorfinal = valorComAcrescimo - (5/100 * valorComAcrescimo)
    }else{
        valorfinal = valorComAcrescimo
    }

    return valorfinal
}