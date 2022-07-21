/// <reference types= "Cypress"/>

import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onCreditScore_Report_Pg } from "../../support/DBXP_CreditScoreAndReport/creditScrore_Report"
import { onSuccess_Pg } from "../../support/DBXP_CreditScoreAndReport/successPage"

import { onBase_Pg } from "../../support/Utility/Base_Pg"


describe('DBXP Credit Score',function(){

it('check Credit score',()=>{

cy.fixture('LoginData').then(loginData=>{
    onLoginPage.loginWithValidUserNameAndPassword(loginData.Username,loginData.Password)
})
onBase_Pg.clickOnCreditScore()
onCreditScore_Report_Pg.checkCreditScore()
onCreditScore_Report_Pg.clickOnCreditCardReport()
onCreditScore_Report_Pg.chooseEmailCheckBox()
onCreditScore_Report_Pg.clickOnDownLoad()
onCreditScore_Report_Pg.validateReportDownload()
onSuccess_Pg.validateSuccessPg()
})

})
