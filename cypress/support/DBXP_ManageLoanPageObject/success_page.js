/// <reference types="Cypress"/>

export class Success_Page{

success_Validation_For_RIC()
{
this.success_Msg_Validation()
cy.get('[class="congratulations-tag mat-dialog-content"]').should('have.text','Your Interest certificate has been sent to your email successfully')
this.clickOnCloseBtn()
}

success_Msg_Validation()
    {

    cy.get('[class="congratulations mat-dialog-title"]').should('have.text','Successful')
    cy.get('[class="success-image"]').should('be.visible')
    
    }

    clickOnCloseBtn()
    {
        cy.get('[class="button close-button"]').click()
    }

    success_Validation_For_RS (){

        this.success_Msg_Validation()
cy.get('[class="congratulations-tag mat-dialog-content"]').should('have.text','Your statement has been sent to your email successfully')
this.clickOnCloseBtn()
    }


}
export const onSuccess_Pg = new Success_Page()
