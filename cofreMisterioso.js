const cofre1 = document.getElementById("cofre1");
const cofre2 = document.getElementById("cofre2");
const cofre3 = document.getElementById("cofre3");

const arena = document.getElementById("arena");
const mensagem = document.getElementById("mensagem");

let tentativa = 0;
cofre1.addEventListener("mousedown", function() {
    mensagem.textContent = "Você abriu o Cofre 1!";
});


cofre2.addEventListener("mousedown", function() {
    mensagem.textContent = "Você abriu o Cofre 2!";
});

cofre3.addEventListener("mousedown", function() {
    mensagem.textContent = "Você abriu o Cofre 3!";
});

const cofreSelecionado = Math.floor(Math.random() * 3) + 1;
if (cofreSelecionado === 1) {
    cofre1.addEventListener("click", function() {
        mensagem.textContent = "Parabéns! Você encontrou o tesouro no Cofre 1!";
    });
} else if (cofreSelecionado === 2) {
    cofre2.addEventListener("click", function() {
        mensagem.textContent = "Parabéns! Você encontrou o tesouro no Cofre 2!";
    });
} else {
    cofre3.addEventListener("click", function() {
        mensagem.textContent = "Parabéns! Você encontrou o tesouro no Cofre 3!";
    });
}

