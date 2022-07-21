/// <reference types="Cypress"/>

import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onEmploymentTypePage } from "../../support/DBXP_NegativeFlow_CheckEligibility/employmentTypePage"
import { onUserDetailsPage } from "../../support/DBXP_NegativeFlow_CheckEligibility/userDetailsPage"
import { onBase_Pg } from "../../support/Utility/Base_Pg"



describe('DBXP CheckEligibility ',()=> {
    
    it('Validate checkEligibility',()=> {
 cy.fixture('LoginData').then(loginData=>{       
 onLoginPage.loginWithValidUserNameAndPassword(loginData.Username,loginData.Password)
 })

 cy.fixture('CheckEligibilityNegativeData').then(checkEligibility=>{  
 onBase_Pg.clickOnLoanButton()
 onBase_Pg.clickOnCheckEligibilityLink()
// onBase_Pg.clickOnCheckEligibiltyBtn()
 onUserDetailsPage.chooseCurrency(checkEligibility.Currency)
 onUserDetailsPage.enterPanNumber(checkEligibility.PanNumber,checkEligibility.Amount)
 })
    })
})