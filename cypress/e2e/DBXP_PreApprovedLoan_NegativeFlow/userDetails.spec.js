/// <reference types="Cypress"/>


import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onUserDetails_Pg } from "../../support/DBXP_NegativeFlow_Pre-Approved_Loan_PageObject/userDetails"
import { onEnterYourDetails_Pg } from "../../support/DBXP_Pre-Approved_Loan_PageObject/enterYourDetails"

import { onPreApprovedLoanCard_Pg } from "../../support/DBXP_Pre-Approved_Loan_PageObject/pre_ApprovedCard"


describe('DBXP pre approved loan',function(){

    it('Pre approved loan negative scenario',()=>{
      
        cy.fixture('LoginData').then(loginData =>{
            onLoginPage.loginWithValidUserNameAndPassword(loginData.Username,loginData.Password)

        })
        cy.fixture('PreApprovedLoan').then(preApprovedLoanData=>{
            onPreApprovedLoanCard_Pg.preApprovedLoanCard(preApprovedLoanData.LoanType)
            onEnterYourDetails_Pg.enterAmountAndTenure(preApprovedLoanData.Amount,preApprovedLoanData.Tenure)
            onEnterYourDetails_Pg.clickOnProceedBtn()
        })
        onUserDetails_Pg.enterPanNumber('ASDAWhgfd6543')
    })
})