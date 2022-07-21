/// <reference types="Cypress"/>
export class Success_Page 
{

success_validation()
{

cy.get('[class="card-heading"]').should('be.visible')
.and('have.text','Interest Amount Saved $ 5,000 ')
cy.get('[class="success-icon"]').should('be.visible')
cy.get('[class="card-title ng-star-inserted"]').should('have.text','You have successfully part-closed the loan number LNAC009411411 ')
cy.get('[class="popup-submit-btn"]').click()



}



}
export const onSuccess_Page  = new Success_Page()