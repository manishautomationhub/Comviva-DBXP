/// <reference types="Cypress"/>


import { onLoanTypePage } from "../../support/DBXP_ApplyLoanNegativeFlow/loanTypeDetailsPage"

import { onEmploymentTypePage } from "../../support/DBXP_ApplyLoanPageObject/employmentTypePage"
import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onUserDetailsPage } from "../../support/DBXP_ApplyLoanPageObject/userDetailsPage"
import { onBase_Pg } from "../../support/Utility/Base_Pg"

describe('DBXP Apply Loan Test Suit', function() {

    it('Validate Loan type with invalid data', ()=>{
cy.fixture('ApplyLoanData').then(validData =>{
        onLoginPage.loginWithValidUserNameAndPassword(validData.Username,validData.Password)
        onBase_Pg.clickOnLoanButton()
        onBase_Pg.clickOnApplyLoanBtn()
        onUserDetailsPage.enterPanNumber(validData.PanNumber)
        onEmploymentTypePage.chooseEmploymentType(validData.EmploymentType)
        onEmploymentTypePage.enterDataForRetired(validData.LastEmployer)

    })

cy.fixture('ApplyLoanNegativeData').then(negativeData =>{
    onLoanTypePage.chooseLoanTypeAndEnterAmount(negativeData.LoanType,negativeData.Amount,negativeData.Currency)


})




    })
})