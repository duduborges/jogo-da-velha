let jogador = "x"
function jogar(td) {
    td.innerHTML = jogador
    if (jogador == "x") {
        jogador = "0"
    } else {
        jogador = "x"
    }
}