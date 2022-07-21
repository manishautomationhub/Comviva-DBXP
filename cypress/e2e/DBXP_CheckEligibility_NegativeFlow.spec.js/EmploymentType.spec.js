/// <reference types="Cypress"/>


import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onUserDetailsPage } from "../../support/DBXP_CheckEligibility_/userDetailsPage"
import { onEmploymentTypePage } from "../../support/DBXP_NegativeFlow_CheckEligibility/employmentTypePage"

import { onBase_Pg } from "../../support/Utility/Base_Pg"


describe('DBXP Check Eligibility Test Suit', function() {

it('Validate Employment type with invalid data', ()=>{
cy.fixture('LoginData').then(LoginData =>{
onLoginPage.loginWithValidUserNameAndPassword(LoginData.Username, LoginData.Password)
})
onBase_Pg.clickOnLoanButton()
// onBase_Pg.clickOnCheckEligibiltyBtn()
onBase_Pg.clickOnCheckEligibilityLink()
cy.fixture('CheckEligibility').then(checkEligibility=>{
    onUserDetailsPage.chooseCurrency(checkEligibility.Currency)
    onUserDetailsPage.chooseLoanType(checkEligibility.LoanType,checkEligibility.Amount)
    onUserDetailsPage.enterPanNumber(checkEligibility.PanNumber)
})


    cy.fixture('CheckEligibilityNegativeData').then(negativeData =>{
        onEmploymentTypePage.chooseEmploymentType(negativeData.EmploymentType)
    onEmploymentTypePage.enetrDataForSalaried(negativeData.EmployerName , negativeData.MonthlyIncome)

})



    })

})