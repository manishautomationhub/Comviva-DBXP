/// <reference types="Cypress"/>

import { onLoginPage } from "../../support/DBXP_ApplyLoanPageObject/loginPage"
import { onFull_Closure_Pg } from "../../support/DBXP_Pre_Payment_For_PersonalLoan_PageObject/full_Closure"
import { onSuccess_Page } from "../../support/DBXP_Pre_Payment_For_PersonalLoan_PageObject/success_Page"
import { onBase_Pg } from "../../support/Utility/Base_Pg"

describe('DBXP Full closure',function(){

    it('Full closure testcase',()=>{
cy.fixture('LoginData').then(loginData=>{
    onLoginPage.loginWithValidUserNameAndPassword(loginData.Username,loginData.Password)
})  
// onBase_Pg.clickOnMyAccountButton()
// onBase_Pg.syncAccountButton()
onBase_Pg.clickOnLoanButton()
onBase_Pg.clickOnCard()
onBase_Pg.clickOnPrePaymentOfPersonalLoan()
onFull_Closure_Pg.validateFullClosure()
onFull_Closure_Pg.AmountDetails()
onFull_Closure_Pg.clickOnCheckBox()
onFull_Closure_Pg.clickOnSubmitBtn()
onSuccess_Page.success_validation()
    })

    
    
    })