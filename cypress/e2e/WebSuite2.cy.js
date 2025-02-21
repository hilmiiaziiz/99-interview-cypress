/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

beforeEach(() => {
  cy.visit('https://www.99.co/singapore')

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Prevent from failing the test
  });
  
});
  

it('Verify directing to popular projects 1', () =>{
  
  cy.contains('Parktown Residence').click();
  cy.contains('Parktown Residence').should('exist')
  cy.url().should('include', '/parktown-residence') // Check the path
  
  
})
  it('Verify directing to opular projects 2', () =>{
  cy.contains('One Sophia / The Collective At One Sophia').click();
  cy.contains('One Sophia / The Collective At One Sophia').should('exist')
  cy.url().should('include', '/one-sophia-the-collective-at-one-sophia') // Check the path
  
})
  it('Verify directing to popular projects 3', () =>{
  cy.contains('Bloomsbury Residences').click();
  cy.contains('Bloomsbury Residences').should('exist')
  cy.url().should('include', '/bloomsbury-residences') // Check the path

});