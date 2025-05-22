
# 🧪 Teste Automatizado - Formulário de Registro | Demo QA

Este repositório contém um teste automatizado utilizando **Cypress** para validar o correto preenchimento e envio do formulário de registro de estudante disponível no site [Demo QA](https://demoqa.com/automation-practice-form).

## 📋 Descrição do Teste

O teste simula o preenchimento completo do formulário com dados válidos, incluindo campos de texto, radio buttons, checkboxes, upload de arquivo, seleção de data e dropdowns. Ao final, valida a exibição da mensagem de sucesso e fecha o modal de confirmação.

### Etapas realizadas:

- Acessa a página do formulário.
- Preenche os campos:
  - **Nome** e **sobrenome**
  - **E-mail**
  - **Gênero** (radio button)
  - **Telefone**
  - **Escolha da data de nascimento via calendário**
  - **Disciplina** (ex: Computer Science)
  - **Hobbies** (checkboxes)
  - **Upload de arquivo (imagem)**
  - **Endereço atual**
  - **Seleção de estado e cidade em dropdowns**
- Submete o formulário.
- Valida a mensagem: **"Thanks for submitting the form"**.
- Fecha o modal de confirmação.

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes E2E (End-to-End)
- JavaScript
- Node.js

## ✅ Pré-requisitos

Antes de rodar o teste, certifique-se de ter:

- Node.js instalado
- Cypress instalado no projeto
- A imagem `foto-de-por-do-sol.jpeg` adicionada à pasta `cypress/fixtures`

## 🔧 Como Executar

1. Instale as dependências do projeto (caso ainda não tenha feito):

```bash
npm install
```

2. Execute o Cypress:

```bash
npx cypress open
```
3. Plugin necessário para o upload de arquivo:

**cypress-file-upload** para upload de arquivos (certifique-se de configurar este plugin se necessário).

4. Na interface do Cypress, selecione o arquivo `Formulario-dadoscorreto.cy.js` para rodar o teste.

## 📝 Autora

**Luana Santana**  
Engenharia da Computação | Qualidade de Software (QA)
