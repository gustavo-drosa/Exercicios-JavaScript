function calcular(){
    var camadas = parseInt(document.getElementById("camadas").value);
    var tempo_preparacao = tempoDePreparacao(camadas);

    var tempo_atual = parseInt(document.getElementById("tempo_atual").value);

    preparar(tempo_preparacao, tempo_atual);
}

function tempoDePreparacao(camadas){
    var tempo_preparacao = camadas * 10;
    return tempo_preparacao;
}

function preparar(tempo_preparacao, tempo_atual){
    var tempo_restante = tempo_preparacao - tempo_atual;

    if(tempo_atual < tempo_preparacao){
        resposta.textContent = ("Tempo restante: " + tempo_restante + " minutos");

    }else if(tempo_atual > tempo_preparacao){
        resposta.textContent = ("Vai tomar pinga bixo! Já passou " + Math.abs(tempo_restante) + " minutos do ponto!");

    }else if(tempo_atual === tempo_preparacao){
        resposta.textContent = ("Lasanha pronta!");
    }
}