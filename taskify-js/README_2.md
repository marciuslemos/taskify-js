# Taskify - Gerenciador de Tarefas

## Índice

- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Componentes do Projeto](#componentes-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Alterações da Primeira Versão](#alterações-da-primeira-versão)
- [Dificuldades e Soluções](#dificuldades-e-soluções)
- [Considerações Finais](#considerações-finais)

## Introdução

Taskify é um gerenciador de tarefas desenvolvido em React, utilizando Bootstrap para o design e Sass para estilização. O projeto permite a criação, visualização e gerenciamento de tarefas com suporte a lembretes. A segunda versão aprimora a navegação entre páginas e a manipulação de tarefas.

## Pré-requisitos

- Node.js
- npm ou yarn
- Conhecimentos básicos em React, HTML, CSS e JavaScript

## Configuração do Ambiente

1. **Instalação do Node.js e npm**:
   - Certifique-se de ter o Node.js instalado. Verifique com:
      
     node -v
     npm -v
     ```
   - Baixe e instale a partir do [site oficial](https://nodejs.org/) se necessário.

2. **Criação do Projeto React**:
   - Inicie o projeto com:
     
     npx create-react-app taskify
     cd taskify
     ```

3. **Instalação de Dependências**:

   - Instale as dependências adicionais:
     
     npm install sass react-router-dom
     ```

## Estrutura do Projeto

A estrutura do projeto foi organizada para suportar navegação entre páginas e gerenciamento de estado de tarefas.

taskify/
├── public/
├── src/
│ ├── componentes/
│ ├── paginas/
│ ├── App.js
│ ├── App.scss
│ └── index.js
└── package.json


## Componentes do Projeto

- **App.js**: Configura as rotas e integra os componentes principais.
- **Cabecalho**: Componente para o cabeçalho da aplicação, com opções de navegação.
- **Botao**: Componente reutilizável para botões.
- **CadastrarTarefa**: Formulário para adicionar novas tarefas.
- **Cartao**: Exibe as tarefas com opções de edição e remoção.
- **Rodape**: Componente para o rodapé da aplicação.
- **Tarefas**: Renderiza a lista de tarefas armazenadas.

## Funcionalidades

- **Adicionar Tarefa**: Permite adicionar novas tarefas com título, descrição, data/hora e lembrete.
- **Exibir Tarefas**: Mostra todas as tarefas cadastradas em forma de cartões.
- **Remover Tarefa**: Opção para remover tarefas da lista.
- **Navegação Entre Páginas**: Implementação de páginas de Login, Home e Adicionar Tarefa.

## Alterações da Primeira Versão

1. **Navegação Entre Páginas**: Adicionada navegação usando `react-router-dom`, com páginas separadas para Login, Home e Adicionar Tarefa.
2. **Armazenamento e Exibição de Tarefas**: Implementação de armazenamento no `sessionStorage` e renderização das tarefas usando componentes dedicados.
3. **Melhorias no Layout**: Ajustes no layout com Bootstrap para melhor organização e responsividade, e inclusão de Sass para estilização personalizada.

## Dificuldades e Soluções

1. **Navegação entre Páginas**:
   - **Problema**: Implementar navegação fluida entre páginas.
   - **Solução**: Utilização do `react-router-dom` para gerenciamento das rotas.

2. **Gerenciamento de Estado**:
   - **Problema**: Persistir e exibir dados de tarefas corretamente.
   - **Solução**: Uso de `sessionStorage` para armazenamento temporário e gerenciamento de estado.

3. **Estilização e Layout**:
   - **Problema**: Garantir que os componentes estivessem alinhados e visualmente agradáveis.
   - **Solução**: Aplicação de classes de utilitários do Bootstrap e estilização adicional com Sass.

## Considerações Finais

O projeto "Taskify" evoluiu para incluir uma navegação mais robusta e uma gestão mais eficiente das tarefas. Futuras melhorias podem incluir a adição de autenticação de usuários e persistência de dados em banco de dados. Este projeto continua sendo uma excelente oportunidade para aplicar e expandir conhecimentos em React, gerenciamento de estado e estilização com Bootstrap e Sass.

Essa versão do README.md destaca as principais mudanças e adições feitas na segunda versão do projeto, facilitando a compreensão das melhorias e novas funcionalidades.