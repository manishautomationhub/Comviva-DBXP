/// <reference types="Cypress"/>

export class Success_Page{

success_Validation_For_RIC()
{
this.success_Msg_Validation()
cy.get('[class="success-message"] p').should('have.text','Your Interest certificate has been sent to your email successfully')
this.clickOnSendBtn()
}

success_Msg_Validation()
    {

 cy.get('div').find('[class="popup-div-inside"]').then(success =>{
    cy.wrap(success).find('[class="card-heading"]').should('have.text','Successful')
    cy.get('[class="success-icon"] img').should('be.visible')
        })  
    }

    clickOnSendBtn()
    {
        cy.get('[class="submit-btn"] button').click()
    }

    success_Validation_For_RS (){

        this.success_Msg_Validation()
cy.get('[class="success-message"] p').should('have.text','Your statement has been sent to your email successfully')
this.clickOnSendBtn()

    }


}
export const onSuccess_Pg = new Success_Page()
