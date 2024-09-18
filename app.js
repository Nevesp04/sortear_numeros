function sorteardor_de_valores(){
    
    lista_numeros = []

    let quantidade = parseInt(document.getElementById("quantidade").value)
    let inicio = parseInt(document.getElementById("de").value)
    let limite = parseInt(document.getElementById("ate").value)

    let i = 0

    if(!isNaN(quantidade) && !isNaN(inicio) && !isNaN(limite) && inicio < limite && (limite - inicio) + 1 > quantidade){

        while(i < quantidade){

            let numero_sorteado = obter_numero_aleatorio(limite, inicio)
    
            if (!lista_numeros.includes(numero_sorteado)){
                lista_numeros.push(numero_sorteado)
                i++
            }
        }
    
        let texto = document.getElementById("resultado")
        texto.innerHTML = `Números sorteados: ${lista_numeros}`
    
        alterar_status_botao()

    } else{
        let texto = document.getElementById("resultado")
        texto.innerHTML = `Números inválidos!`
    }
    
}

function obter_numero_aleatorio(max, min){
    return Math.round(Math.random() * (max - min) + min)
}

function alterar_status_botao(){
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
    alterar_status_botao()
    let quantidade = document.getElementById("quantidade").value = ""
    let inicio = document.getElementById("de").value = ""
    let limite = document.getElementById("ate").value = ""
    document.getElementById("resultado").innerHTML = "Números sorteados:  nenhum até agora"
} 