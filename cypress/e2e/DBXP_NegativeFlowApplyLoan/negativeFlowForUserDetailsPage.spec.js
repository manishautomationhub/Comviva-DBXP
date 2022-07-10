/// <reference types="Cypress"/>

import { onUserDetailsPage } from "../../support/DBXP_ApplyLoanNegativeFlow/userDetailsPage"
import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onBase_Pg } from "../../support/Utility/Base_Pg"



describe('DBXP Apply Loan Test Suit', function() {


it('validate PanNumber with invalid data',()=>{

    cy.fixture('ApplyLoanData').then(applyLoanData =>{
    onLoginPage.loginWithValidUserNameAndPassword('sdfghj34567','dfghjk')
    })

    cy.fixture('ApplyLoanNegativeData').then(applyLoanData =>{
        onBase_Pg.clickOnLoanButton()
        onBase_Pg.clickOnApplyLoanBtn()
   onUserDetailsPage.enterPanNumber(applyLoanData.PanNumber)

    })
})

})