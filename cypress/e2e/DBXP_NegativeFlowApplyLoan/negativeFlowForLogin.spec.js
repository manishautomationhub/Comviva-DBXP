/// <reference types="Cypress"/>

import { onLoginPage } from "../../support/DBXP_ApplyLoanNegativeFlow/loginPage"


describe('DBXP Apply Loan Test Suit', function() {


it('Validate Negative Testcase for Login ', function() {
    cy.fixture('ApplyLoanNegativeData').then(applyLoanData =>{
onLoginPage.loginWithInvalidUserNameAndPassword(applyLoanData.Username, applyLoanData.Password)
    })
})
})