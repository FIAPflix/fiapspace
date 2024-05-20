# Tech Challenge - FIAPSpace
O Tech Challenge - FIAPSpace é um projeto destinado a conclusão de curso da pós graduação Coding & Tech Journey From User to Creator.
Neste quarto módulo que compõem a grade do curso, desenvolveremos um sistema de gerenciamento de espaços compartilhados utilizando no front-end as tecnologias JavaScript e Booststrap, no back-end utilizamos a plataforma Supabase para produção de API's e gerenciamento de banco de dados. Desta forma, criamos um dashboard simples e intuitivo.  

## Funcionalidades
Gestão de Espaços: adicionar, alterar, deletar e consultar registros considerando que o espaço tenha um nome e uma capacidade máxima;
Gestão de Reservas: adicionar, alterar, deletar e consultar, reservas por espaço, por data e por hora;
Tempo mínimo de reserva: 1h;
Reservas não se sobrepõem;
Não há recorrência nas reservas.

### Pré-requisitos
[Node.js](https://nodejs.org/en/download) Instalado na máquina local ou em um servidor.

npm Supabase:
`npm instalar @supabase/supabase-js`

npm EJS:
`$ npm install ejs`

### Instalação
1. Clone ou faça o download deste [repositório](https://github.com/FIAPflix/fiapspace) ou acesse o diretório do kit de arquivos baixados referentes à este projeto.
2. Instale os pacotes pré-requisitados;
3. Acesse o Dashboard no navegador para utilizar o FIAPSpace através do localhost.

## Utilização
Após as devidas instalações npm, acesse o arquivo index.html localizado no diretório de views.
Através desta página, você poderá:
1. Visualizar o que é FIAPSpace;
2. Visualizar os espaços disponíveis para reserva;
3. Visualizar os 'benefícios' de escolher nossos espaços;
4. Informações de contato com a organização FIAPSpace
5. Utilizar o menu nav-bar para navegação entre divisões da página e demais páginas do projeto

Ao clicar em "Reservas" no menu nav-bar, ou "Reserve seu momento" na home, você será redirecionado(a) à página de coleta de dados para reserva.
Nesta página, identificada como reserva.html, você poderá:
1. Utilizar o menu nav-bar para navegação entre divisões da página e demais páginas do projeto;
2. Inserir informações essenciais para realizar sua reserva como 'email','tipo de espaço','disponibilidade','duração'e 'quantidade de pessoas';
3. Ao inserir todas as informações essenciais, você visualizará uma imagem do local selecionado, bem como um resumo de sua reserva;
4. Você poderá salvar sua reserva ou refazê-la;
5. Nesta página também há informações de contato com a organização FIAPSpace

Ao clicar em "Salvar Reserva", no resumo da reserva você será redirecionado(a) à página de tabela de reservas.
Nesta página, identificada como agendamentos.html, você poderá:
1. Visualizar os dados da sua reserva pré-selecionada, como menção ao status;
2. Clicar em confirmar sua reserva para efetivá-la.
3. Nesta página também há informações de contato com a organização FIAPSpace


## Notas dos Desenvolvedores
Utilizamos as tecnologias acima descritas afim de desenvolver e entregar o desafio pré definido. A proposta inicial era desenvolver um modelo de arquitetura MVC em JavaScript, para lidar com os CRUDs necessários ao projeto. Desenvolver um database no Postgres e APIs no Supabese. 
Encontramos dificuldade em alocar as funcionalidades de acordo com sua respectiva proposta de model e controller. 
Entendemos, durante o desenvolvimento, que não seria necessário utilizar um banco de dados estruturado para lidar com essa aplicação, então decidimos armazenar as informações no Supabase.
A entrega de algumas funcionalidades, tais como "reservas que não se sobrepõem" foi uma dificuldade latente neste desenvolvimento. 


## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com melhorias, correções de bugs ou novas funcionalidades.

## Contato
Para mais informações, entre em contato através do email: suporte.techchallenge@gmail.com

© [2024] | Desenvolvido por [Ariel Fortes] e [Bruna Baria](https://github.com/BrunaBaria) |