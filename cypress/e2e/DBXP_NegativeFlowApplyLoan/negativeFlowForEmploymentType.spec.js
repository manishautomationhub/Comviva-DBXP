/// <reference types="Cypress"/>

import { onUserDetailsPage } from "../../support/DBXP_ApplyLoanPageObject/userDetailsPage"
import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onEmploymentTypePage } from "../../support/DBXP_ApplyLoanNegativeFlow/employmentTypePage"
import { onBase_Pg } from "../../support/Utility/Base_Pg"


describe('DBXP Apply Loan Test Suit', function() {

    it('Validate Employment type with invalid data', ()=>{
        cy.fixture('ApplyLoanData').then(applyloanData=>{
onLoginPage.loginWithValidUserNameAndPassword(applyloanData.Username,applyloanData.Password)
onBase_Pg.clickOnLoanButton()
onBase_Pg.clickOnApplyLoanBtn()
onUserDetailsPage.enterPanNumber(applyloanData.PanNumber)
})

cy.fixture('ApplyLoanNegativeData').then(negativeData =>{
    onEmploymentTypePage.chooseEmploymentType(negativeData.EmploymentType)
    onEmploymentTypePage.enetrDataForSalaried(negativeData.LastEmployer,negativeData.Currency, negativeData.MonthlyIncome)
})



    })

})