/// <reference types="Cypress"/>

import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onPart_Closure_Pg } from "../../support/DBXP_Pre_Payment_For_PersonalLoan_PageObject/part_Closure"
import { onSuccess_Page } from "../../support/DBXP_Pre_Payment_For_PersonalLoan_PageObject/success_Page"
import { onBase_Pg } from "../../support/Utility/Base_Pg"


describe('DBXP Part closure',function(){

it('Part closure testcase',()=>{
    cy.fixture('LoginData').then(loginData=>{
onLoginPage.loginWithValidUserNameAndPassword(loginData.Username,loginData.Password)
})
// onBase_Pg.clickOnMyAccountButton()
// onBase_Pg.syncAccountButton()
onBase_Pg.clickOnLoanButton()
onBase_Pg.clickOnCard()
onBase_Pg.clickOnPrePaymentOfPersonalLoan()
onPart_Closure_Pg.choosePartClosure(60000)
onSuccess_Page.success_validation()



    
})


})