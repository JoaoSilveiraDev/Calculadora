const entrada = document.getElementById("entrada").value
const resultado = document.getElementById("resultado")
const soma = document.getElementById("soma")
const subtracao = document.getElementById("subtracao")
const arraySoma = []
const arraySubtracao = []

soma.addEventListener("click", () => {
    arraySoma.push(Number(document.getElementById("entrada").value))
    console.log(arraySoma)
})

subtracao.addEventListener("click", () => {
    arraySubtracao.push(Number(document.getElementById("entrada").value))
    console.log(arraySubtracao)
})

resultado.addEventListener("click", ()=>{
    var soma = 0
    var menos = 0
    for(let i = 0; i<arraySoma.length; i++){
        soma += arraySoma[i]
    }
    for(let i = 0; i<arraySubtracao.length; i++){
        menos += arraySubtracao[i]
    }

    alert(soma-menos)

    arraySoma.splice(0, arraySoma.length)
    arraySubtracao.splice(0, arraySubtracao.length)
})