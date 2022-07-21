/// <reference types="Cypress"/>

export class Success
{

validateSuccessPg()
{
    cy.get('div .success-heading').should('be.visible').and('contain','Successful')
    cy.get('[alt="Success"]').should('be.visible')
    cy.contains(' Your report has been downloaded and sent to the email successfully').should('be.visible')
    cy.get('div.done-button').should('be.visible').click()
}

}
export const onSuccess_Pg = new Success()