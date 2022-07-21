/// <reference types="Cypress"/>

export class UserDetails
{

enterPanNumber(enterPannumber)
{
cy.get('[formcontrolname="name"]').scrollIntoView().should('be.visible')
cy.get('[formcontrolname="dob"]').scrollIntoView().should('be.visible')
cy.get('[formcontrolname="mobile"]').scrollIntoView().should('be.visible')
cy.get('[formcontrolname="panNumber"]').scrollIntoView().type(enterPannumber)
cy.get('[alt="green-tick"]').should('be.visible')
cy.get('[formcontrolname="toAccountNumber"]').should('be.visible')
cy.contains(' Balance : $ 10,000').should('be.visible')
this.clickOnCheckBox()
this.clickOnProceedBtn()
}

clickOnCheckBox()
{
    cy.get('[class="termsnCondition"]').scrollIntoView().click()
}

clickOnProceedBtn()
{
    cy.get('[class="proceed-btn proceed-btn-new mat-stroked-button"]').eq(1).scrollIntoView().click()
}


}

export const onUserDetails_Pg = new UserDetails()