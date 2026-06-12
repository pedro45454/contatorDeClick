let clickCount = 0
let clickAdicionar = document.getElementById("clicker")
let clickRemover = document.getElementById("reset")
let clickTexto = document.getElementById("clicker-text")

function adicionarClick(){
    clickCount++
    clickTexto.textContent = clickCount
}

function removerClick(){
    clickCount--
    clickTexto.textContent = clickCount
}


