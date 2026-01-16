# 🏅 Projeto Notas dos Atletas

## 📋 Resumo do Projeto

Crie uma aplicação capaz de receber o nome e as notas de um atleta, calcular a média e apresentar ao usuário.

---

## 📖 Introdução

Em uma determinada competição de ginástica artística, vários atletas realizam apresentações para uma banca composta por cinco jurados. Cada jurado é responsável por avaliar um critério em específico, sendo eles:

- Tempo de duração da apresentação  
- Originalidade da coreografia  
- Postura do atleta  
- Dificuldade das acrobacias  
- Sincronismo  

A competição em questão possui a seguinte regra de avaliação:

- Cada jurado pode fornecer uma nota de **1 (um) a 10 (dez)**;
- A média é calculada com base nas **três notas do meio**, desconsiderando a maior e a menor nota.

O organizador da competição contratou sua equipe para criar uma aplicação capaz de receber o nome e as notas dos atletas e realizar o devido cálculo.  
Você foi o encarregado de criar a solução utilizando a linguagem **JavaScript**.

---

## 📌 Funcionalidades

- Armazena uma lista de atletas e suas respectivas notas.
- Ordena as notas de cada atleta.
- Remove automaticamente:
  - A menor nota.
  - A maior nota.
- Calcula a média apenas com as notas restantes.
- Exibe no console:
  - Nome do atleta.
  - Notas obtidas.
  - Média válida.

---

## 🧠 Lógica do Cálculo

1. Recebe um array de notas.
2. Ordena as notas em ordem crescente.
3. Remove a primeira nota (menor).
4. Remove a última nota (maior).
5. Soma as notas restantes.
6. Divide pela quantidade de notas válidas.
7. Retorna a média formatada com 6 casas decimais.

---

## 🚀 Tecnologias Utilizadas

- JavaScript (ES6+)
  - Classes
  - Métodos
  - Arrays
  - `sort()`, `shift()`, `pop()`, `reduce()`

---

## ▶️ Como Executar o Projeto

1. Crie um arquivo chamado:
   ```bash
   notas-atletas.js

## 🎯 Objetivo Educacional

Este projeto é ideal para iniciantes que desejam praticar:

- Programação Orientada a Objetos em JavaScript  
- Manipulação de arrays  
- Lógica de negócios aplicada a um problema real  
- Organização de código  
- Saída formatada no console  

---

## ✍️ Autor

**Maílson Dias**  
Técnico em Análise e Desenvolvimento de Software - SENAI

