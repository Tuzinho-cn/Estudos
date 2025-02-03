const perguntas = [
    { pergunta: "Programação em JavaScript", resposta: "hard" },
    { pergunta: "Gerenciamento de tempo", resposta: "soft" },
    { pergunta: "Uso de Excel avançado", resposta: "hard" },
    { pergunta: "Trabalho em equipe", resposta: "soft" },
    { pergunta: "Design gráfico no Photoshop", resposta: "hard" },
    { pergunta: "Comunicação eficaz", resposta: "soft" }
];

let pontos = 0;
let perguntaAtual = 0;

function carregarPergunta() {
    if (perguntaAtual < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[perguntaAtual].pergunta;
    } else {
        document.getElementById("pergunta").innerText = "Fim do jogo!";
        document.getElementById("resultado").innerText = `Pontuação final: ${pontos}`;
    }
}

function responder(tipo) {
    if (perguntaAtual < perguntas.length) {
        if (tipo === perguntas[perguntaAtual].resposta) {
            pontos++;
            document.getElementById("resultado").innerText = "Correto!";
        } else {
            document.getElementById("resultado").innerText = "Errado!";
        }

        document.getElementById("pontos").innerText = pontos;
        perguntaAtual++;
        setTimeout(carregarPergunta, 1000);
    }
}

carregarPergunta();

