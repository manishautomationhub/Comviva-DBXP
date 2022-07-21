/// <reference types="Cypress"/>

export class Success_Page
{

successPageValidation()
{
cy.get('.card-image').scrollIntoView().should('be.visible')
cy.get('[class="first-title"]').scrollIntoView().should('be.visible')
.and('have.text','Our customer care will get in touch with you soon. You can track your service request from Help Center')
cy.get('div[class="first-heading"]').scrollIntoView().should('be.visible')
cy.get('[class="service-id"]').scrollIntoView().should('be.visible')
cy.get('.second-title.service-id.mb-0').scrollIntoView().should('be.visible')
.and('have.text',' Application in process')
cy.get('[class="close-btn"]').scrollIntoView().click()


}

}

export const onSuccess_Pg= new Success_Page()