describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('http://localhost:4200')
  
      cy.contains('Login').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/login')
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })