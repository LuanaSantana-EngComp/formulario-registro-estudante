describe('Formulário de registro', () => {
  beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Deve preencher o Formulário de Registro de Estudante com dados corretos', () => {
    cy.get('#firstName').type('Luana');
    cy.get('#lastName').type('Santana');
    cy.get('#userEmail').type('luanasantana.engcompqa@gmail.com');

  // Selecionar gênero (radio)
       cy.get('input[type="radio"][value="Female"]').check({ force: true }); 
       // Feminino//cy.get('input[type="radio"][value="Male"]').check({ force: true }); // Masculino
       //cy.get('input[type="radio"][value="Other"]').check({ force: true }); // Outros

  // Preencher telefone (10 digitos)
      cy.get('#userNumber').type('9685741236');

  // Selecionar a data de nascimento
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__year-select').select('1994'); // Ano
      cy.get('.react-datepicker__month-select').select('June'); // Mês
      cy.get('.react-datepicker__day--007:not(.react-datepicker__day--outside-month)').click(); // Dia

  //Assunto
      cy.get('#subjectsInput').type('Computer Science{enter}');

  //Hobbies
      cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
      cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading
      cy.get('label[for="hobbies-checkbox-3"]').click(); // Music

  // Upload de arquivo (foto)
  const filePath = 'FOTO.jpg'; // Coloque esse arquivo na pasta cypress/fixtures
      cy.get('input[type="file"]').attachFile(filePath);

  //Endereço atual
      cy.get('#currentAddress').type('Rua da Orquestra, 123, Guaratiba, RJ');

  //Dropdowns de Estado e Cidade
      cy.get('#state').click(); // Abre o dropdown de estado
      cy.contains('div', 'NCR').click(); // Seleciona a opção "NCR"
      cy.get('#city').click(); // Abre o dropdown de cidade
      cy.contains('div', 'Delhi').click(); // Seleciona a cidade "Delhi"

  // Enviar o formulário
      cy.get('#submit').click();

  // Verificar mensagem de sucesso
    cy.contains('Thanks for submitting the form').should('be.visible');
    cy.wait(5000);
    
  //Fechar
    cy.get('#closeLargeModal').click({ force: true });  
  });
});