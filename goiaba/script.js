<button id="meuBotao" disabled>Clique-me</button>
    const botao = document.getElementById('meuBotao');
    botao.addEventListener('click', () => {
        // Lógica para verificar se o botão deve ser ativado ou desativado
        if (/* sua condição aqui */) {
            botao.classList.remove('desativado');
        } else {
            botao.classList.add('desativado');
        }
    })
