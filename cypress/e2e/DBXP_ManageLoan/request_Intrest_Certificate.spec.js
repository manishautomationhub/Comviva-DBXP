/// <reference types="Cypress"/>


import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onEMI_Details_Pg } from "../../support/DBXP_ManageLoanPageObject/emi_Details_Pg"
import { onExport_Statement_Pg } from "../../support/DBXP_ManageLoanPageObject/request_Intrest_Certificate_Statement"
import { onSuccess_Pg } from "../../support/DBXP_ManageLoanPageObject/success_page"
import { onBase_Pg } from "../../support/Utility/Base_Pg"



describe('DBXP Manage Loan ',()=> {
    
    it('Validate Request Intrest Certificate',()=> {
cy.fixture('LoginData').then(loginData => {
    onLoginPage.loginWithValidUserNameAndPassword(loginData.Username, loginData.Password)
})
// onBase_Pg.clickOnMyAccountButton()
// onBase_Pg.syncAccountButton()
onBase_Pg.clickOnLoanButton()
onBase_Pg.clickOnCard()
onBase_Pg.clickOnManagePersonalLoan()
onEMI_Details_Pg.clickOnRequest_Intrest_Certificate()
cy.fixture('ManageLoanData').then(manageLoan=>{
// onExport_Statement_Pg.chooseCustomOption()

//     onExport_Statement_Pg.chooseCustomDateForStart(manageLoan.StartYear,manageLoan.StartMonth,manageLoan.StartDay)
//     onExport_Statement_Pg.chooseCustomDate_For_End(manageLoan.EndYear,manageLoan.EndMonth,manageLoan.EndDay)

onExport_Statement_Pg.chooseMonthForStatement(manageLoan.Date)
})
onSuccess_Pg.success_Validation_For_RIC()

    })  
})
