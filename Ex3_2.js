function calcPesoIdeal(){
    var inNome = document.getElementById("inNome")
    var inAltura = document.getElementById("inAltura")
    var inmasculino = document.getElementById("masculino")
    var infeminino = document.getElementById("feminino")
    var outresposta = document.getElementById("resposta")

    var nome = inNome.value
    var altura = Number (inAltura.value)
    var masculino = masculino
    var feminino = feminino

    if(nome =="" || (masculino == false && feminino == false)){
        alert(`Por favor, informe o nome e selecione o sexo!`)
    }
    if(altura==0 || isNaN (altura)){
        alert(`Por favor, insira a altura corretamente!`)
    } 

    if (masculino){
    var peso = 22 * Math.pow(altura, 2) 
    } else {
    var peso = 21 * Math.pow(altura, 2)
    }

    resposta.textContent=`${nome}, seu peso ideal é de ${peso} Kg`
}

function limparCampos(){
    document.getElementById("inNome").value=""
    document.getElementById("inAltura").value=""
    document.getElementById("masculino").checked = false
    document.getElementById("feminino").checked = false
    document.getElementById("resposta").textContent=""

}