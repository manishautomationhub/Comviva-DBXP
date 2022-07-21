/// <reference types="Cypress"/>

export class EMI_Details 
{

selectEMIDays(dayName)
{
    cy.get('[formcontrolname="emidate"]').click()
cy.get('[role="option"]').eq(dayName-1).click()
this.validateDebitAccount()
this.clickOnSubmitBtn()
}

validateDebitAccount()
{
    cy.get('[formcontrolname="fromAccountNumber"]').should('be.visible')
    // cy.contains(' Balance : $ 10,000').should('be.visible')
}

clickOnSubmitBtn()
{
    cy.get('[class="proceed-btn proceed-btn-new mat-stroked-button"]').last().click()
}

}
export const onEMI_Details_Pg = new EMI_Details()