/// <reference types="Cypress"/>


import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
// import { onDatePicker_Page } from "../../support/DBXP_ManageLoanPageObject/datePicker_Page"
import { onEMI_Details_Pg } from "../../support/DBXP_ManageLoanPageObject/emi_Details_Pg"
import { onLoanSummaryAndOutStandingAmount_Pg } from "../../support/DBXP_ManageLoanPageObject/loan_Summary_OutStanding_Amount_Pg"
import { onExport_Statement_Pg } from "../../support/DBXP_ManageLoanPageObject/request_Intrest_Certificate_Statement"
import { onSuccess_Pg } from "../../support/DBXP_ManageLoanPageObject/success_page"
import { onBase_Pg } from "../../support/Utility/Base_Pg"
// import { onDatePicker_Utils_Pg } from "../../support/Utility/datePickerUtils"


describe('DBXP Manage Loan ',()=> {
    
    it('Validate Request Intrest Certificate',()=> {
cy.fixture('ApplyLoanData').then(loginData => {
    onLoginPage.loginWithValidUserNameAndPassword(loginData.Username, loginData.Password)
})
onBase_Pg.clickOnMyAccountButton()
onBase_Pg.syncAccountButton()
onBase_Pg.clickOnLoanButton()
onBase_Pg.clickOnCard()
onLoanSummaryAndOutStandingAmount_Pg.clickOnManagePersonalLoan()
onEMI_Details_Pg.clickOnRequest_Intrest_Certificate()
// onExport_Statement_Pg.clickOnManagePersonalLoan('Choose Custom')
onExport_Statement_Pg.chooseCustomOption()
onExport_Statement_Pg.chooseCustomDateForStart(2018,'MAR',9)
onExport_Statement_Pg.chooseCustomDate_For_End(2021,'JAN',3)
onSuccess_Pg.success_Message_Validation()

    })  
})
