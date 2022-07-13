/// <reference types="Cypress"/>
import { onAddressPage } from '../../support/DBXP_ApplyLoanPageObject/addressDetailsPage'

import { onEmploymentTypePage } from '../../support/DBXP_ApplyLoanPageObject/employmentTypePage'
import { onLoanTypePage } from '../../support/DBXP_ApplyLoanPageObject/loanTypeDetailsPage'
import { onLoginPage} from '../../support/DBXP_ApplyLoanPageObject/loginPage'
import { onPurposeOfLoanPage } from '../../support/DBXP_ApplyLoanPageObject/purposeLoanDetailsPage'
import { onUploadDocumentsPage } from '../../support/DBXP_ApplyLoanPageObject/uploadDocuments'
import { onUserDetailsPage } from '../../support/DBXP_ApplyLoanPageObject/userDetailsPage'
import { onBase_Pg } from '../../support/Utility/Base_Pg'



describe('DBXP Apply Loan For Business Owner ',()=> {
    
    
    it('Valid Apply Loan for Business Owner',()=> {
        
    cy.fixture('ApplyLoanData').then(applyLoanData =>{
    onLoginPage.loginWithValidUserNameAndPassword(applyLoanData.Username, applyLoanData.Password)
    onBase_Pg.clickOnLoanButton()
    onBase_Pg.clickOnAddNewLoanButton()
    // onBase_Pg.clickOnApplyLoanBtn()
    onUserDetailsPage.enterPanNumber(applyLoanData.PanNumber)
    onEmploymentTypePage.chooseEmploymentType('Business Owner')
    onEmploymentTypePage.enterDataForBusinessOwner(applyLoanData.StartDateOfBusiness,applyLoanData.CompanyName, applyLoanData.Currency, applyLoanData.LastYearPAT)
    onLoanTypePage.chooseLoanTypeAndEnterAmount(applyLoanData.LoanType,applyLoanData.Amount)
    onPurposeOfLoanPage.choosePurposeOfLoanWithFatherAndMotherName(applyLoanData.PurposeOfLoan,applyLoanData.FatherName, applyLoanData.MotherName)
    onAddressPage.enterAddress(applyLoanData.Address,applyLoanData.PinCode)
    onUploadDocumentsPage.upLoadDocumentsForRetired_BusinessOwner_SelfEmployed("download (6).jpg")


})

})

})