/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3030/')
    })
    it('click the btn 3 times', () => {
        cy.get('#count').should('be.visible')
        cy.get('#btn').click() 
        cy.get('#btn').click() 
        cy.get('#btn').click() 
        cy.get("#count").should('contain', '3')
    })
})
  