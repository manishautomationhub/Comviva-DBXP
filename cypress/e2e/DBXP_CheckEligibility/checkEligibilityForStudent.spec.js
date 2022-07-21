/// <reference types="Cypress"/>

import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onEmploymentTypePage } from "../../support/DBXP_CheckEligibility_/employmentTypePage"
import { onSuccess_Pg } from "../../support/DBXP_CheckEligibility_/success_Page"
import { onUserDetailsPage } from "../../support/DBXP_CheckEligibility_/userDetailsPage"
import { onBase_Pg } from "../../support/Utility/Base_Pg"



describe('DBXP CheckEligibility ',()=> {
    
    it('Validate Check Eligibility For Student',()=> {
 cy.fixture('LoginData').then(loginData=>{       
 onLoginPage.loginWithValidUserNameAndPassword(loginData.Username,loginData.Password)
 })

 cy.fixture('CheckEligibility').then(checkEligibility=>{  
 onBase_Pg.clickOnLoanButton()
//  onBase_Pg.clickOnCheckEligibiltyBtn()
 onBase_Pg.clickOnCheckEligibilityLink()
 onUserDetailsPage.chooseLoanType(checkEligibility.LoanType,checkEligibility.Amount)
 onUserDetailsPage.chooseCurrency(checkEligibility.Currency)
 onUserDetailsPage.enterPanNumber(checkEligibility.PanNumber)
onEmploymentTypePage.chooseEmploymentType('Student')
onEmploymentTypePage.enterDataForStudent(checkEligibility.CoBorrowerMonthlyIncome,checkEligibility.CoBorrowerName,checkEligibility.Qualification)
onSuccess_Pg.successPageValidation()
 })
    })
})