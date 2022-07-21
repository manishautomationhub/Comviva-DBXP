/// <reference types="Cypress"/>

export class EMI_Details 
{

chooseEmiDate(enterDate)
{

cy.get('div').find('[formcontrolname="newEmiDate"]').then(dropdown=>{
cy.wrap(dropdown).click()
cy.get('mat-option [class="mat-option-text"]').eq(enterDate-1).click()
})
}

debitAccountDetails()
    {
// cy.contains('savings - 1325793810').scrollIntoView().should('be.visible')
// cy.contains('Balance : $ 1,000,000').scrollIntoView().should('be.visible')
this.clickOnSubmitBtn()
    }

clickOnSubmitBtn()
{
    cy.get('[class="btn apply-button"]').click()
}


clickOnRequest_Intrest_Certificate(){
cy.get('[routerlink="/manage-loan/interest-request"]').click()
}

clickOnRequest_Statement()
{
cy.get('[routerlink="/manage-loan/export-statement"]').click()

}

successValidate()
{
cy.get('[class="success-icon"] img').should('be.visible')
cy.get('[class="popup-div-inside"] p').should('be.visible').and('have.text','SuccessfulYour Loan settings are updated successfully')
cy.get('[class="success-message"] p').should('be.visible').and('have.text','Your Loan settings are updated successfully')
cy.get('[class="submit-btn"] button').click()

}


}
export const onEMI_Details_Pg =new EMI_Details()