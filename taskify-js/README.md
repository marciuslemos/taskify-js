Taskify - Gerenciador de Tarefas

Índice
Introdução
Pré-requisitos
Configuração do Ambiente
Estrutura do Projeto
Componentes do Projeto
Funcionalidades
Dificuldades e Soluções
Considerações Finais


Introdução

Taskify é um gerenciador de tarefas simples desenvolvido em React, utilizando Bootstrap para o design e Sass para estilização. O objetivo do projeto é permitir a criação, edição e remoção de tarefas, bem como a definição de lembretes.

Pré-requisitos
Node.js
npm ou yarn
Conhecimentos básicos em React, HTML, CSS e JavaScript
Configuração do Ambiente
Instalação do Node.js e npm
Certifique-se de ter o Node.js instalado em sua máquina. Para verificar, execute:


node -v
npm -v

Se não estiver instalado, baixe e instale a partir do site oficial.

Criação do Projeto React
Para iniciar o projeto, use o comando create-react-app:


npx create-react-app taskify
cd taskify
Instalação de Dependências
Instale as seguintes dependências adicionais:

npm i sass react-router-dom

Estrutura do Projeto

A estrutura inicial do projeto é a padrão do create-react-app. Alguns arquivos e pastas principais:


taskify/
├── public/
├── src/
│   ├── App.js
│   ├── App.scss
│   ├── componentes/
│   ├── index.js
└── package.json

Componentes do Projeto

index.html
Define a estrutura básica da aplicação e inclui o Bootstrap.

App.js
Componente principal que reúne todos os componentes da aplicação.

Componentes:

Botao: Componente reutilizável para botões.
Cabecalho: Componente para o cabeçalho da aplicação.
CadastrarTarefa: Formulário para adicionar novas tarefas.
Cartao: Exibe as tarefas com opções de edição e remoção.
Inputs: Campos de entrada do formulário de cadastro de tarefas.
Rodape: Componente para o rodapé da aplicação.
Tarefas: Renderiza os cartões de tarefas.

Funcionalidades
Adicionar Tarefa: Permite ao usuário adicionar uma nova tarefa com título, descrição, data/hora e lembrete.
Exibir Tarefas: Mostra todas as tarefas cadastradas em forma de cartões.
Remover Tarefa: Opção para remover tarefas da lista.
Lembrete: Tarefas com lembretes são destacadas.


Dificuldades e Soluções
1. Alinhamento dos Componentes
Problema: Os componentes não estavam alinhados corretamente na página principal.

Solução: Utilização de classes de utilitários do Bootstrap, como container, row, e col, para organizar o layout.

2. Apagar Tarefas
Problema: O botão de apagar (X) estava posicionado incorretamente e gerava erros ao ser clicado.

Solução: Ajuste no layout para posicionar corretamente o botão e adição da função onDelete corretamente nos componentes.

3. Uso do sessionStorage
Problema: Salvar as tarefas no sessionStorage e exibí-las corretamente.

Solução: Implementação de funções para salvar dados do sessionStorage

4. Manipulação de Data e Hora
Problema: Configurar entrada de data e hora no mesmo input.

Solução: Utilização do tipo datetime-local para capturar ambos os valores.

Considerações Finais
O projeto "Taskify" é uma implementação básica de um gerenciador de tarefas. Futuras melhorias podem incluir persistência de dados em um banco de dados, autenticação de usuário e adição de categorias para tarefas. Este projeto serviu como um excelente exercício para aplicar conhecimentos em React, aprendidos em sala com o professor Alexandre, gerenciamento de estado, e estilização com Bootstrap e Sass.