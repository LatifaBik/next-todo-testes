describe('todo app', () => {
  it('can create a new task', () => {
    cy.visit('http://localhost:3001')
    cy.get('input').focus().type('Learn e2e testing');
    cy.get('button').contains('OK').click();
    cy.get('.taskList').should('contain', 'Learn e2e testing');
  })
})