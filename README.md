# VerificadorNotas - FIAP

Aplicativo React Native para avaliação de notas e frequência de alunos conforme as regras acadêmicas da FIAP.

## Estrutura do Projeto

# FIAP Student Grade Evaluation App

Este aplicativo React Native permite a inserção e validação das notas de um aluno, considerando também o número de faltas. O app avalia se o aluno foi aprovado ou reprovado com base nas regras acadêmicas da FIAP.

## Funcionalidades

- Inserção de três notas e número de faltas
- Validação de notas (apenas números com até duas casas decimais)
- Cálculo da média considerando as duas melhores notas
- Verificação de aprovação/reprovação por nota ou falta
- Reset de todos os campos ao clicar no logo da FIAP

## Regras Implementadas

- Máximo de faltas permitidas: 5
- Nota mínima para aprovação: 6.0
- Cálculo da média: considera as duas melhores notas entre as três

## Instruções para Execução

### Pré-requisitos

- Node.js
- npm ou yarn
- Expo CLI

### Instalação

1. Clone o repositório
2. Instale as dependências:

