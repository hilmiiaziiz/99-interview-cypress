/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

  
it('Verify Heading Tittle', () =>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevent from failing the test
      });
      
cy.visit('https://www.99.co/singapore')
cy.contains('Featured projects').should('exist')
cy.contains('Popular projects').should('exist')
cy.contains('Find your property value instantly').should('exist')
cy.contains('Listings with videos').should('exist')
cy.contains('Popular listings').should('exist')
cy.contains('Featured stories').should('exist')
cy.contains('Listings found only on 99').should('exist')
cy.contains('Latest New Launches').should('exist')
cy.contains('Explore 99.co').should('exist')
})
