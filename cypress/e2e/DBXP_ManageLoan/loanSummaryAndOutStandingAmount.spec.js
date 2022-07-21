/// <reference types="Cypress"/>

import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onLoanSummaryAndOutStandingAmount_Pg } from "../../support/DBXP_ManageLoanPageObject/loan_Summary_OutStanding_Amount_Pg"
import { onBase_Pg } from "../../support/Utility/Base_Pg"



describe('DBXP Manage Loan ',()=> {
    
    it('Validate Loan details',()=> {
        cy.fixture('LoginData').then(liginData=>{
onLoginPage.loginWithValidUserNameAndPassword(liginData.Username,liginData.Password)
})
// onBase_Pg.clickOnMyAccountButton()
// onBase_Pg.syncAccountButton()
onBase_Pg.clickOnLoanButton()
onBase_Pg.clickOnCard()
onLoanSummaryAndOutStandingAmount_Pg.SummaryAmountData()
onLoanSummaryAndOutStandingAmount_Pg.outStandingAmountData()
onLoanSummaryAndOutStandingAmount_Pg.loanSummaryCardDetails()
onLoanSummaryAndOutStandingAmount_Pg.outstandingAmountValidate()
onLoanSummaryAndOutStandingAmount_Pg.clickOnDoneBtn()

    })
})