import QrScanner from "./qr-scanner.min.js"

const inputFile = document.getElementById("main-button")
inputFile.addEventListener("change", buscar, false)

const mensagens = [
    "Carregando...",
    "Enviando",
    "Feito!",
    "Erro!"
]

function buscar(){
    mensagem(mensagens[0])

    let file = inputFile.files[0]
    if(!file) return

    QrScanner.scanImage(file)
        .then(result => 
            window.open(result, '_blank')
            )
        .catch(e => mensagem(mensagens[3]))
        inputFile.value = ''

}

function mensagem(msg){
    document.querySelector("#main-load").innerHTML = msg
}