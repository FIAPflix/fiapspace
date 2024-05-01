//Botão na página 'reservas' para voltar à 'index' 
function voltarParaPaginaInicial() {
    window.location.href = "index.html";
}
//Botão em 'index' para direcionar à página'reservas'
function irParaReservas(){
    window.location.href = "reserva.html";
}

// Função para exibir a imagem do espaço selecionado
function exibirImagemEspaco(selectEspaco) {
    var imagemEspaco = document.getElementById('imagemEspaco');

        if (selectEspaco === 'Festas') {
            imagemEspaco.src = 'imagem/salao de festas.png';
        } else if (selectEspaco === 'Reuniao') {
            imagemEspaco.src = 'imagem/sala_de_reuniao.jpg';
        } else if (selectEspaco === 'Poliesportiva') {
            imagemEspaco.src = 'imagem/quadra_poliesportiva.png';
        } else {
        // Se nenhum espaço for selecionado
        imagemEspaco.style.display = 'none'; // Oculta a imagem
        alert('Selecione um espaço para prosseguir com a reserva');
        return; // Sai da função
    }

    // Exibe a imagem
    imagemEspaco.style.display = 'block';
  }

  // Adicionando um ouvinte de evento 'change' ao elemento <select>
document.getElementById('espaco').addEventListener('change', function() {
    // Obtendo o valor selecionado
    let selectEspaco = this.value;

    // Criando e resolvendo a Promise com base no valor selecionado
    const mostraImagemEspaco = new Promise((resolve, reject) => {
      // Resolvendo com o valor selecionado
      resolve(selectEspaco);
    });

    // Lidando com a Promise resolvida
    mostraImagemEspaco.then((selectEspaco) => {
      // Chamando a função para exibir a imagem com base no valor selecionado
      exibirImagemEspaco(selectEspaco);
    });
  });

//Função pra mostrar o resumo da reserva
function mostrarResumo(){
    //vou preencher os campos do resumo com os dados do forms
    document.getElementById('resumo-email').textContent = document.getElementById('email')//.value;
    document.getElementById('resumo-sala').textContent = document.getElementById('sala')//.value;//.options[document.getElementById('espaco').selectedIndex].text;
    document.getElementById('resumo-data').textContent = document.getElementById('data')//.value;
    document.getElementById('resumo-duracao').textContent = document.getElementById('duracao')//.value;
    document.getElementById('resumo-pessoas').textContent = document.getElementById('pessoas')//.value;

    //mostra a div do resumo
    document.getElementById('resumo').style.display = 'block';
}

//callback que Pega o envio do forms
document.getElementById('formulario-reserva').addEventListener('submit',function(event){
    event.preventDefault(); //previne o envio do padrão

    //chama a função mostrar reserva
    mostrarReserva();
})


/* Primeiro Raciocínio
//Exibir a imagem do tipo de espaço selecionado
//add evento de escutar a mudança no elemento select

document.getElementById('espaco').addEventListener('change', function() { 
    //capturar o valor selecionado no select
    let selectEspaco = this.value;
    //referencio minha tag de imagem
    var imagemEspaco = document.getElementById('imagemEspaco')
    //Crio o objeto da Promise com base no valor selecionado
    const mostraImagemEspaco = new Promise((resolve, reject)=>{
        
        if(selectEspaco === '1' ){
            resolve(
                imagemEspaco.src = 'imagem/salao de festas.png'
            );
        }else if(selectEspaco === '2'){
            resolve(
                imagemEspaco.src = 'imagem/sala_de_reuniao.jpg'
            );
        }else if(selectEspaco === '3'){
            resolve(
                imagemEspaco.src = 'imagem/Quadra_Poliesportiva.png'
            );
        }else{
            
            reject(
                imagemEspaco.style.display = 'none',
                alert('selecione um espaço para prosseguir com a reserva')
            )
        }
})
//Instancio o objeto
mostraImagemEspaco.then((mensagem) => {
    (mensagem);
}).catch ((error) =>{
    alert(error);
})
})
*/

//Implementar 
//1° - Quando selecionar um local -> mostre a imagem do local - ok
//2° - neste local puxar os tipos de espaços disponíveis - ok
//3° - Redimensionar img no "reservas"
//4° - Função confirmar Reserva - resumo da reserva
//5º - Ao selecionar o tipo de local abra um calendário interativo com as datas já reservadas
 
//atributo do form que envia os dados para o db do ARIEL
//action="enviar-reserva" method="post"