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


//Bloco de Script do Modal
function modal() {
    const containerModal = window.document.querySelector('.modalConfig');  
    const linkAbrir = window.document.querySelector('.configCmdBar');
    const buttonFecharModal = window.document.querySelector('.buttonFecharModalConfig');

    linkAbrir.addEventListener('click', (event)=> {
        event.preventDefault();
        containerModal.classList.add('ativo')
    })
    buttonFecharModal.addEventListener('click', (event)=> {
        event.preventDefault();
        containerModal.classList.remove('ativo')
    })
}
modal();

//Bloco de Script deixando o sistema escuro ou claro
function modoDeCor() {
    const bodi = document.querySelector('#bodySalas');
    const fundoEscuro = document.querySelector('.buttonDark');
    const fundoClaro = document.querySelector('.buttonLight');

    fundoEscuro.addEventListener('click', (event) => {
        event.preventDefault();
        bodi.classList.remove('claro');
        bodi.classList.add('escuro');
    });

    fundoClaro.addEventListener('click', (event) => {
        event.preventDefault(); 
        bodi.classList.remove('escuro');
        bodi.classList.add('claro');
    });
}
modoDeCor();