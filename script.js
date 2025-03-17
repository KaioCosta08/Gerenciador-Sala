// Seleciona todos os botões e mensagens
const botoesDisponivel = document.querySelectorAll('.disponivel');
const botoesIndisponivel = document.querySelectorAll('.indisponivel');
const botoesEmUso = document.querySelectorAll('.emUso');

const mensagensDisponivel = document.querySelectorAll('.msgDisponivel');
const mensagensIndisponivel = document.querySelectorAll('.msgIndisponivel');
const mensagensEmUso = document.querySelectorAll('.msgEmUso');

//Função no qual vai esconder as mensagens

function esconderMsg (index) {
    mensagensDisponivel[index].style.display = "none"
    mensagensIndisponivel[index].style.display = "none"
    mensagensEmUso[index].style.display = "none"
}

// Adicionando evento ao botão "Disponivel"
botoesDisponivel.forEach((item, index) => {
    item.addEventListener('click', ()=> {
        if(mensagensDisponivel[index].style.display === "block") {
            mensagensDisponivel[index].style.display = "none"; // Esconde a mensagem
        } else {
            esconderMsg(index); // Esconde todas as mensagens
            mensagensDisponivel[index].textContent = "Sala Disponível";
            mensagensDisponivel[index].style.display = "block"; // Exibe a mensagem
        }
    })
})

// Adicionando evento ao botão "Indisponivel"
botoesIndisponivel.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Verifica se a mensagem já está visível
        if (mensagensIndisponivel[index].style.display === "block") {
            mensagensIndisponivel[index].style.display = "none"; // Esconde a mensagem
        } else {
            esconderMsg(index); // Esconde todas as mensagens
            mensagensIndisponivel[index].textContent = "Sala em Manutenção";
            mensagensIndisponivel[index].style.display = "block"; // Exibe a mensagem
        }
    });
});

// Adicionando evento ao botão "Em uso"
botoesEmUso.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Verifica se a mensagem já está visível
        if (mensagensEmUso[index].style.display === "block") {
            mensagensEmUso[index].style.display = "none"; // Esconde a mensagem
        } else {
            esconderMsg(index); // Esconde todas as mensagens
            mensagensEmUso[index].textContent = "Sala está sendo usada por ....";
            mensagensEmUso[index].style.display = "block"; // Exibe a mensagem
        }
    });
});