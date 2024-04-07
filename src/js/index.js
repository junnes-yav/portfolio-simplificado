/* 
 objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos
 que estão escondidos no html

 Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário
 clicar em cima dele

 Passo 2 - idedntificar o clique no botão 

 Passo 3 - adicionar a classe "ativo" nos projetos escondidos

 Objetivo 2 - esconder o botão de mostrar mais
 Passo 1 -  o botão e esconder ele 
*/

//objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos 
//que estão escondidos no html

 //Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário
 //clicar em cima dele

const botãoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosinativos = document.querySelectorAll('.projeto:not(.ativo)');

console.log(projetosinativos);

botãoMostrarProjetos.addEventListener("click", () => {
    //Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();
    //Objetivo 2 - esconder o botão de mostrar mais
    //Passo 1 -  o botão e esconder ele 
    esconderBotao();


});

function esconderBotao() {
    botãoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosinativos.forEach(projetoinativo => {
        projetoinativo.classList.add('ativo');
    });
}

