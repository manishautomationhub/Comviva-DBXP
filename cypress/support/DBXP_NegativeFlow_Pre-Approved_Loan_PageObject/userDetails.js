/// <reference types="Cypress"/>

export class UserDetails
{

enterPanNumber(enterPannumber)
{
    cy.get('[formcontrolname="name"]').scrollIntoView().should('be.visible')
    cy.get('[formcontrolname="dob"]').scrollIntoView().should('be.visible')
    cy.get('[formcontrolname="mobile"]').scrollIntoView().should('be.visible')
    cy.get('[formcontrolname="panNumber"]').type(enterPannumber)
    cy.get('[type="checkbox"]').check({force:true}).should('be.checked')
    cy.get('[class="proceed-btn proceed-btn-new mat-stroked-button"]').eq(1).scrollIntoView().should('be.disabled')
    cy.get('[role="alert"]').should('have.text',' Enter valid PAN Card Number ')
    cy.get('[formcontrolname="panNumber"]').clear().type('ASDGE4567Y')
    cy.get('[alt="green-tick"]').should('be.visible')
    cy.get('[type="checkbox"]').check({force:true}).should('be.checked')
    cy.get('[class="proceed-btn proceed-btn-new mat-stroked-button"]').eq(1).scrollIntoView().should('be.enabled')
    cy.get('[formcontrolname="panNumber"]').clear().type(enterPannumber)
    cy.get('[class="proceed-btn proceed-btn-new mat-stroked-button"]').eq(1).scrollIntoView().should('be.disabled')
    cy.get('[role="alert"]').should('have.text',' Enter valid PAN Card Number ')
    cy.get('[formcontrolname="panNumber"]').clear().type('ASDGE4567Y')
    cy.get('[alt="green-tick"]').should('be.visible')
    cy.get('[class="proceed-btn proceed-btn-new mat-stroked-button"]').eq(1).scrollIntoView().should('be.enabled')
    cy.get('[formcontrolname="panNumber"]').scrollIntoView().type(enterPannumber)
    cy.get('[formcontrolname="toAccountNumber"]').should('be.visible')
    cy.contains(' Balance : $ 10,000').should('be.visible')
}

}

export const onUserDetails_Pg = new UserDetails()