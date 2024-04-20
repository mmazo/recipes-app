describe('Test recipes page', () => {
  it('Visits the recipes page', () => {
    cy.visit('/')
    cy.contains('Recipes')
    cy.contains('Add New Recipe')
  })
})
