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
  
it('Verify page on rent feature', () =>{
      cy.contains('label', 'Rent').click();
      cy.contains('Price range').should('exist')
      cy.contains('Property type').should('exist')
      cy.contains('Bedrooms').should('exist')
      cy.contains('Rental type').should('exist')
})

it('Verify page on buy feature', () =>{
      cy.contains('label','Buy').click();
      cy.contains('Price range').should('exist')
      cy.contains('Property type').should('exist')
      cy.contains('Bedrooms').should('exist')

})


it('Filter page on rent feature', () =>{
  cy.contains('label','Rent').click({force: true});
  cy.contains('span','Price range').click({force: true});
  cy.contains('li','$0').click({force: true});
  cy.contains('li','Any Price').click({force: true});
  cy.contains('Any Price').should('exist')
  
  cy.contains('span','Property type').click({force: true});
  cy.contains('span','Condo').click({force: true});

  cy.contains('span','Bedrooms').click({force: true});
  cy.contains('span','Studio').click({force: true});

  cy.get('[data-cy="search"]').click({force: true});
  cy.contains('Condo').should('exist')
  cy.contains('Studio').should('exist')

})

it('Filter page on buy feature', () =>{
  cy.contains('label','Buy').click();
  cy.contains('span','Price range').click({force: true});
  cy.contains('li','$0').click({force: true});
  cy.contains('li','Any Price').click({force: true});
  cy.contains('Any Price').should('exist')
  
  cy.contains('span','Property type').click({force: true});
  cy.contains('span','Condo').click({force: true});

  cy.contains('span','Bedrooms').click({force: true});
  cy.contains('span','Studio').click({force: true});

  cy.get('[data-cy="search"]').click({force: true});
  cy.contains('Condo').should('exist')
  cy.contains('Studio').should('exist')

})

it('Negative scenario when looking for the unavailable unit', () =>{
  cy.contains('label','Buy').click();
  cy.contains('span','Price range').click({force: true});
  cy.contains('li','$0').click({force: true});
  cy.contains('li','Any Price').click({force: true});
  cy.contains('Any Price').should('exist')
  
  cy.contains('span','Property type').click({force: true});
  cy.get('input[type="checkbox"]').eq(1).click({force: true});

  cy.contains('span','Bedrooms').click({force: true});
  cy.contains('span','Studio').click({force: true});

  cy.get('[data-cy="search"]').click({force: true});
  cy.get('img[alt="empty listings image"]').should('exist');

})