/// <reference types="Cypress"/>


import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onEMI_Details_Pg } from "../../support/DBXP_Pre-Approved_Loan_PageObject/emi_Page"
import { onEnterYourDetails_Pg } from "../../support/DBXP_Pre-Approved_Loan_PageObject/enterYourDetails"
import { onPreApprovedLoanCard_Pg } from "../../support/DBXP_Pre-Approved_Loan_PageObject/pre_ApprovedCard"
import { onSuccess_Pg } from "../../support/DBXP_Pre-Approved_Loan_PageObject/success_Page"
import { onUserDetails_Pg } from "../../support/DBXP_Pre-Approved_Loan_PageObject/userDetails"
import { onBase_Pg } from "../../support/Utility/Base_Pg"


describe('DBXP Pre Approved loan',function(){

    it('Pre Approved Loan testcase',()=>{
cy.fixture('LoginData').then(loginData=>{
    onLoginPage.loginWithValidUserNameAndPassword(loginData.Username,loginData.Password)
})
cy.fixture('PreApprovedLoan').then(preApprovedLoanData=>{
onPreApprovedLoanCard_Pg.preApprovedLoanCard(preApprovedLoanData.LoanType)
onEnterYourDetails_Pg.validateOffer()
onEnterYourDetails_Pg.enterAmountAndTenure(preApprovedLoanData.Amount,preApprovedLoanData.Tenure)
onEnterYourDetails_Pg.clickOnProceedBtn()
onUserDetails_Pg.enterPanNumber(preApprovedLoanData.Pannumber)
onEMI_Details_Pg.selectEMIDays(preApprovedLoanData.EMIDate)
onSuccess_Pg.validateSuccessMsg()
    })
})
})