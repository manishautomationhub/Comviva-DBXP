/// <reference types="Cypress"/>
describe('MySuiteDropdown', function() {
    it('Dropdown handle', function () {
        cy.visit("http://demo.automationtesting.in/Register.html");

cy.get('#Skills').select('Android').should('have.value','Android')



    }) 
})