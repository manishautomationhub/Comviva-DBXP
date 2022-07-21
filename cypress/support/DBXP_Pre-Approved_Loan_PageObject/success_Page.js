/// <reference types="Cypress"/>

export class Success_Pg
{

validateSuccessMsg()
{
cy.get('[class="card-image"]').should('be.visible')
cy.get('[class="submit-success-header"]').should('be.visible')
cy.get('[class="submit-success-sub-header"]').should('be.visible')
this.clickOnCloseBtn()
}

clickOnCloseBtn()
{
    cy.get('[class="button-close"]').click()
}

}
export const onSuccess_Pg = new Success_Pg()