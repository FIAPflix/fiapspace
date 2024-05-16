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
    // Preenche os campos do resumo com os dados do formulário
    var email = document.getElementById('email').value;
    var sala = document.getElementById('espaco').value;
    var data = document.getElementById('data').value;
    var duracao = document.getElementById('duracao').value;
    var pessoas = document.getElementById('pessoas').value;

    // Atualiza os elementos no resumo
    document.getElementById('resumo-email').textContent = email;
    document.getElementById('resumo-sala').textContent = sala;
    document.getElementById('resumo-data').textContent = data;
    document.getElementById('resumo-duracao').textContent = duracao;
    document.getElementById('resumo-pessoas').textContent = pessoas;
    //mostra a div do resumo
  var resumo = document.getElementById('resumo').style.display = 'block';
}

//callback que Pega o envio do forms
 document.getElementById('formulario-reserva').addEventListener('submit',function(event){
    event.preventDefault(); //previne o envio do padrão

    //chama a função mostrar reserva
    mostrarResumo();
   // document.getElementById('formulario-reserva').reset();
/*
   const reserva = {
    email:email,
    sala:sala,
    data: data,
    duracao: duracao,
    pessoas: pessoas
}
    localStorage.setItem('reserva', JSON.stringify(reserva));*/
})

function salvarFormularioDados() {
    email = document.getElementById('resumo-email').innerText;
    sala = document.getElementById('resumo-sala').innerText;
    data = document.getElementById('resumo-data').innerText;
    duracao = document.getElementById('resumo-duracao').innerText;
    pessoas = document.getElementById('resumo-pessoas').innerText;

    const reserva = {
        email: email,
        sala: sala,
        data: data,
        duracao: duracao,
        pessoas: pessoas
    };

    localStorage.setItem('reserva', JSON.stringify(reserva));
}

/*
$(document).ready(function(){
    $('#formulario-reserva').submit(function (){
        var $this = $( this );

        var tr = '<tr>' +
        '<tr>'+$this.find("input[name='data']").val()+'<td>'+
        '<tr>'+$this.find("input[name='duracao']").val()+'<td>'+
        '<tr>'+$this.find("input[name='email']").val()+'<td>'+
        '<tr>'+$this.find("input[name='espaco']").val()+'<td>'+
        '<tr>'+$this.find("input[name='pessoas']").val()+'<td>'+
        '<tr>'
        $('#dataTable').find('tbody').append(tr);

        return false
    })
})

/*
// Função para enviar os dados do formulário e atualizar a tabela
function postData() {
    // Obter os dados do input
    var inputData = document.getElementById("form2").value;

    // Cria um objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configura a requisição
    xhr.open("POST", "server.js", true); //script de processamento no servidor
    xhr.setRequestHeader("Content-Type", "https://avfvuoogusbewgdoeeuf.supabase.co");

    // Define o callback a ser chamado quando a requisição for concluída
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Se a requisição foi bem-sucedida, atualize a tabela
            updateTable();
        }
    };

    // Envia a requisição com os dados do input
    xhr.send("form2=" + inputData);
}

// Função para atualizar a tabela com os dados do servidor
function updateTable() {
    // Cria um objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configura a requisição
    xhr.open("GET", "home.js", true); // script de obtenção de dados no servidor

    // Define o callback a ser chamado quando a requisição for concluída
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Limpa a tabela
            document.getElementById("dataTable").getElementsByTagName("tbody")[0].innerHTML = "";

            // Adiciona as novas linhas à tabela
            var data = JSON.parse(xhr.responseText);
            var tbody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
            data.forEach(function(item) {
                var row = tbody.insertRow();
                var cell = row.insertCell();
                cell.appendChild(document.createTextNode(item.dados));
            });
        }
    };

    // Envia a requisição para obter os dados da tabela
    xhr.send();
}

// Chama a função para inicializar a tabela com os dados existentes no servidor
updateTable();
//document.getElementById("form2").onsubmit = function salvarFormulario(){}
/*
// Função para adicionar uma reserva à tabela HTML2
function adicionarReservaATabela(email, sala, data, duracao, pessoas) {
    // Seleciona a tabela e seu corpo (tbody)
    var tabela = document.getElementById('dataTable');
    var tbody = tabela.getElementsByTagName('tbody')[0];

    // Cria uma nova linha na tabela
    var novaLinha = tbody.insertRow();

    // Preenche as células da nova linha com os dados capturados
    var celulaNumeroReserva = novaLinha.insertCell(0);
    celulaNumeroReserva.textContent = ''; // Deixe em branco, pois este será preenchido automaticamente ou você pode adicionar um contador de reservas.

    var celulaData = novaLinha.insertCell(1);
    celulaData.textContent = data;

    var celulaDuracao = novaLinha.insertCell(2);
    celulaDuracao.textContent = duracao;

    var celulaEmail = novaLinha.insertCell(3);
    celulaEmail.textContent = email;

    var celulaSala = novaLinha.insertCell(4);
    celulaSala.textContent = sala;

    var celulaPessoas = novaLinha.insertCell(5);
    celulaPessoas.textContent = pessoas;

    var celulaStatus = novaLinha.insertCell(6);
    celulaStatus.textContent = 'Pendente'; // Você pode definir o status padrão aqui.

    var celulaConfirmar = novaLinha.insertCell(7);
    celulaConfirmar.innerHTML = '<button onclick="confirmarAgendamento()">Confirmar</button>'; // Adiciona um botão para confirmar o agendamento.
}

// Função para confirmar o agendamento
function confirmarAgendamento() {
    // Aqui você pode implementar a lógica para confirmar o agendamento, como atualizar o status da reserva na tabela.
}

// Função para filtrar a tabela por e-mail
function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterEmail");
    filter = input.value.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3]; // A coluna de e-mail é a quarta (índice 3)
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
/*
function carregar(){
    $('#email2').value(window.localStorage.getItem('resumo-email'));
    $('#sala2').value(window.localStorage.getItem('resumo-sala'));
    $('#data2').value(window.localStorage.getItem('resumo-data'));
    $('#duracao2').value(window.localStorage.getItem('resumo-duracao'));
    $('#pessoas2').value(window.localStorage.getItem('resumo-pessoas'));
}
*/
//limpar o formulário - não está funcioando ainda - verificar se é a questão do acesso ao elemento 
/*function limparFormulario(){
    document.getElementByID("formulario-reserva").reset() 
}*/
/*
function enviarReserva(){
   document.getElementById('formulario-reserva').addEventListener('submit',function(event){event.preventDefault();
    var email = document.getElementById('email').value;
    var espaco = document.getElementById('espaco').value;
    var espaco = document.getElementById('espaco').value;
    var data = document.getElementById('data').value;
    var duracao = document.getElementById('duracao').value;
    var pessoas = document.getElementById('pessoas').value;


        var formData = {
            email :email,
            espaco : espaco,
            data : data,
            duracao : duracao,
            pessoas: pessoas
        }
        fetch('/agendamento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar dados para agendamento');
            }
            console.alert('Dados enviados com sucesso para agendamento');
            window.location.href = 'agendamentos.html'; // Redireciona para a página "agendamento"
        })
        .catch(error => {
            console.error('Erro ao enviar dados para agendamento:', error.message);
        });    

})
}
/* 
fetch('/agendamento', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Erro ao enviar dados para agendamento');
    }
    console.log('Dados enviados com sucesso para agendamento');
    window.location.href = 'agendamento.html'; // Redireciona para a página "agendamento"
})
.catch(error => {
    console.error('Erro ao enviar dados para agendamento:', error.message);
});
*/
/*
function enviarDadosParaAgendamentos(){

  document.getElementById('formulario-reserva').innerText = dados;
    window.location.hef = 'agendamentos.html'
}
*/


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
//3° - Redimensionar img no "reservas" - ok
//4° - Função confirmar Reserva - resumo da reserva
//5º - Ao selecionar o tipo de local abra um calendário interativo com as datas já reservadas
