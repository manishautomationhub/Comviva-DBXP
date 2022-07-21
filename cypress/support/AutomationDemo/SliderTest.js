describe('Validate the slidervalue', function() {

  // it('Should assert the slider value correctly', function() {
  //   cy.visit('https://demoqa.com/slider')
  //   cy.get('input[type="range"]').invoke('val', 65).trigger('change')
  //   cy.get('#sliderValue').should('have.value', 65)

  // })

  it('Should assert the slider value correctly', function() {
    cy.visit('https://demoqa.com/slider')
    cy.get('input[type="range"]')
      .then($el => $el[0].stepUp(40) )  // steps = 65 - 25
      .trigger('change')
    cy.get('#sliderValue').should('have.value', 65)     // passes
  })


})