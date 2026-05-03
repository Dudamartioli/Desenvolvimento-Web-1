//IMC = peso / (altura * altura)

function fcalcular(){
    let peso = parseFloat(document.getElementById("inputp").value)
    let altura = parseFloat(document.getElementById("inputa").value)
    let imc = peso/(altura*altura)
    let respclassificacao = classificacao(imc)

    if(isNaN(peso) || isNaN(altura) || altura <= 0){
        document.getElementById("resp").innerHTML = "Preencha os valores corretamente!"
    return
    }

    document.getElementById("resp").innerHTML = "O seu IMC é: " + imc.toFixed(2) + " e sua classificação é " + respclassificacao
}

function classificacao(imc){
    let classificacao = ""

    if(imc<18.5){
        classificacao = "abaixo do peso"
    }else if(18.5<=imc && imc<=24.9){
        classificacao = "peso normal"
    }else if(25.0<=imc && imc<=29.9){
        classificacao = "sobrepeso"
    }else if(30.0<=imc && imc<=34.9){
        classificacao = "obesidade grau 1"
    }else if(35.0<=imc && imc<=39.9){
        classificacao = "obesidade grau 2"
    }else{
        classificacao = "obesidade grau 3"
    }

    return classificacao
}