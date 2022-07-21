/// <reference types="Cypress"/>


import { onLoanTypePage } from "../../support/DBXP_ApplyLoanNegativeFlow/loanTypeDetailsPage"

import { onEmploymentTypePage } from "../../support/DBXP_ApplyLoanPageObject/employmentTypePage"
import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onUserDetailsPage } from "../../support/DBXP_ApplyLoanPageObject/userDetailsPage"
import { onBase_Pg } from "../../support/Utility/Base_Pg"

describe('DBXP Apply Loan Test Suit', function() {

it('Validate Loan type with invalid data', ()=>{
cy.fixture('LoginData').then(loginData =>{
        onLoginPage.loginWithValidUserNameAndPassword(loginData.Username,loginData.Password)
    })
        onBase_Pg.clickOnLoanButton()
        // onBase_Pg.clickOnApplyLoanBtn()
        onBase_Pg.clickOnAddNewLoanButton()
        cy.fixture('ApplyLoanData').then(applyLoan=>{
        onUserDetailsPage.enterPanNumber(applyLoan.PanNumber)
        onEmploymentTypePage.chooseEmploymentType(applyLoan.EmploymentType)
        onEmploymentTypePage.enterDataForRetired(applyLoan.LastEmployer)
        })


cy.fixture('ApplyLoanNegativeData').then(negativeData =>{
    onLoanTypePage.chooseLoanTypeAndEnterAmount(negativeData.LoanType,negativeData.Amount,negativeData.Currency)


})




    })
})