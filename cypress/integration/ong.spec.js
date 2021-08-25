/// <reference types="cypress"/>

describe('Ongs', () => {
    it.skip('devem poder realizar um cadastro', () => {
        cy.visit('https://seubarriga.wcaquino.me/cadastro');
        // cy.get - busca um elemento
        // .type - insere um texto
        cy.get('#nome').type('usuário teste');
        cy.get('#email').type('teste'+Math.random()+'@teste.com.br');
        cy.get('#senha').type('123');

        cy.get('.btn').click();

        cy.get('.alert').should('contain','Usuário inserido com sucesso');

    });

    it('devem poder realizar um login no sistema', () => {
        cy.visit('https://seubarriga.wcaquino.me/login');

        cy.get('[id=email]').type('padilhatestes@gmail.com');
        cy.get('[id=senha]').type('123');

        cy.get('.btn').click();

        cy.get('.alert').should('contain','DIEGO');
    }); 
});