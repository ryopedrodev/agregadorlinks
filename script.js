const frases = ["profissionais da saúde", "academias", "comércios", "construção civil", "prestadores de serviços"];

let i = 0; 
let j = 0; 
let isDeleting = false; 
let elemento = document.getElementById("texto-digitado");

function digitar() {
    const fraseAtual = frases[i];

    if (isDeleting) {
        
        elemento.textContent = fraseAtual.substring(0, j - 1);
        j--;
        
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % frases.length; 
        }
    } else {
        
        elemento.textContent = fraseAtual.substring(0, j + 1);
        j++;
        
        if (j === fraseAtual.length) {
            isDeleting = true;
            setTimeout(digitar, 2000); 
            return; 
        }
    }

    
    const velocidade = isDeleting ? 50 : 100;
    setTimeout(digitar, velocidade);
}


digitar();

function verificarHorario() {
    const data = new Date();
    const hora = data.getHours();
    const dia = data.getDay(); 

    const elementoStatus = document.getElementById("status-loja");
    const textoStatus = document.getElementById("texto-status");

    const ehDiaUtil = dia >= 1 && dia <= 5;
    const ehHorarioComercial = hora >= 9 && hora < 17;

    if (ehDiaUtil && ehHorarioComercial) {
        elementoStatus.classList.add("aberto");
        elementoStatus.classList.remove("fechado");
        textoStatus.innerText = "Aberto agora";
    } else {
        elementoStatus.classList.add("fechado");
        elementoStatus.classList.remove("aberto");
        textoStatus.innerText = "Fechado agora • Atendimento às 09h";
    }
}

verificarHorario();


document.getElementById("ano-atual").innerText = new Date().getFullYear();

const anoElement = document.getElementById("ano-atual");
if (anoElement) {
    anoElement.innerText = new Date().getFullYear();
}