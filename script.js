let jogador = "X"
let listaDeJogadas = ['', '', '', '', '', '', '', '', '']


function jogar(i) {
    if (listaDeJogadas[i] == '') {
        listaDeJogadas[i] = jogador
        if (jogador == "X") {
            jogador = "0"
        } else {
            jogador = "X"
        }
        realizarJogada()
    }
    if (
        listaDeJogadas[3], listaDeJogadas[4], listaDeJogadas[5] == 'X'
        || (listaDeJogadas[6] && listaDeJogadas[7] && listaDeJogadas[8] == 'X')
        || (listaDeJogadas[0] && listaDeJogadas[1] && listaDeJogadas[2] == 'X')
        || (listaDeJogadas[0] && listaDeJogadas[4] && listaDeJogadas[8] == 'X')
        || (listaDeJogadas[2] && listaDeJogadas[4] && listaDeJogadas[6] == 'X')
        || (listaDeJogadas[0] && listaDeJogadas[4] && listaDeJogadas[8] == 'X')
        || (listaDeJogadas[0] && listaDeJogadas[3] && listaDeJogadas[6] == 'X')
        || (listaDeJogadas[1] && listaDeJogadas[4] && listaDeJogadas[7] == 'X')
        || (listaDeJogadas[2] && listaDeJogadas[5] && listaDeJogadas[8] == 'X')
    ) {
        alert("o X ganhou")
    } else if (
        listaDeJogadas[3], listaDeJogadas[4], listaDeJogadas[5] == '0'
        || (listaDeJogadas[0] && listaDeJogadas[1] && listaDeJogadas[2] == '0')
        || (listaDeJogadas[6] && listaDeJogadas[7] && listaDeJogadas[8] == '0')
        || (listaDeJogadas[0] && listaDeJogadas[4] && listaDeJogadas[8] == '0')
        || (listaDeJogadas[2] && listaDeJogadas[4] && listaDeJogadas[6] == '0')
        || (listaDeJogadas[0] && listaDeJogadas[4] && listaDeJogadas[8] == '0')
        || (listaDeJogadas[0] && listaDeJogadas[3] && listaDeJogadas[6] == '0')
        || (listaDeJogadas[1] && listaDeJogadas[4] && listaDeJogadas[7] == '0')
        || (listaDeJogadas[2] && listaDeJogadas[5] && listaDeJogadas[8] == '0')
    ) {
        alert("o 0 ganhou")
    }

}
const celulas = document.querySelectorAll('td')
function realizarJogada() {
    for (let i = 0; i < listaDeJogadas.length; i++) {
        celulas[i].innerHTML = listaDeJogadas[i]
    }
}
function resetar() {
    window.location.reload()
}
