// As frases que vão alternar
const frases = ["profissionais da saúde", "academias", "comércios", "construção civil", "prestadores de serviços"];

let i = 0; // Índice da frase atual
let j = 0; // Índice da letra atual
let isDeleting = false; // Se está apagando ou escrevendo
let elemento = document.getElementById("texto-digitado");

function digitar() {
    const fraseAtual = frases[i];

    if (isDeleting) {
        // APAGANDO
        elemento.textContent = fraseAtual.substring(0, j - 1);
        j--;
        // Se acabou de apagar tudo, passa para a próxima frase e começa a escrever
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % frases.length; // Passa para a próxima (ou volta para a primeira)
        }
    } else {
        // ESCREVENDO
        elemento.textContent = fraseAtual.substring(0, j + 1);
        j++;
        // Se acabou de escrever a frase inteira, espera um pouco e começa a apagar
        if (j === fraseAtual.length) {
            isDeleting = true;
            setTimeout(digitar, 2000); // Pausa de 2 segundos antes de apagar (LEIA AQUI)
            return; // Sai da função para respeitar o tempo
        }
    }

    // Velocidade: Se estiver apagando é mais rápido (50ms), escrevendo é normal (100ms)
    const velocidade = isDeleting ? 50 : 100;
    setTimeout(digitar, velocidade);
}

// Inicia o efeito
digitar();