function sorteador_de_numeros(){

    lista_numeros_sorteados = []

    let quantidade_numeros = parseInt(document.getElementById("quantidade").value)
    let inicio_numeros = parseInt(document.getElementById("de").value)
    let limite_numeros = parseInt(document.getElementById("ate").value)

    let i = 0

    if(!isNaN(quantidade_numeros) && !isNaN(inicio_numeros) && !isNaN(limite_numeros) && (limite_numeros - inicio_numeros) + 1 > quantidade_numeros){
        while(i < quantidade_numeros){

            numero_sorteado = sortear_numero(limite_numeros, inicio_numeros)
    
            if(!lista_numeros_sorteados.includes(numero_sorteado)){
                lista_numeros_sorteados.push(numero_sorteado)
                i++
            }
    
        }
    
        alterar_texto(`Números sorteados: ${lista_numeros_sorteados}`)
        alterar_botao()
    } else{
        alterar_texto("Insira as informações corretamente!")
    }

    

}

function alterar_texto(mensagem){
    texto = document.getElementById("resultado")
    texto.innerHTML = mensagem
}

function sortear_numero(max, min){
    return Math.round(Math.random() * (max - min) + min )
}

function alterar_botao(){
    let botao = document.getElementById("btn-reiniciar")
    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado")
        botao.classList.add("container__botao")
    } else{
        botao.classList.remove("container__botao")
        botao.classList.add("container__botao-desabilitado")
    }
}

function reiniciar_jogo(){
    alterar_botao()

    let quantidade_numeros = document.getElementById("quantidade").value = ""
    let inicio_numeros = document.getElementById("de").value = ""
    let limite_numeros = document.getElementById("ate").value = ""

    alterar_texto("Números sorteados:  nenhum até agora")
}