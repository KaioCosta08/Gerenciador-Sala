// Seleciona todos os botões e mensagens
const botoesDisponivel = document.querySelectorAll('.disponivel');
const botoesIndisponivel = document.querySelectorAll('.indisponivel');
const botoesEmUso = document.querySelectorAll('.emUso');

const mensagensDisponivel = document.querySelectorAll('.msgDisponivel');
const mensagensIndisponivel = document.querySelectorAll('.msgIndisponivel');
const mensagensEmUso = document.querySelectorAll('.msgEmUso');

//Função no qual vai esconder as mensagens

function esconderMsg(index) {
    mensagensDisponivel[index].style.display = "none"
    mensagensIndisponivel[index].style.display = "none"
    mensagensEmUso[index].style.display = "none"
}

// Adicionando evento ao botão "Disponivel"
botoesDisponivel.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (mensagensDisponivel[index].style.display === "block") {
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

// Aviso sobre as Configurações
function aviso() {
    let configSystem = window.document.querySelectorAll('.configCmdBar');

    configSystem.forEach((aviso) => {
        aviso.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Sistema de configurações em manutenção.')
        })
    })
}
aviso();


// Alert nos pedidos de sala
function pedidosDeSalas() {
    let butaoAceitar = window.document.querySelectorAll('.buttonAceitarPedido');
    let butaoRecusar = window.document.querySelectorAll('.buttonRecusarPedido');
    // let liDoPedidoDeSala = window.document.querySelectorAll('.pedidosDeSala');

    // Bloco de script do button aceitar
    butaoAceitar.forEach((itemAceitar) => {
        itemAceitar.addEventListener('click', (event) => {
            event.preventDefault()
            alert('Esse pedido foi aceito.')
            
        })
    })

    //Bloco de script button recusar
    butaoRecusar.forEach((itemRecusar)=> {
        itemRecusar.addEventListener('click', (event)=> {
            event.preventDefault()
            alert("Esse pedido foi recusado")
        })
    })
}
pedidosDeSalas();


function confirmacaoDePresenca() {
    let buttonSim = window.document.querySelectorAll('.buttonSimLoc')
    let buttonTalvez = window.document.querySelectorAll('.buttonTalvezLoc')
    let buttonNao = window.document.querySelectorAll('.buttonNaoLoc')

    buttonSim.forEach((item) => {
        item.addEventListener('click', (event)=> {
            event.preventDefault();
            alert('Boa aula!')
        })
    })

    buttonTalvez.forEach((item2) =>{
        item2.addEventListener('click', (event)=> {
            event.preventDefault();
            alert('Aguardaremos na portaria!')
        })
    })

    buttonNao.forEach((item3) =>{
        item3.addEventListener('click', (event)=> {
            event.preventDefault();
            alert('Que pena! Envie um relatorio informando o motivo.')
        })
    })
}
confirmacaoDePresenca();